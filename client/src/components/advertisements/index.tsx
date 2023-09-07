import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TrackEventType, useTracking } from "../../hooks";
import "./advertisements.css";

export enum SlotPosition {
  Header = "header",
  Footer = "footer",
  Sidebar = "sidebar",
}

interface AdSlotProps {
  slotName: SlotPosition;
  children: JSX.Element;
  isFakeAds?: boolean;
}

const AdSlot: FC<AdSlotProps> = ({ slotName, children, isFakeAds }) => {
  const { trackMouseEvent } = useTracking();
  const navigate = useNavigate();

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const to = adNavigatePath[slotName];
    handleMouseEvent(event, to);
    if (isFakeAds) {
      navigate(to);
      return;
    }
    window.open(to);
  };
  const handleMouseEvent = (e: MouseEvent<HTMLDivElement>, to?: string) => {
    trackMouseEvent(e, {
      type: TrackEventType.AdSlot,
      slot_location: slotName,
      navigate_to: to || "",
    });
  };

  return (
    <div
      className={`ad-slot ${slotName}-container`}
      onMouseOver={handleMouseEvent}
      onClick={onClick}
    >
      {children}
      <p style={{ textTransform: "capitalize" }}>
        {slotName} Ad Slot
        <br />
        navigate to {adNavigatePath[slotName]}
      </p>
    </div>
  );
};

export default AdSlot;

const adNavigatePath = {
  header: "https://contentiq.com/",
  sidebar: "/dashboard",
  footer: "/contact",
};
