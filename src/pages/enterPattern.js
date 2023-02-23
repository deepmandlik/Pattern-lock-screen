import React, { useState, useRef } from "react";
import "../App.css";
import Background from "../components/background";
import Info from "../components/info";
import Pattern from "../components/pattern";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import DialogSelect from "../components/modal";

function EnterPattern({setRecordPattern , setSelectedPattern}) {
  const [pattern, setPattern] = useState([]);
  const [openModal, toggleModal] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    if (index == 0) {
      toggleModal(true);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Info title="Enter Pattern" />
      <Pattern setPattern={setPattern} pattern={pattern} />
      <Box className="btn">
        <Button
          className="btn1"
          variant="contained"
          color="primary"
          size="small"
          aria-controls="split-button-menu"
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          Options ^
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          placement="bottom"
          disablePortal
          style={{
            transform: "translate(95%, -30%)",
          }}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {["Forgot pattern", "Reset pattern "].map(
                      (option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      )
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
      <DialogSelect openModal={openModal} toggleModal={toggleModal} setRecordPattern={setRecordPattern} setSelectedPattern={setSelectedPattern} />
      <Background />
    </div>
  );
}

export default EnterPattern;
