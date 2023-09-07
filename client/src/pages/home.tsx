import { FC } from "react";
import { HOME_PAGE, IMAGES } from "../assets/constants";
import { KeyFeatureRow } from "../components/homepage/key-feature-row";

const Home: FC = () => {
  return (
    <div className="page-layout">
      <h1>{HOME_PAGE.TITLE}</h1>
      <div className="page-content">
        <h2>{HOME_PAGE.INTRODUCTION}</h2>
        <h2 className="underline">{HOME_PAGE.SUB_TITLE}</h2>
        <KeyFeatureRow
          title="Design"
          text={`A clean UI created using Material-UI (Mui) and custom
          CSS.`}
          imagesSrc={[IMAGES.MUI_LOG, IMAGES.CSS_LOGO]}
        />
        <KeyFeatureRow
          title="Navigation"
          text={`Seamless transitions between pages using React
          Router.`}
          imagesSrc={[IMAGES.REACT_ROUTER_LOGO]}
        />
        <KeyFeatureRow
          title="Ad Bidding"
          text={`Dynamic ad bidding for header, sidebar, and footer
          ad slots, with click-through redirection.`}
          imagesSrc={[IMAGES.PREBID_LOGO]}
        />
        <KeyFeatureRow
          title="Interaction Tracking"
          text={`Efficient user interaction monitoring
          with a custom React tracking hook.`}
          imagesSrc={[IMAGES.USER_INTERACTION_ICON]}
        />
        <KeyFeatureRow
          title="Auto-Refreshing Ads (Bonus)"
          text={`Periodic ad reloads for dynamic content.`}
          imagesSrc={[IMAGES.REFRESH_LOGO]}
        />
        <KeyFeatureRow
          title="Backend"
          text={`Python FastAPI backend for storing user interaction
          data in a local PostgresSQL database.`}
          imagesSrc={[
            IMAGES.PYTHON_LOGO,
            IMAGES.FASTAPI_LOGO,
            IMAGES.POSTGRES_LOGO,
          ]}
        />
        <KeyFeatureRow
          title="Data Visualization"
          text={`Commig Soon...`}
          imagesSrc={[IMAGES.DASHBOARD_ICON]}
        />
      </div>
    </div>
  );
};

export default Home;
