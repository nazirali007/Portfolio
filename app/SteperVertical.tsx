"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box, Grid, StepContent, Typography, duration } from "@mui/material";

const steps = [
  {
    label: "Techdocklabs",
    designaion: "Full Time",
    duration: "January/2023 - July/2024",
    content: "React js develoer",
    company: "Techdock Labs ",
  },
  {
    label: "TechdocklabsIntership",
    content: "React js Developer ",
    company: "Techdock Labs ",
    duration: "July/2022 - December/2022 ",
    designaion: "Internship",
  },
  // { label: "Step 3", content: "This is the static content for Step 3." },
];

export default function SteperVertical() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stepper orientation="vertical" activeStep={2}>
        {steps.map((step, index) => (
          <Step key={step.label} active={true} completed={true}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{ margintop: "2rem" }}
                // direction={index % 2 === 0 ? "row" : "row-reverse"}
              >
                <Grid item xs={10}>
                  <Typography>{step.designaion}</Typography>
                  <Typography>{step.content}</Typography>
                  <Typography>{step.company}</Typography>
                  <Typography>{step.duration}</Typography>
                </Grid>
              </Grid>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
