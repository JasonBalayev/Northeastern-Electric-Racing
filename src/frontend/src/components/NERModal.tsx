import {
  Box,
  Dialog,
  DialogTitle,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { CSSProperties, ReactNode } from "react";
import { DialogContent, DialogActions } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NERFailButton from "./NERFailButton";
import NERSuccessButton from "./NERSuccessButton";

const background = "#ef4345";

export interface NERModalProps {
  open: boolean;
  formId?: string;
  title: string;
  onSubmit?: () => void;
  onHide: () => void;
  children?: ReactNode;
  titleChildren?: ReactNode;
  cancelText?: string;
  submitText?: string;
  disabled?: boolean;
  showCloseButton?: boolean;
  hideFormButtons?: boolean;
  hideBackDrop?: boolean;
  icon?: JSX.Element | null;
  paperProps?: CSSProperties;
}

const NERModal = ({
  open,
  onHide,
  formId,
  title,
  onSubmit,
  children,
  cancelText,
  submitText,
  disabled = false,
  showCloseButton = false,
  hideFormButtons = false,
  hideBackDrop = false,
  icon,
  paperProps,
  titleChildren,
}: NERModalProps) => {
  return (
    <Dialog
      hideBackdrop={hideBackDrop}
      open={open}
      onClose={onHide}
      PaperProps={{
        style: paperProps
          ? { ...paperProps, borderRadius: "10px", maxWidth: "700px" }
          : { borderRadius: "10px", maxWidth: "700px" },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: background,
          minHeight: "64px",
          position: "relative",
        }}
      >
        {icon ? (
          <Box display="flex" justifyContent="left" alignItems="center">
            <Icon
              sx={{
                position: "absolute",
                left: 10,
                top: 17,
                color: (theme) => theme.palette.text.primary,
                width: "max-content",
                height: "max-content",
              }}
            >
              {icon}
            </Icon>
            <Typography fontFamily="inherit" fontSize={25} marginLeft="26px">
              {title}
            </Typography>
          </Box>
        ) : (
          title
        )}
        {titleChildren}
      </DialogTitle>

      {showCloseButton && (
        <IconButton
          aria-label="close"
          onClick={onHide}
          sx={{
            position: "absolute",
            right: 16,
            top: 12,
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      <DialogContent
        sx={{
          "&.MuiDialogContent-root": { paddingTop: "20px" },
          "&::-webkit-scrollbar": {
            height: "0.55rem", // Adjust the the thickness of the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#EF4345", //FinishLine 'red' color
            borderRadius: "50px", //make the scrollbar rounded
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#b0191a", // Change to a darker shade of red on hover
          },
        }}
      >
        {children}
      </DialogContent>
      {!hideFormButtons && (
        <DialogActions>
          <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
            <NERFailButton sx={{ mx: 1 }} form={formId} onClick={onHide}>
              {cancelText || "Cancel"}
            </NERFailButton>
            <NERSuccessButton
              sx={{ mx: 1 }}
              type="submit"
              form={formId}
              onClick={onSubmit}
              disabled={disabled}
            >
              {submitText || "Submit"}
            </NERSuccessButton>
          </Box>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default NERModal;
