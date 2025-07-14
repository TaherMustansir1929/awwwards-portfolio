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

declare module 'gsap' {
  interface Timeline {
    next?: (vars?: TimelineVars) => ExtendedTimeline;
    previous?: (vars?: TimelineVars) => ExtendedTimeline;
    current?: () => number;
    toIndex?: (index: number, vars?: TimelineVars) => ExtendedTimeline;
    times?: number[];
  }
}
