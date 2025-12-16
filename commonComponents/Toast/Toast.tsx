"use client";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { hideToast } from "@/redux/slices/toastSlice";

const CommonToast = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(
    (state: RootState) => state.toast,
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={() => dispatch(hideToast())}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={() => dispatch(hideToast())}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          fontSize: "15px",
          fontWeight: 500,
          borderRadius: "12px",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CommonToast;
