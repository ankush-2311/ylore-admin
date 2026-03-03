export const sidebarStyles = {
  container: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100vh",
    width: 295,
    background:
      "#FFFFFF",
    boxShadow: 3,

    zIndex: 1200,
    overflow: "hidden",
  },
  logoBox: {
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    ml: 3,
  },
  profileBox: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    paddingBottom: 0,
  },
  avatar: {
    width: 48,
    height: 48,
  },
  userName: {
    marginLeft: 2,
    fontWeight: 500,
    color: "text.primary",
  },
  listItemButton: {
    my: 0.5,
    mx: 1,
    borderRadius: 2,
  },
  /* MAIN ROUTE — ACTIVE (with or without sub routes) */
listItemActive: {
  my: 0.5,
  mx: 1,
  borderRadius: 2,
  backgroundColor: "#0FCCE6", // ✅ main active color
  "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    color: "#fff",
  },
  "&:hover": {
    backgroundColor: "#0FCCE6",
  },
},

/* MAIN ROUTE — DEFAULT */
listItemDefault: {
  my: 0.5,
  mx: 1,
  borderRadius: 2,
  "&:hover": {
    backgroundColor: "#0FCCE6", // ✅ hover color for all
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: "#fff",
    },
  },
},

/* SUB ROUTE — ACTIVE */
subRouteActive: {
  mx: 1,
  borderRadius: 2,
  backgroundColor: "#D1F5FA", // ✅ subroute active color
  "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    color: "#1A1A1A",
  },
  "&:hover": {
    backgroundColor: "#0FCCE6", // hover still main color
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: "#fff",
    },
  },
},

/* SUB ROUTE — DEFAULT */
subRouteDefault: {
  mx: 1,
  borderRadius: 2,
  "&:hover": {
    backgroundColor: "#0FCCE6",
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: "#fff",
    },
  },
},

  sublistItemButton: {
    my: 1,
    mx: 1,
    borderRadius: 2,
    width: "85%",
  },

  sublistItemButtonHover: {
    width: "85%",
    mx: 1,
    borderRadius: 2,
    my: 1,
  },
  listItemIcon: {
    minWidth: 0,
    marginRight: 2,
    color: "primary.main",
  },
  listItemText: {
    color: "black",
  },
  logoutBox: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 2,
  },
};
