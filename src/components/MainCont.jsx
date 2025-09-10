import { Box, Typography } from "@mui/material";
import React from "react";

export const MainCont = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          m: -1,
        }}
      >
        <Typography
          className="font-bg"
          sx={{
            fontSize: { xs: "15rem", md: "25rem" },
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: { xs: "11rem", md: "18rem" },
          }}
        >
          S
        </Typography>
        <Typography
          className="font-bg"
          sx={{
            color: "#FFFFFF",
            mt: { xs: 2, md: 5 },
            fontSize: { xs: "1.5rem", sm: "3rem" },
            fontWeight: 400,
          }}
        >
          Welcome to Snowchild Studio
        </Typography>
      </Box>
    </>
  );
};
