import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Box, Typography } from '@mui/material'
import { styles } from '@/components/Profile/userProfileStyle'

const UpdatePhotoSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.profileBox}>
        <Box sx={styles.imageContainer}>
          <Skeleton height="100%" width="100%" style={{ borderRadius: '50%' }} />
        </Box>
        <Typography variant="h5">Hi,</Typography>
        <Skeleton width={120} height={28} />
      </Box>
    </Box>
  )
}

export default UpdatePhotoSkeleton
