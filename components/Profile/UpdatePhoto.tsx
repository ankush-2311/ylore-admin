'use client'

import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit'
import ProfileImage from '@/public/demoProfile.svg'
import { styles } from './userProfileStyle'
import CircularProgress from '@mui/material/CircularProgress'
import UpdatePhotoSkeleton from '@/utils/skeleton/UpdatePhotoSkeleton'

const UpdatePhoto = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleChooseFile = () => fileInputRef.current?.click()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setPreviewImage(previewUrl)
      handleUpdateProfileImage()
    }
  }

  const handleUpdateProfileImage = async () => {}

  const adminUser = {
    first_name: 'John',
    last_name: 'Doe',
    profile: '',
  }

  const isLoading = false

  const imageSrc = previewImage || adminUser?.profile || (ProfileImage as unknown as string)

  if (!adminUser) return <UpdatePhotoSkeleton />
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.profileBox}>
        <Box sx={styles.imageContainer}>
          <Image src={imageSrc} alt="Profile image" layout="fill" objectFit="cover" priority />

          {isLoading && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                zIndex: 10,
              }}
            >
              <CircularProgress size={48} />
            </Box>
          )}

          <Box component="button" sx={styles.slice} onClick={handleChooseFile}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
            <EditIcon sx={styles.icon} />
          </Box>
        </Box>

        <Typography variant="h5">Hi,</Typography>
        <Typography variant="h5" color="secondary.main">
          {`${adminUser?.first_name} ${adminUser?.last_name}`.trim()}
        </Typography>
      </Box>
    </Box>
  )
}

export default UpdatePhoto
