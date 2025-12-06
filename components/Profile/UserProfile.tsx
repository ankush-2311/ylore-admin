'use client'

import { Box } from '@mui/material'
import UpdatePhoto from './UpdatePhoto'
import ProfileDetail from './ProfileDetail'
import UpdatePassword from './UpdatePassword/UpdatePassword'
import CustomHeader from '@/commonComponents/Header/CustomHeader'

const UserProfile = () => {
  return (
    <Box sx={{ padding: '0 1.7rem' }}>
      <CustomHeader title="User Profile" />
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: '23%',
              mb: 5,
            }}
          >
            <UpdatePhoto />
          </Box>
          <Box sx={{ width: '75%' }}>
            <ProfileDetail />
          </Box>
        </Box>
        <UpdatePassword />
      </Box>
    </Box>
  )
}

export default UserProfile
