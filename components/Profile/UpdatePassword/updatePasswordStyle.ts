export const styles = {
  container: {
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
    mt: 2,
    display: "grid",
    gridTemplateColumns: "49% 49%",
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
  button: {
    backgroundColor: "#6967F6",
    color: "#ffffff",
    fontSize: "large",
    mt: 3,
    mb: 2,
    px: 5,
    borderRadius: "8px",
  },
};
