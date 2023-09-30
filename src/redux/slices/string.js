import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Hello World!';

const stringSlice = createSlice({
  name: 'string',
  initialState,
  reducers: {
    updateString: (state, action) => {
      return action.payload; // Set the state to the payload (new string)
    },
  },
});

export const { updateString } = stringSlice.actions;
export default stringSlice.reducer;