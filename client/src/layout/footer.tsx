import { FC } from "react";
import { LAYOUT } from "../assets/constants";

interface FooterProps {
  children: JSX.Element;
}
const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <>
      <footer>
        <div className="child-footer">{children}</div>
        <div>
          {LAYOUT.FOOTER_RESERVED_TEXT}
          <br />
          {LAYOUT.FOOTER_BUILT_TEXT}
        </div>
      </footer>
    </>
  );
};

export default Footer;
