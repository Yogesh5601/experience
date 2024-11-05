import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  btc: number;
} = {
  btc: 0,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setBtc: (state, action: PayloadAction<number>) => {
      state.btc = action.payload;
    },
  },
});

export const {setBtc} = generalSlice.actions
export default generalSlice.reducer;
