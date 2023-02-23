import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-end",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  text: {
    fontSize: "20px",
  },
}));

export default function DialogSelect({
  openModal,
  toggleModal,
  setRecordPattern,
  setSelectedPattern,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setError(false);
    setValue(event.target.value || "");
  };

  const handleClose = () => {
    toggleModal(false);
  };

  const verify = () => {
    if (value == "4050") {
      localStorage.removeItem("recordPattern");
      setRecordPattern(null);
      toggleModal(false);
      setSelectedPattern([]);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Security Check</DialogTitle>
        <DialogContent>
          <Typography style={{ marginLeft: 4 , marginBottom : 4, fontSize : '17px' , color : '#0008'}}>Please verify you're a human</Typography>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <Typography className={classes.text}>
                What is "40"+"50" ?
              </Typography>
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                id="outlined-search"
                type="text"
                variant="outlined"
                value={value}
                error={error}
                label={error ? "Incorrect entry." : ""}
                onChange={handleChange}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={verify} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
