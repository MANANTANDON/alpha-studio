import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

export const MainCont = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#F8F3D9",
          m: -1,
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "5vh",
            borderBottom: "2px solid black",
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        ></Box>
        <Grid2 container sx={{ height: "100vh" }}>
          <Grid2 size={0.5}></Grid2>
          <Grid2
            size={11}
            sx={{
              borderLeft: "2px solid black",
              borderRight: "2px solid black",
              pt: "20vh",
              px: 3,
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "20px", md: "50px" }, color: "#504B38" }}
            >
              <i>Welcome to,</i>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "40px", md: "80px" },
                fontWeight: "bold",
                color: "#504B38",
              }}
            >
              Snowchild Studio
            </Typography>
            <Typography
              sx={{ color: "#B9B28A" }}
              fontSize={{ xs: "10px", md: "16px" }}
            >
              © Manan x Anshu
            </Typography>
          </Grid2>
          <Grid2 size={0.5}></Grid2>
        </Grid2>
        <Box
          sx={{
            height: "5vh",
            borderTop: "2px solid black",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        ></Box>
      </Box>
    </>
  );
};
