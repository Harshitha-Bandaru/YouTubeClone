import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
  reducer: { app: appSlice, cache: cacheSlice, liveChat: liveChatSlice },
});

export default store;
