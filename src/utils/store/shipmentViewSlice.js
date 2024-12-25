import { createSlice } from "@reduxjs/toolkit";

const shipmentViewSlice = createSlice({
  name: "shipmentView",
  initialState: {
    selectedShipment: null,
    showShipment: true,
    activeShipmentTab: "MAP",
  },

  reducers: {
    selectShipment: (state, action) => {
      state.selectedShipment = action.payload;
      state.showShipment = true;
    },
    closeShipment: (state) => {
      state.selectedShipment = null;
      state.showShipment = false;
    },
    changeActiveShipmentTab: (state, action) => {
      state.activeShipmentTab = action.payload;
    },
  },
});

export const { selectShipment, closeShipment, changeActiveShipmentTab } =
  shipmentViewSlice.actions;

export default shipmentViewSlice.reducer;
