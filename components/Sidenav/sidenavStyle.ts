export const sidebarStyles = {
  container: {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: 295,
    background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 33.17%, #DFEDFD 67.79%, #F1E5FF 100%)',
    boxShadow: 3,

    zIndex: 1200,
    overflow: 'hidden',
  },
  logoBox: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    ml: 3,
  },
  profileBox: {
    display: 'flex',
    alignItems: 'center',
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
    color: 'text.primary',
  },
  listItemButton: {
    my: 0.5,
    mx: 1,
    borderRadius: 2,
  },
  listItemButtonHover: {
    my: 0.5,
    mx: 1,
    borderRadius: 2,
    backgroundColor: '#5b58e6',
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: '#fff',
    },
    '&:hover': {
      backgroundColor: '#5b58e6',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: '#fff',
      },
    },
  },
  subRouteButtonHover: {
    mx: 1,
    borderRadius: 2,
    backgroundColor: '#D4D4FF',
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {},
    '&:hover': {
      backgroundColor: '#D4D4FF',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {},
    },
  },
  sublistItemButton: {
    my: 1,
    mx: 1,
    borderRadius: 2,
    width: '85%',
  },

  sublistItemButtonHover: {
    width: '85%',
    mx: 1,
    borderRadius: 2,
    my: 1,
  },
  listItemIcon: {
    minWidth: 0,
    marginRight: 2,
    color: 'primary.main',
  },
  listItemText: {
    color: 'black',
  },
  logoutBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 2,
  },
}
