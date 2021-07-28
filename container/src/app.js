import React from "react";
import { mount as dashboardMount } from "dashboard/DashboardApp";
import { MountedApp } from "./components/mounted-app";

export function App() {
  return (
    <div>
      <h1>[Container] Probably some navigation component here</h1>
      <hr />
      <MountedApp mountFn={dashboardMount} />
    </div>
  );
}
