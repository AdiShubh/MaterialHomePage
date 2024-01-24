import {
  Drawer,
  ListItemButton,
  ListItemText,
  List,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const DrawerComponent = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClick={() => setOpen(false)}>
        {links.map((item, index) => (
          <List>
            <ListItemButton onClick={() => setOpen(false)} key={index}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          </List>
        ))}
      </Drawer>
      <IconButton onClick={() => setOpen(!open)} sx={{ marginLeft: "auto" }}>
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
