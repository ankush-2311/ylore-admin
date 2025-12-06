import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import Image from 'next/image'
import InfoIcon from '@/public/assets/circle-info.svg'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { styles } from './updatePasswordStyle'
import { updatePasswordSchema } from '@/utils/validationSchema/updatePasswordSchema'
import PasswordStrengthBar from '@/commonComponents/PasswordStrengthBar/PasswordStrengthBar'

const UpdatePassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(true)
  const [showConfirmPassword, setShowConfirmPassword] = useState(true)
  const [showCurrentPassword, setShowCurrentPassword] = useState(true)

  const onSaveDetails = async () => {}

  const isLoading = false

  return (
    <Box sx={styles.container}>
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={updatePasswordSchema}
        onSubmit={onSaveDetails}
        validateOnMount
      >
        {({ values, errors, touched, handleChange, handleSubmit, setFieldTouched }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={styles.headingBox}>
              <Typography sx={styles.heading}>Change Password</Typography>
              <Button sx={styles.updateButton} type="submit">
                {isLoading ? <CircularProgress size="20px" sx={{ color: '#ffffff' }} /> : 'Update'}
              </Button>
            </Box>
            <Box sx={{ padding: '1.5rem' }}>
              <Box sx={{ width: '49%' }}>
                <FormControl sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 'small', color: '#888888', mr: 0.5 }}>
                      Current Password
                    </Typography>
                    <Image src={InfoIcon} alt="info" width={15} />
                  </Box>
                  <TextField
                    placeholder="Current Password*"
                    name="currentPassword"
                    type={showCurrentPassword ? 'password' : 'text'}
                    fullWidth
                    value={values.currentPassword}
                    onChange={handleChange}
                    onFocus={() => setFieldTouched('currentPassword', true, true)}
                    error={touched.currentPassword && Boolean(errors.currentPassword)}
                    helperText={touched.currentPassword && errors.currentPassword}
                    sx={styles.textField}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowCurrentPassword((prev) => !prev)}
                            edge="end"
                            aria-label={showCurrentPassword ? 'Hide password' : 'Show password'}
                          >
                            {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
              <Box sx={styles.formRow}>
                <FormControl>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 'small', color: '#888888', mr: 0.5 }}>
                      New Password
                    </Typography>
                    <Image src={InfoIcon} alt="info" width={15} />
                  </Box>
                  <TextField
                    placeholder="New Password*"
                    name="newPassword"
                    type={showNewPassword ? 'password' : 'text'}
                    value={values.newPassword}
                    onChange={handleChange}
                    onFocus={() => setFieldTouched('newPassword', true, true)}
                    error={touched.newPassword && Boolean(errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                    sx={styles.textField}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowNewPassword((prev) => !prev)}
                            edge="end"
                            aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                          >
                            {showNewPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {values.newPassword.length > 0 && touched.newPassword && (
                    <PasswordStrengthBar password={values.newPassword} isDirty />
                  )}
                </FormControl>

                <FormControl>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 'small', color: '#888888', mr: 0.5 }}>
                      Confirm New Password
                    </Typography>
                    <Image src={InfoIcon} alt="info" width={15} />
                  </Box>
                  <TextField
                    placeholder="Confirm Password*"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'password' : 'text'}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    sx={styles.textField}
                    size="small"
                    onFocus={() => setFieldTouched('confirmPassword', true, true)}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            edge="end"
                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default UpdatePassword
