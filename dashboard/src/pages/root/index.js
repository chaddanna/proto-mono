import React from "react";
import { Link } from "react-router-dom";

export function Root({ name }) {
  return (
    <div>
      <h1>{name || "User"} Dashboard</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Cool Stats</th>
            <th>How you did</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Running thing</td>
            <td>hyper-speeding</td>
            <td>Over 9000</td>
          </tr>
          <tr>
            <td>Bike pedal mover</td>
            <td>up-downs</td>
            <td>444</td>
          </tr>
          <tr>
            <td>Owen Wilson Motivation</td>
            <td>wow</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <Link to="/library">
        <button>View Library</button>
      </Link>
    </div>
  );
}
