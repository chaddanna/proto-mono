import React from "react";
import { mount as dashboardMount } from "dashboard/DashboardApp";
import { MountedApp } from "./components/mounted-app";

const MountedDashboard = () => <MountedApp mountFn={dashboardMount} />;

export function App() {
  return (
    <div>
      <h1>
        [Container] This will have a NavigationComponent for routing through the
        app
      </h1>
      <hr />
      <MountedDashboard />
    </div>
  );
}
