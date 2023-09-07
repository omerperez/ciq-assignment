import { FC, DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { HOME_PAGE } from "../../assets/constants";

interface LogoProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
}

const Logo: FC<LogoProps> = ({ src, alt, width, height, ...props }) => {
  return (
    <img
      src={`${HOME_PAGE.IMAGES_FOLDER}/${src}`}
      alt={alt || "mui-logo"}
      width={width || 65}
      height={height || 65}
      {...props}
    />
  );
};

export { Logo };
