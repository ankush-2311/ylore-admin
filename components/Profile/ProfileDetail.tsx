import { Box, Button, CircularProgress, FormControl, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { styles } from './userProfileStyle'
import Image from 'next/image'
import InfoIcon from '@/public/assets/circle-info.svg'
import { updateProfileSchema } from '@/utils/validationSchema/profileDetailSchema'
import UpdateProfileDetailSkeleton from '@/utils/skeleton/UpdateProfileDetailSkeleton'

const adminUser = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'johndoe@gmail.com',
  phone: '',
}

const ProfileDetail = () => {
  const onSaveDetails = async () => {}

  if (!adminUser) {
    return <UpdateProfileDetailSkeleton />
  }

  const isLoading = false
  return (
    <Box sx={styles.root}>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: adminUser?.first_name,
          lastName: adminUser?.last_name,
          email: adminUser?.email,
          mobile: adminUser?.phone,
        }}
        validationSchema={updateProfileSchema}
        onSubmit={onSaveDetails}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={styles.headingBox}>
              <Typography sx={styles.heading}>Update Profile</Typography>
              <Button sx={styles.updateButton} type="submit">
                {isLoading ? <CircularProgress size="20px" sx={{ color: '#ffffff' }} /> : 'Update'}
              </Button>
            </Box>
            <Box sx={{ p: '1.2rem' }}>
              <Box sx={styles.formRow}>
                <FormControl>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 'small', color: '#888888', mr: 0.5 }}>
                      First Name
                    </Typography>
                    <Image src={InfoIcon} alt="info" width={15} />
                  </Box>
                  <TextField
                    placeholder="First Name*"
                    sx={styles.formControl}
                    size="small"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={
                      touched.firstName && typeof errors.firstName === 'string'
                        ? errors.firstName
                        : undefined
                    }
                  />
                </FormControl>
                <FormControl>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 'small', color: '#888888', mr: 0.5 }}>
                      Last Name
                    </Typography>
                    <Image src={InfoIcon} alt="info" width={15} />
                  </Box>
                  <TextField
                    placeholder="Last Name*"
                    sx={styles.formControl}
                    size="small"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={
                      touched.lastName && typeof errors.lastName === 'string'
                        ? errors.lastName
                        : undefined
                    }
                  />
                </FormControl>
              </Box>

              <Box sx={styles.formRow2}>
                <FormControl>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 'small', color: '#888888', mr: 0.5 }}>
                      Email
                    </Typography>
                    <Image src={InfoIcon} alt="info" width={15} />
                  </Box>
                  <TextField
                    placeholder="Email*"
                    sx={styles.formControl}
                    size="small"
                    name="email"
                    disabled
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                  />
                </FormControl>
                <FormControl>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 'small', color: '#888888', mr: 0.5 }}>
                      Phone Number
                    </Typography>
                    <Image src={InfoIcon} alt="info" width={15} />
                  </Box>
                  <TextField
                    placeholder="Phone Number*"
                    sx={styles.formControl}
                    size="small"
                    name="mobile"
                    value={values.mobile}
                    onChange={(event) => {
                      const { value } = event.target
                      const numericValue = value.replace(/[^0-9]/g, '')
                      handleChange({
                        target: {
                          name: 'mobile',
                          value: numericValue,
                        },
                      })
                    }}
                    error={touched.mobile && Boolean(errors.mobile)}
                    helperText={
                      touched.mobile && typeof errors.mobile === 'string'
                        ? errors.mobile
                        : undefined
                    }
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

export default ProfileDetail
