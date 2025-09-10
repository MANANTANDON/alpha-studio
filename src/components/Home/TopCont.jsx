import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import { MasonryImageList } from "../Projects/MasonryImageList";

export const TopCont = () => {
  return (
    <Box sx={{ m: -1 }}>
      <Container maxWidth="xl" sx={{}}>
        <Grid2 container sx={{ mx: -3 }}>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{}}></Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
            <Box
              sx={{
                borderRadius: "12px",
                p: 2,
                height: "calc(100vh - 64px)",
              }}
              className="radialGradients"
            >
              <MasonryImageList />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
