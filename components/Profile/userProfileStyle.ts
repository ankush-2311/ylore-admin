export const styles = {
  wrapper: {
    pt: 3,
    pb: 6,
    bgcolor: "common.white",
    borderRadius: 2,
    width: "100%",
  },
  profileBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  imageContainer: {
    position: "relative",
    width: 180,
    height: 180,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none",
    border: "1px solid #EDEDED",
  },
  slice: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "20%",
    bgcolor: "common.white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  icon: {
    fontSize: 25,
    color: "text.primary",
  },
  root: {
    width: "100%",
    border: "1px solid #D5E1EA",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
  },
  headingBox: {
    borderBottom: "1px solid #D5E1EA",
    px: 2.5,
    py: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "100%",
  },
  updateButton: {
    fontSize: "14px",
    backgroundColor: "#6967F6",
    color: "#FFFFFF",
    padding: "0.3rem 2.2rem",
    borderRadius: "50px",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "47% 47%",
    justifyContent: "space-between",
  },
  formRow2: {
    mt: 3,
    display: "grid",
    gridTemplateColumns: "47% 47%",
    justifyContent: "space-between",
  },
  formControl: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    mt: 0.5,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E6E6E6",
      },
    },
  },
  singleFieldWrapper: {
    mt: 3,
  },
  button: {
    backgroundColor: "#6967F6",
    color: "#ffffff",
    fontSize: "large",
    mt: 5,
    mb: 2,
    px: 5,
    borderRadius: "8px",
  },
  passwordformStyles: {
    container: {
      width: "100%",
    },
    heading: {
      fontSize: "2.5rem",
    },
    formRow: {
      mt: 2,
      display: "grid",
      gridTemplateColumns: "47% 47%",
      justifyContent: "space-between",
    },
    formRow2: {
      mt: 5,
      display: "grid",
      gridTemplateColumns: "47% 47%",
      justifyContent: "space-between",
    },
    textField: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      mt: 0.5,
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#E6E6E6",
        },
      },
    },
    singleFieldWrapper: {
      mt: 5,
    },
    button: {
      backgroundColor: "#6967F6",
      color: "#ffffff",
      fontSize: "large",
      mt: 5,
      mb: 2,
      px: 5,
      borderRadius: "8px",
    },
  },
};
