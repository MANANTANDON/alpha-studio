import { Container } from "@mui/material";
import React from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroGradient } from "./HeroGradient";
import { HeroContent } from "./HeroContent";
import { HeroEdges } from "./HeroEdges";

export const HeroSection = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <HeroEdges />
        <HeroContent />
        <HeroBackground />
        <HeroGradient />
      </Container>
    </>
  );
};
