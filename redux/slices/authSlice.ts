// import { AdminUser } from '@/Types/adminUserType'
import { UserDetailType } from "@/utils/types/userDetailType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
  // refreshToken: string | null
  user: UserDetailType | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  // refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        token: string;
        // refreshToken: string
        user: UserDetailType;
      }>,
    ) => {
      state.token = action.payload.token;
      // state.refreshToken = action.payload.refreshToken
      state.user = action.payload.user;
    },
    clearAuth: (state) => {
      state.token = null;
      // state.refreshToken = null
      state.user = null;
    },
    setCredentials: (
      state,
      action: PayloadAction<{
        token: string;
        refreshToken: string;
      }>,
    ) => {
      state.token = action.payload.token;
      // state.refreshToken = action.payload.refreshToken
    },
  },
});

export const { setAuth, setCredentials, clearAuth } = authSlice.actions;
export default authSlice.reducer;
