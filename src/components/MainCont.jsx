import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const MainCont = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: -1,
          height: "100vh",
        }}
      >
        <Image
          src="/images/EnjoyTheShow.png"
          alt="Enjoy The Show"
          layout="intrinsic"
          width={500}
          height={500}
        />
      </Box>
    </>
  );
};
