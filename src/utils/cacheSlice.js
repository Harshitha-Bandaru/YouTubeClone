import { createSlice, current } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addToCache: (state, action) => {
      const length = Object.keys(state).length;
      // FIFO when the length of state variable exceeds 100
      if (length >= 100) {
        delete state[Object.keys(state)[0]];
      }
      // console.log("length", length);
      // console.log("payload", action.payload);
      // const newObj = { ...state, ...action.payload };
      // state = newObj;
      Object.assign(state, action.payload);
      console.log("state", current(state));
    },
  },
});

export const { addToCache } = cacheSlice.actions;
export default cacheSlice.reducer;
