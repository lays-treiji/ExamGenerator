import examSlice from "./exam-slice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        exam : examSlice.reducer
    }
})

export default store;