/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from "react";
import { AdvertisingProvider, AdvertisingSlot } from "react-prebid";
import { useLocation } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { AD_FOLDER, IMAGES } from "../assets/constants";
import AdSlot, { SlotPosition } from "../components/advertisements";
import { firstAdUnit, secondAdUnit } from "../config/prebid-config";
import { TrackEventType, useTracking } from "../hooks";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";
import Sidebar from "./sidebar";

const horizontalAdsImages = [
  IMAGES.PERION_HORIZONTAL_AD,
  IMAGES.W3SCHOOL_HORIZONTAL_AD,
  IMAGES.ADOBIE_HORIZONTAL_AD,
];

const verticalAdsImages = [
  IMAGES.W3SCHOOL_SIDE_AD,
  IMAGES.CIQ_SIDE_AD,
  IMAGES.PERION_SIDE_AD,
];

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  const [adsImageIndexs, setAdsImageIndexs] = useState<number>(0);
  const [config, setConfig] = useState<Record<string, any>>(firstAdUnit);
  const { pathname } = useLocation();
  const { trackEvent, trackUserDetails } = useTracking();

  useMemo(() => {
    if (!localStorage.getItem("uniqueId")) {
      const uniqueId = uuidv4();
      localStorage.setItem("uniqueId", uniqueId);
      trackUserDetails(uniqueId);
    }
    trackEvent({
      type: TrackEventType.PageLoad,
    });
  }, [pathname]);

  useEffect(() => {
    const handleUnloadEvent = (event: BeforeUnloadEvent | Event) => {
      trackEvent({
        type: TrackEventType.PageExitIntent,
        event_type: event.type,
      });
    };
    window.addEventListener("beforeunload", handleUnloadEvent);
    window.addEventListener("unload", handleUnloadEvent);
    return () => {
      window.removeEventListener("beforeunload", handleUnloadEvent);
      window.removeEventListener("unload", handleUnloadEvent);
    };
  }, []);

  useEffect(() => {
    function getRandomNumbers() {
      const randomNumber = Math.random() * 3;
      return Math.floor(randomNumber);
    }
    const intervalId = setInterval(() => {
      const randomNumber = getRandomNumbers();
      if (randomNumber % 2 === 0) {
        setConfig(secondAdUnit);
      }
      setAdsImageIndexs(randomNumber);
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <AdvertisingProvider config={config}>
      <Sidebar />
      <div className="app-container">
        <Header />
        <div className="main-content">
          <main className="content">
            <AdSlot slotName={SlotPosition.Header} isFakeAds={false}>
              <AdvertisingSlot id={`${SlotPosition.Header}-ad`} />
            </AdSlot>
            {children}
          </main>
          <div className="ad-slot-sidebar-container">
            <h2>ADVERTISEMENT</h2>
            <AdSlot slotName={SlotPosition.Sidebar} isFakeAds={true}>
              <img
                src={`${AD_FOLDER}/${verticalAdsImages[adsImageIndexs]}`}
                alt={`${SlotPosition.Sidebar}-ads`}
                className={`ad-slot-${SlotPosition.Sidebar}`}
              />
            </AdSlot>
          </div>
        </div>
        <Footer>
          <AdSlot slotName={SlotPosition.Footer} isFakeAds={true}>
            <img
              src={`${AD_FOLDER}/${horizontalAdsImages[adsImageIndexs]}`}
              alt={`${SlotPosition.Footer}-ads`}
              className={`ad-slot-${SlotPosition.Footer}`}
            />
          </AdSlot>
        </Footer>
      </div>
    </AdvertisingProvider>
  );
};

export default Layout;
