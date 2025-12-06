'use client'

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import {
  layoutBox,
  leftSection,
  logoStyle,
  rightSection,
  textStyleBottom,
  textFieldStyle,
  loginButtonStyle,
  forgotPasswordStyle,
  backButtonStyle,
  textStyle,
} from './loginStyle'
import ylore from '../../public/assets/ylore.svg'
import envelope from '../../public/assets/envelope.png'
import key from '../../public/assets/key.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useLoginAdminMutation } from '@/redux/apis/authApi'
import { useDispatch } from 'react-redux'
import { setAuth } from '@/redux/slices/authSlice'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { showToast } from '@/redux/slices/toastSlice'

const Login = () => {
  const [isForgetPassword, setIsForgetPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const [loginAdmin, { isLoading }] = useLoginAdminMutation()
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isForgetPassword) {
      try {
        const response = await loginAdmin({ email, password }).unwrap()

        const { token, user } = response

        dispatch(
          setAuth({
            token,
            user,
          }),
        )
        push('/dashboard')
        dispatch(
          showToast({
            message: 'Login successful!',
            severity: 'success',
          }),
        )
      } catch (err) {
        const error = err as { status?: number }
        if (error?.status === 404) {
          dispatch(showToast({ message: 'User not found', severity: 'error' }))
          return
        } else if (error?.status === 401) {
          dispatch(showToast({ message: 'Invalid credentials', severity: 'error' }))
          return
        }
        dispatch(showToast({ message: 'Login failed', severity: 'error' }))
      }
    } else {
      // const response = await forgetPassword({ email });
      // if (response?.data?.success) {
      //   dispatch(
      //     showToast({
      //       message:
      //         "A password reset link has been sent to your registered email.",
      //       severity: "success",
      //     })
      //   );
      // }
    }
  }
  const isForgotLoading = false

  return (
    <div>
      <Box sx={layoutBox}>
        <Box flex={1.2} sx={leftSection}>
          <Box marginLeft={8}>
            <Typography fontFamily="Roboto" fontWeight={700} fontSize="48px">
              Welcome to the Ylore portal
            </Typography>
            <Typography fontFamily="Roboto" fontWeight={400} fontSize="14px" sx={textStyleBottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut non iusto laudantium
              nesciunt odit temporibus commodi provident. Voluptate nobis sit ea quidem veniam,
              possimus magnam placeat veritatis consequatur, est doloribus!
            </Typography>
          </Box>
        </Box>

        <Box flex={1} sx={rightSection}>
          <Box width="100%" maxWidth="500px">
            <Box sx={logoStyle}>
              <Image src={ylore} alt="logo" width={200} height={60} />
            </Box>

            <form style={{ marginTop: 40 }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                placeholder={isForgetPassword ? 'Enter your registered email' : 'Enter your Email'}
                sx={textFieldStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <Image
                        src={envelope}
                        alt="icon"
                        width={20}
                        height={20}
                        style={{ marginRight: 3 }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              {isForgetPassword ? (
                <Box sx={textStyle}>
                  <Typography>
                    Don&rsquo;t remember your registered email? Reach out to our support team for
                    further assistance.
                  </Typography>
                </Box>
              ) : (
                <>
                  <TextField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your Password"
                    margin="normal"
                    sx={textFieldStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="end">
                          <Box display="flex" alignItems="center" pr={2}>
                            <Image src={key} alt="icon" width={20} height={20} />
                          </Box>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="start">
                          <Box display="flex" alignItems="center" pr={0.5}>
                            <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Box display="flex" justifyContent="end" mt={2}>
                    <Typography
                      fontFamily="Roboto"
                      sx={forgotPasswordStyle}
                      fontWeight={400}
                      fontSize="16px"
                      onClick={() => setIsForgetPassword(true)}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>
                </>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={loginButtonStyle(isForgetPassword)}
              >
                <Typography fontFamily="Roboto" fontWeight={700} fontSize="22px">
                  {isForgetPassword ? (
                    isForgotLoading ? (
                      <CircularProgress size="40px" sx={{ color: '#ffffff' }} />
                    ) : (
                      'Submit'
                    )
                  ) : isLoading ? (
                    <CircularProgress size="40px" sx={{ color: '#ffffff' }} />
                  ) : (
                    'Login'
                  )}
                </Typography>
              </Button>

              {isForgetPassword && (
                <Button
                  variant="contained"
                  fullWidth
                  sx={backButtonStyle}
                  onClick={() => setIsForgetPassword(false)}
                >
                  <Typography fontFamily="Roboto" fontWeight={700} fontSize="22px">
                    Back
                  </Typography>
                </Button>
              )}
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Login
