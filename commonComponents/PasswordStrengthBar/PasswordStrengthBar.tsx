import Box from '@mui/material/Box'
import Styles from './passwordStrengthBarStyle'
import React from 'react'

interface PasswordStrengthBarProps {
  password: string
  isDirty: boolean
}

const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({ password, isDirty }) => {
  const initPwdChecker = (): { strength: number; val: string } => {
    let pwdCheck = 0
    const validateRegex = ['[A-Z]', '[a-z]', '[0-9]', '[^a-zA-Z0-9]']

    validateRegex.forEach((regex) => {
      if (new RegExp(regex).test(password)) {
        pwdCheck += 1
      }
    })

    switch (pwdCheck) {
      case 0:
        return { strength: 0, val: '' }
      case 1:
        return { strength: 1, val: 'Weak' }
      case 2:
        return { strength: 2, val: 'Fair' }
      case 3:
        return { strength: 3, val: 'Good' }
      case 4:
        return { strength: 4, val: 'Strong' }
      default:
        return { strength: 0, val: '' }
    }
  }

  const passLengthLessThan8 = (password?.length ?? 0) < 8 && isDirty

  const strengthInfo = initPwdChecker()

  return (
    <Box sx={Styles.progressWrapper}>
      <progress
        className={`pwdCheckerBar strength${passLengthLessThan8 ? 'Weak' : strengthInfo.val}`}
        value={passLengthLessThan8 ? 1 : strengthInfo.strength}
        max={4}
      />
    </Box>
  )
}

export default PasswordStrengthBar
