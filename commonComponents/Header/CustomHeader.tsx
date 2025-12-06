import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import {
  headerBoxStyles,
  headerContentStyles,
  headerTitleStyles,
  userButtonStyles,
} from './customHeaderStyle'
import { ArrowDropDown } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import ProfileImage from '@/public/demoProfile.svg'
import CustomHeaderSkeleton from '@/utils/skeleton/CustomHeaderSkeleton'
import { CustomHeaderProps } from '@/utils/types/customHeaderType'
import { useDispatch } from 'react-redux'
import { clearAuth } from '@/redux/slices/authSlice'
import { showToast } from '@/redux/slices/toastSlice'
import { persistor } from '@/redux/store'

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isOpen = Boolean(anchorEl)
  const { push } = useRouter()

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    localStorage.clear()
    persistor.purge()
    dispatch(clearAuth())
    dispatch(
      showToast({
        message: 'Logout Successful!',
        severity: 'success',
      }),
    )
  }

  const imageSrc = ProfileImage as unknown as string

  const isLoading = false

  const handleCloseDropdown = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={headerBoxStyles}>
      <Box sx={headerContentStyles}>
        <Typography sx={headerTitleStyles}>{title}</Typography>

        {isLoading ? (
          <CustomHeaderSkeleton />
        ) : (
          <Box sx={{ display: 'flex' }}>
            <IconButton onClick={handleProfileClick} sx={userButtonStyles} ref={buttonRef}>
              <Avatar alt="User" src={imageSrc} sx={{ width: 32, height: 32 }} />
              <Typography sx={{ fontSize: '16px' }}>{'John' + ' ' + 'Doe'}</Typography>
              <ArrowDropDown />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleCloseDropdown}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: 2,
                  width: buttonRef.current ? buttonRef.current.offsetWidth : 'auto',
                },
              }}
            >
              <MenuItem onClick={() => push('/user-profile')}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default CustomHeader
