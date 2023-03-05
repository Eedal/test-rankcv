import { AlertColor } from "@mui/material";

export type Notification = {
  text: string;
  isOpen: boolean;
  severity?: AlertColor;
}