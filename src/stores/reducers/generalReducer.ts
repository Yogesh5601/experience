import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  welcomeMsg: string;
} = {
  welcomeMsg: "Welcome to non coders portfolio how may i help you,",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setWelcome: (state, action: PayloadAction<string>) => {
      state.welcomeMsg = action.payload;
    },
  },
});

export const {setWelcome} = generalSlice.actions
export default generalSlice.reducer;
