import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import EmailIcon from "@mui/icons-material/Email";
import DrawerComponent from "./DrawerComponent";
import GoogleIcon from "@mui/icons-material/Google";

const Links = ["products", "Solutions", "Pricing", "Enterprise"];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <div>
      <AppBar
        sx={{ background: "transparent", boxShadow: "0", position: "sticky" }}
      >
        {isMatch ? (
          <Box display={"flex"}>
            <ApiIcon sx={{ color: "black", padding: 1 }} />
            <Typography
              variant="h6"
              fontFamily={"fantasy"}
              color={"black"}
              padding={0.5}
            >
              CodeZee
            </Typography>
            <DrawerComponent links={Links} />
          </Box>
        ) : (
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                width: "100%",

                alignItems: "center",
              }}
            >
              <ApiIcon sx={{ color: "black" }} />
              <Box>
                <Tabs component={Link} sx={{ textDecoration: "none" }}>
                  {Links.map((link, index) => (
                    <Tab
                      sx={{
                        fontWeight: "bold",
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "underline",
                          textUnderlineOffset: "5px",
                        },
                      }}
                      label={link}
                      key={index}
                    />
                  ))}
                </Tabs>
              </Box>
              <Box sx={{ display: "flex", marginLeft: "auto" }}>
                <Button sx={{ mr: 2 }} variant="outlined">
                  Talk to Us
                </Button>
                <Button sx={{ ml: 2 }} variant="contained">
                  Try for Free
                </Button>
              </Box>
            </Box>
          </Toolbar>
        )}

        <Box sx={{ width: "100%", height: "100vh" }}>
          <video
            width={"100%"}
            height={"50%"}
            autoPlay
            loop
            muted={true}
            playsInline
            src="./video.mp4"
          />
          <Box display={"flex"} width={"100%"}>
            <Typography
              variant="h4"
              margin={"auto"}
              color={"black"}
              textAlign={"center"}
              fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
            >
              Built Your Software Hassle Free And With Top Notch Quality
            </Typography>
          </Box>
          <Box
            width={"100%"}
            display="flex"
            justifyContent={"center"}
            margin={"auto"}
            marginTop={5}
          >
            <Button endIcon={<EmailIcon />} sx={{ mr: 3 }} variant="outlined">
              Sign Up
            </Button>
            <Button
              color="error"
              endIcon={<GoogleIcon />}
              sx={{ ml: 3 }}
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </AppBar>
    </div>
  );
};

export default Header;
