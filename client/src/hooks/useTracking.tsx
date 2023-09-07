import { MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import { useTracking as useReactTracking } from "react-tracking";
import { SlotPosition } from "../components/advertisements";

export enum TrackEventType {
  ApplicationUserData = "userData",
  PageLoad = "pageLoad",
  AdSlot = "adSlot",
  PageExitIntent = "pageExitIntent",
  Navigate = "navigate",
}

type TrackEventData = {
  type: TrackEventType.PageLoad | TrackEventType.PageExitIntent;
  event_type?: string;
};

type TrackMouseEventData =
  | {
      type: TrackEventType.AdSlot;
      slot_location: SlotPosition;
      navigate_to: string;
    }
  | { type: TrackEventType.Navigate; from_path: string; to_path: string };

const DESKTOP_DIVICES =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export function useTracking() {
  const { pathname } = useLocation();
  const { trackEvent: reactTrackEvent } = useReactTracking();

  const {
    navigator: { language, geolocation, onLine: on_line },
    screen: { width, height },
  } = window;

  function trackUserDetails(user_id: string) {
    const {
      navigator: {
        userAgent: user_agent,
        platform,
        cookieEnabled: cookie_enabled,
        doNotTrack: do_not_track,
      },
    } = window;
    const isMobile = DESKTOP_DIVICES.test(user_agent);

    const trackData = {
      user_id,
      event: TrackEventType.ApplicationUserData,
      timestamp: new Date().toISOString(),
      user_agent,
      device_type: isMobile ? "mobile" : "desktop",
      platform,
      cookie_enabled,
      do_not_track,
    };
    reactTrackEvent(trackData);
  }

  function generateEventData() {
    return {
      user_id: localStorage.getItem("uniqueId") || "",
      timestamp: new Date().toISOString(),
      current_path: pathname,
      screen_width: width,
      screen_height: height,
      language,
      on_line,
    };
  }

  function trackEvent(data: TrackEventData) {
    reactTrackEvent({
      ...generateEventData(),
      ...data,
      event_type: data.event_type || data.type,
    });
  }

  function trackMouseEvent(event: MouseEvent, data: TrackMouseEventData) {
    const { type: event_type, clientX, clientY } = event;
    reactTrackEvent({
      ...generateEventData(),
      event_type,
      mouse_position_x: clientX,
      mouse_position_y: clientY,
      ...data,
    });
  }

  return {
    trackUserDetails,
    trackMouseEvent,
    trackEvent,
  };
}
