import { configureStore } from "@reduxjs/toolkit";
import shipmentViewReducer from "./shipmentViewSlice";

const appStore = configureStore({
  reducer: {
    shipmentView: shipmentViewReducer,
  },
});

export default appStore;
