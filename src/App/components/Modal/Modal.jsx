import MuiDialog from "@mui/material/Dialog";
import MuiDialogContent from "@mui/material/DialogContent";

export const Modal = ({ open = false, children, onClose }) => (
  <MuiDialog open={open} maxWidth="lg" fullWidth onClose={onClose}>
    <MuiDialogContent>{children}</MuiDialogContent>
  </MuiDialog>
);
