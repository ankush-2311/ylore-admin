import React from 'react'
import Box from '@mui/material/Box'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UpdateProfileDetailSkeleton = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Skeleton height={30} width={200} />
        <Skeleton height={36} width={100} borderRadius={8} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {[...Array(3)].map((_, index) => (
          <Skeleton key={index} height={45} borderRadius={6} />
        ))}
      </Box>
    </Box>
  )
}

export default UpdateProfileDetailSkeleton
