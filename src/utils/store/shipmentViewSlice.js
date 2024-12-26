import { createSlice } from "@reduxjs/toolkit";

const shipmentViewSlice = createSlice({
  name: "shipmentView",
  initialState: {
    selectedShipment: null,
    showShipment: false,
    activeShipmentTab: "MAP",
    isDetailsExpanded: false,
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
    toggleExpandDetails: (state) => {
      state.isDetailsExpanded = !state.isDetailsExpanded;
    },
  },
});

export const {
  selectShipment,
  closeShipment,
  changeActiveShipmentTab,
  toggleExpandDetails,
} = shipmentViewSlice.actions;

export default shipmentViewSlice.reducer;
