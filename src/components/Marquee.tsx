import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(Observer);

interface MarqueeProps {
  items: string[];
  className?: string;
  icon?: string;
  iconClassName?: string;
  reverse?: boolean;
}

interface HorizontalLoopConfig {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: boolean | number;
  paddingRight?: number;
  reversed?: boolean;
}

interface TimelineVars {
  modifiers?: Record<string, unknown>;
  overwrite?: boolean;
  [key: string]: unknown;
}

interface ExtendedTimeline extends gsap.core.Timeline {
  next?: (vars?: TimelineVars) => ExtendedTimeline;
  previous?: (vars?: TimelineVars) => ExtendedTimeline;
  current?: () => number;
  toIndex?: (index: number, vars?: TimelineVars) => ExtendedTimeline;
  times?: number[];
}

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName,
  reverse = false,
}: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLSpanElement | null>>([]);

  function horizontalLoop(items: HTMLElement[], config: HorizontalLoopConfig = {}): ExtendedTimeline {
    items = gsap.utils.toArray(items);
    config = config || {};
    const tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
      }) as gsap.core.Timeline;
    const length = items.length;
    const startX = items[0].offsetLeft;
    const times: number[] = [];
    const widths: number[] = [];
    const xPercents: number[] = [];
    let curIndex = 0;
    const pixelsPerSecond = (config.speed || 1) * 100;
    const snap =
        config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap === true ? 1 : config.snap || 1);
    let curX: number;
    let distanceToStart: number;
    let distanceToLoop: number;
    let item: HTMLElement;
    let i: number;
    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i: number, el: HTMLElement) => {
        const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
            (gsap.getProperty(el, "xPercent") as number)
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    const totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        (gsap.getProperty(items[length - 1], "scaleX") as number) +
      (parseFloat(String(config.paddingRight)) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index: number, vars: Record<string, unknown> = {}) {
      if (Math.abs(index - curIndex) > length / 2) {
        index += index > curIndex ? -length : length; // always go in the shortest direction
      }
      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (vars as any).modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (vars as any).overwrite = true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return tl.tweenTo(time, vars as any);
    }
    
    // Extend the timeline with custom methods
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extendedTl = tl as any;
    extendedTl.next = (vars?: Record<string, unknown>) => toIndex(curIndex + 1, vars);
    extendedTl.previous = (vars?: Record<string, unknown>) => toIndex(curIndex - 1, vars);
    extendedTl.current = () => curIndex;
    extendedTl.toIndex = (index: number, vars?: Record<string, unknown>) => toIndex(index, vars);
    extendedTl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete?.();
      tl.reverse();
    }
    return extendedTl;
  }

  useEffect(() => {
    const validItems = itemsRef.current.filter((item): item is HTMLSpanElement => item !== null);
    const tl = horizontalLoop(validItems, {
      repeat: -1,
      paddingRight: 30,
      reversed: reverse,
    });

    Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
          factor *= -1;
        }
        gsap
          .timeline({
            defaults: {
              ease: "none",
            },
          })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      },
    });

    return () => {
      tl.kill();
    };
  }, [items, reverse]);

  return (
    <div
      ref={containerRef}
      className={`${className} overflow-hidden w-full h-20 md:h[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap`}
    >
      <div className="flex">
        {items.map((text, index) => (
          <span
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="flex items-center px-16 gap-x-32"
            key={index}
          >
            {text} <Icon icon={icon} className={iconClassName} />{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Marquee;
