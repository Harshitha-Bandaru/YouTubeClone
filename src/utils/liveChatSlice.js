import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessage: (state, action) => {
      // splice is used to maintian the length of array to certain number
      state.messages.splice(20, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addChatMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
