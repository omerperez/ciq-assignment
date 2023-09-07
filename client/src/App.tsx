import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import track from "react-tracking";
import { TrackEventType } from "./hooks";
import Layout from "./layout";
import { About, Contact, Home, MyProjects } from "./pages";
import workerScript from "./utils/worker";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<MyProjects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const TrackedApp = track(
  { Component: "Apps" },
  {
    dispatch: (data) => {
      console.debug(data);
      const endpoint =
        data.event === TrackEventType.ApplicationUserData ? "users" : "events";
      workerScript.postMessage(
        endpoint,
        localStorage.getItem("uniqueId") || "",
        data,
      );
    },
  },
)(App);

export default TrackedApp;
