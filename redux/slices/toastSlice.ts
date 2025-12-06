import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToastState {
  open: boolean
  message: string
  severity: 'success' | 'error'
}

const initialState: ToastState = {
  open: false,
  message: '',
  severity: 'success',
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (
      state,
      action: PayloadAction<{ message: string; severity: ToastState['severity'] }>,
    ) => {
      state.open = true
      state.message = action.payload.message
      state.severity = action.payload.severity
    },
    hideToast: (state) => {
      state.open = false
      state.message = ''
    },
  },
})

export const { showToast, hideToast } = toastSlice.actions
export default toastSlice.reducer
