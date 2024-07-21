"use client";

// import { Fab } from "@mui/material";
// import React from "react";

// const SkillSection = () => {
//   return (
//     <>
//       <Fab variant="extended" size="medium" color="primary">
//         Javascript
//       </Fab>
//       <Fab variant="extended" size="medium" color="primary">
//         Javascript
//       </Fab>
//       <Fab variant="extended" size="medium" color="primary">
//         Javascript
//       </Fab>
//       <Fab variant="extended" size="medium" color="primary">
//         Javascript
//       </Fab>
//       <Fab variant="extended" size="medium" color="primary">
//         Javascript
//       </Fab>
//       <Fab variant="extended" size="medium" color="primary">
//         Javascript
//       </Fab>
//       <Fab variant="extended" size="medium" color="primary">
//         Javascript
//       </Fab>
//       <Fab variant="extended" size="medium" color="primary">
//         Javascript
//       </Fab>
//     </>
//   );
// };

// export default SkillSection;

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
  "Communication",
  "Responsive Web Design",
]; // Example labels for multiple FABs

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
      }, index * 500)
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
