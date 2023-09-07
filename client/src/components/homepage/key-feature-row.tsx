import { FC } from "react";
import { Logo } from "./logo";

interface KeyFeatureRowProps {
  title: string;
  text: string;
  imagesSrc: string[];
}
const KeyFeatureRow: FC<KeyFeatureRowProps> = ({ title, text, imagesSrc }) => {
  return (
    <div className="container">
      <p>
        <b>{`${title}: `}</b>
        <br />
        {text}
      </p>
      {imagesSrc.map((src) => (
        <Logo src={src} key={src} />
      ))}
    </div>
  );
};

export { KeyFeatureRow };
