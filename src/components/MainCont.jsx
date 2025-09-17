import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import Typewriter from "typewriter-effect";
import React from "react";

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
                      "Welcome to <br/><strong>Snowchild Studio</strong>"
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
                    .typeString("Welcome to <strong>Snowchild Studio</strong>")
                    .start();
                }}
              />
            )}
          </Typography>
          <Button
            className="font-bg"
            sx={{
              textTransform: "none",
              bgcolor: "#FFFFFF",
              color: "#080808",
              px: 5,
              fontSize: "20px",
              borderRadius: "30px",
            }}
          >
            work with us !
          </Button>
        </Box>
      </Paper>
    </>
  );
};
