import { Box, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          height: "90px",
          display: "flex",
          alignItems: "center",
        }}
        className="gradient-effect-two"
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 4,
          }}
        >
          <Typography>Snowchild Studio</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {["About us", "Projects", "Contact us"].map((item, key) => (
              <Typography key={key}>{item}</Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
