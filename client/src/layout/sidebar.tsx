import { FC } from "react";
import { LAYOUT } from "../assets/constants";
import MenuButtons from "./menu-buttons";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <div className="title-container">
        <div className="title">
          {LAYOUT.CIQ}
          <div className="sub-title">{LAYOUT.APP_NAME}</div>
        </div>
        <hr />
      </div>
      <MenuButtons />
    </aside>
  );
};

export default Sidebar;
