import React from "react";

export function Library() {
  const data = [
    { title: "yeah!" },
    { title: "owen wilson wowing" },
    { title: "michael phelps train station" },
  ];
  return (
    <div>
      <h1>Content Library</h1>
      <div style={{ display: "flex" }}>
        {data.map((d) => (
          <div style={{ padding: 20, border: "1px solid red", margin: 10 }}>
            {d.title}
          </div>
        ))}
      </div>
    </div>
  );
}
