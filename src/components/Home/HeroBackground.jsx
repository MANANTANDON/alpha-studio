import { Box, Grid2 } from "@mui/material";
import React from "react";

export const HeroBackground = () => {
  return (
    <>
      <Box sx={{ mx: -3 }}>
        <Grid2 container>
          {Array.from(Array(12)).map((item, key) => (
            <Grid2
              size={{ xs: 1 }}
              sx={{ height: "90px", border: "1px solid #EBEBEB" }}
            ></Grid2>
          ))}
          {Array.from(Array(12)).map((item, key) => (
            <Grid2
              size={{ xs: 1 }}
              sx={{
                height: "90px",
                border: (key === 0 || key === 11) && "1px solid #EBEBEB",
              }}
            ></Grid2>
          ))}
          {Array.from(Array(12)).map((item, key) => (
            <Grid2
              size={{ xs: 1 }}
              sx={{
                height: "90px",
                border: (key === 0 || key === 11) && "1px solid #EBEBEB",
              }}
            ></Grid2>
          ))}
          {Array.from(Array(12)).map((item, key) => (
            <Grid2
              size={{ xs: 1 }}
              sx={{
                height: "90px",
                border: (key === 0 || key === 11) && "1px solid #EBEBEB",
              }}
            ></Grid2>
          ))}
          {Array.from(Array(12)).map((item, key) => (
            <Grid2
              size={{ xs: 1 }}
              sx={{
                height: "90px",
                border: (key === 0 || key === 11) && "1px solid #EBEBEB",
              }}
            ></Grid2>
          ))}
          {Array.from(Array(12)).map((item, key) => (
            <Grid2
              size={{ xs: 1 }}
              sx={{ height: "90px", border: "1px solid #EBEBEB" }}
            ></Grid2>
          ))}
          {Array.from(Array(12)).map((item, key) => (
            <Grid2
              size={{ xs: 1 }}
              sx={{ height: "90px", border: "1px solid #EBEBEB" }}
            ></Grid2>
          ))}
          {Array.from(Array(12)).map((item, key) => (
            <Grid2
              size={{ xs: 1 }}
              sx={{ height: "90px", border: "1px solid #EBEBEB" }}
            ></Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};
