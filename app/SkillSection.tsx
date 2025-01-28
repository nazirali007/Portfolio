"use client";
import React, { useEffect, useState } from "react";
import { Fab } from "@mui/material";

const fabLabels = [
  "Javascript",
  "ReactJs",
  "Redux",
  "HTML5",
  "CSS3",
  "Tailwind",
  "RestfulApi",
  "NEXT Js",
  "Web Socket",
  "CI/CD",
  "Material UI",
  "Bootstrap",
  "Communication",
  "Responsive Web Design",
];

export default function AnimatedFabs() {
  const [animated, setAnimated] = useState(Array(fabLabels.length).fill(false));

  useEffect(() => {
    const timers = fabLabels.map((_, index) =>
      setTimeout(() => {
        setAnimated((prev) => {
          const newAnimated = [...prev];
          newAnimated[index] = true;
          return newAnimated;
        });
      }, index * 800)
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div>
      {fabLabels.map((label, index) => (
        <Fab
          key={label}
          variant="extended"
          size="medium"
          className={animated[index] ? "fab-animate" : ""}
          sx={{ margin: "10px", backgroundColor: "#64d2de" }}
        >
          {label}
        </Fab>
      ))}
    </div>
  );
}
