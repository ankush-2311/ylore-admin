import { SxProps, Theme } from '@mui/material'

export const layoutBox: SxProps<Theme> = {
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
}

export const leftSection: SxProps<Theme> = {
  position: 'relative',
  height: '100vh',
  background: 'linear-gradient(180deg,#FFFFFF 0%,#F0F9FF 33.17%,#DFEDFD 67.79%,#F1E5FF 100%)',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'start',
  textAlign: 'left',
  justifyContent: 'center',
  flexDirection: 'column',
}

export const textStyleBottom: SxProps<Theme> = {
  maxWidth: '70%',
  textAlign: 'left',
  marginTop: 2,
}

export const logoStyle: SxProps<Theme> = {
  display: 'flex',
  marginLeft: 5,
  justifyContent: 'center',
}

export const rightSection: SxProps<Theme> = {
  background: '#FFFFFF',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
}

export const dividerStyle: SxProps<Theme> = {
  borderColor: 'lightgray',
}

export const textFieldStyle: SxProps<Theme> = {
  '& fieldset': {
    borderRadius: '210px',
  },

  '&:hover fieldset': {
    borderColor: 'transparent',
  },

  '&.Mui-focused fieldset': {
    borderColor: 'transparent',
  },
  '& .MuiInputBase-input': {
    paddingLeft: '8px',
  },
  width: 500,
  height: 60,
}

export const loginButtonStyle = (isSubmit: boolean): SxProps<Theme> => ({
  width: 500,
  height: 60,
  mt: isSubmit ? 10 : 3,
  borderRadius: '30px',
  py: 1.5,
  backgroundColor: '#6967F6',
  '&:hover': { backgroundColor: '#5b58e6' },
})

export const forgotPasswordStyle: SxProps<Theme> = {
  cursor: 'pointer',
  textDecoration: 'underline',
}

export const backButtonStyle: SxProps<Theme> = {
  width: 500,
  height: 60,
  mt: 3,
  borderRadius: '30px',
  py: 1.5,
  color: 'black',
  backgroundColor: '#F2F2F2',
  '&:hover': { backgroundColor: '#F2F2F2' },
}

export const textStyle: SxProps<Theme> = {
  textAlign: 'center',
  marginTop: 3,
}
