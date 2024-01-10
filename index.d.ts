export function useBattery(): {
    supported: boolean;
    loading: boolean;
    level: null;
    charging: null;
    chargingTime: null;
    dischargingTime: null;
};
export function useClickAway(cb: any): React.MutableRefObject<null>;
export function useCopyToClipboard(): (((value: any) => void) | null)[];
export function useCounter(startingValue?: number, options?: {}): (number | {
    increment: () => void;
    decrement: () => void;
    set: (nextCount: any) => void;
    reset: () => void;
})[];
export function useDebounce(value: any, delay: any): any;
export function useDefault(initialValue: any, defaultValue: any): any[];
export function useDocumentTitle(title: any): void;
export function useFavicon(url: any): void;
export function useGeolocation(options?: {}): {
    loading: boolean;
    accuracy: null;
    altitude: null;
    altitudeAccuracy: null;
    heading: null;
    latitude: null;
    longitude: null;
    speed: null;
    timestamp: null;
    error: null;
};
export function useHistoryState(initialPresent?: {}): {
    state: any;
    set: (newPresent: any) => void;
    undo: () => void;
    redo: () => void;
    clear: () => void;
    canUndo: boolean;
    canRedo: boolean;
};
export function useHover(): (boolean | ((node: any) => void))[];
export function useIdle(ms?: number): boolean;
export function useIntersectionObserver(options?: {}): (((node: any) => void) | null)[];
export function useIsClient(): boolean;
export function useIsFirstRender(): boolean;
export function useList(defaultList?: any[]): (any[] | {
    set: (l: any) => void;
    push: (element: any) => void;
    removeAt: (index: any) => void;
    insertAt: (index: any, element: any) => void;
    updateAt: (index: any, element: any) => void;
    clear: () => void;
})[];
export function useLocalStorage(key: any, initialValue: any): any[];
export function useLockBodyScroll(): void;
export function useLongPress(callback: any, options?: {}): {};
export function useMap(initialState: any): Map<any, any>;
export function useMeasure(): ({
    width: null;
    height: null;
} | ((node: any) => void))[];
export function useMediaQuery(query: any): boolean;
export function useMouse(): (React.MutableRefObject<null> | {
    x: number;
    y: number;
    elementX: number;
    elementY: number;
    elementPositionX: number;
    elementPositionY: number;
})[];
export function useNetworkState(): {};
export function useObjectState(initialValue: any): any[];
export function useOrientation(): {
    angle: number;
    type: string;
};
export function usePreferredLanguage(): string;
export function usePrevious(value: any): null;
export function useQueue(initialValue?: any[]): {
    add: (element: any) => void;
    remove: () => undefined;
    clear: () => void;
    first: any;
    last: any;
    size: number;
    queue: any[];
};
export function useRenderCount(): number;
export function useRenderInfo(name?: string): {
    name: string;
    renders: number;
    sinceLastRender: number;
    timestamp: number;
} | undefined;
export function useScript(src: any, options?: {}): string;
export function useSessionStorage(key: any, initialValue: any): any[];
export function useSet(values: any): Set<any>;
export function useThrottle(value: any, interval?: number): any;
export function useToggle(initialValue: any): (boolean | ((value: any) => void))[];
export function useVisibilityChange(): boolean;
export function useWindowScroll(): ({
    x: null;
    y: null;
} | ((...args: any[]) => void))[];
export function useWindowSize(): {
    width: null;
    height: null;
};
import * as React from "react";
