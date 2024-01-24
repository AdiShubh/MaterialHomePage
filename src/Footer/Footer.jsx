import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        variant="h3"
        paddingTop={10}
        textAlign={"center"}
        fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
        fontWeight={"bold"}
      >
        Ready for any Team Size
      </Typography>
      <Typography
        variant="h6"
        textAlign={"center"}
        padding={4}
        fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
      >
        Optimized for any Team Size
      </Typography>
      <Box
        display={"flex"}
        margin={"auto"}
        justifyContent={"center"}
        padding={5}
      >
        <Button
          sx={{ mr: 2, fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
          variant="contained"
        >
          Try CodeZee for Free
        </Button>
        <Button
          sx={{ ml: 2, fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
          variant="outlined"
        >
          Talk to sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
