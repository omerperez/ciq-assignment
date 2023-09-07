import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { TrackEventType, useTracking } from "../hooks";

const MenuButtons: FC = () => {
  const { pathname } = useLocation();
  const { trackMouseEvent } = useTracking();

  return (
    <ul>
      {appMenuButtons.map(({ label, path }) => (
        <Link
          to={path}
          key={`menu-btn-${label}`}
          onClick={(e) => {
            trackMouseEvent(e, {
              type: TrackEventType.Navigate,
              from_path: pathname,
              to_path: path,
            });
          }}
        >
          <li className={`${pathname === path ? "active-" : ""}menu-btn`}>
            {label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MenuButtons;

interface MenuButton {
  label: string;
  path: string;
}

const appMenuButtons: MenuButton[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Dashboard",
    path: "/dashboard",
  },
];
