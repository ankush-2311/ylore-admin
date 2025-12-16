const Styles = {
  progressWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    mt: 1,
    "& .pwdCheckerBar": {
      WebkitAppearance: "none",
      appearance: "none",
      width: 1,
      height: 7,
      borderRadius: 4,
      overflow: "hidden",
      "&::-webkit-progress-bar": {
        backgroundColor: "common.grayBorder",
        borderRadius: 4,
        backgroundSize: "30px 18px, 100% 100%, 100% 100%",
      },
    },
    "& .strengthWeak": {
      "&::-webkit-progress-value": { backgroundColor: "error.main" },
    },
    "& .strengthFair": {
      "&::-webkit-progress-value": { backgroundColor: "warning.light" },
    },
    "& .strengthGood": {
      "&::-webkit-progress-value": { backgroundColor: "info.main" },
    },
    "& .strengthStrong": {
      "&::-webkit-progress-value": { backgroundColor: "primary.success" },
    },
  },
};

export default Styles;
