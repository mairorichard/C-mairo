import React from "react";
import { Icon } from "@iconify/react";
import Backdrop from "@mui/material/Backdrop";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Backdrop1 = ({ name }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <h3 className="text-2xl font-bold text-darkblue">{name}</h3>
        <Button variant="outlined" onClick={handleClickOpen}>
          <Icon icon="bi:plus-square" />
          Add New Address
        </Button>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="flex flex-col items-center">
          <DialogTitle id="responsive-dialog-title">
            Add New Delivery Address
          </DialogTitle>
          <DialogContent>
            {/* declared the width of inputs with {px} and not {%} */}
            <div className="w-[400px] my-1">
              <select className="w-full border p-3 focus:outline-blue rounded-md outline-none">
                <option>Select Area</option>
                <option>1st Area</option>
                <option>2nd Area</option>
                <option>3nd Area</option>
                <option>4nd Area</option>
              </select>

              <textarea
                name=""
                id=""
                rows={5}
                className="w-full mt-5 border p-3 focus:outline-blue resize-none"
                placeholder="Address"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <button
              className="flex gap-4 w-full justify-center rounded-md border border-lightblue bg-lightblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-lightblue mb-4"
              onClick={handleClose}
            >
              Add New Address
            </button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default Backdrop1;
