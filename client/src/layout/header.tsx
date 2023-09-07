import { FC } from "react";
import { LAYOUT } from "../assets/constants";
import MenuButtons from "./menu-buttons";

const Header: FC = () => {
  return (
    <div className="header">
      {LAYOUT.APP_NAME}
      <MenuButtons />
    </div>
  );
};

export default Header;
