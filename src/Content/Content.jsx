import React from "react";
import { Box } from "@mui/material";
import ContentItem from "./ContentItem";

const contentArray = [
  {
    title: "Get Things Done",
    description:
      "This is test description.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "./1.jpg",
  },
  {
    title: "Productivity Is Brilliant",
    description:
      "This is test description.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "./2.jpg",
  },
  {
    title: "Fast Development",
    description:
      "This is test description.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "./3.jpg",
  },
];

const Content = () => {
  return (
    <Box
      bgcolor="#fbf2f2"
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      width="100%"
      height="10%"
    >
      {contentArray.map((cont, index) => (
        <ContentItem
          title={cont.title}
          description={cont.description}
          img={cont.img}
          key={index}
          swap={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default Content;
