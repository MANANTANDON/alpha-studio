import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import Typewriter from "typewriter-effect";
import React from "react";
import { ArrowOutwardRounded } from "@mui/icons-material";

export const MainCont = () => {
  const isLaptop = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Paper
        sx={{
          p: 2,
          borderRadius: "20px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        elevation={4}
      >
        <Box
          className="gradient-effect"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "calc(100vh - 130px)",
            borderRadius: "10px",
          }}
        >
          <Typography
            component={"div"}
            className="font-bg"
            sx={{
              color: "#FFFFFF",
              mt: { xs: 2, md: 5 },
              fontSize: { xs: "32px", sm: "52px" },
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {isLaptop ? (
              <Typewriter
                options={{
                  delay: 70,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Welcome to a Creative Collective <br/><strong>Snowchild Studio</strong>"
                    )
                    .start();
                }}
              />
            ) : (
              <Typewriter
                options={{
                  delay: 70,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Welcome to a Creative Collective <br/><strong>Snowchild Studio</strong>"
                    )
                    .start();
                }}
              />
            )}
          </Typography>

          {/* Tagline */}

          <Button
            className="font-bg"
            sx={{
              textTransform: "none",
              bgcolor: "#FFFFFF",
              color: "#080808",
              px: 5,
              py: 1.5,
              fontSize: "18px",
              borderRadius: "30px",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#f5f5f5",
                transform: "translateY(-2px)",
                transition: "all 0.3s ease",
              },
            }}
            endIcon={<ArrowOutwardRounded />}
          >
            Let's Create Magic Together
          </Button>
        </Box>
      </Paper>
    </>
  );
};
