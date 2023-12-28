const { createSlice } = require("@reduxjs/toolkit");

const examSlice = createSlice({
    name:'exam',
    initialState:{isChoosed:false , subjects:[],numberOfSubject:0},
    reducers:{
        toggle(state){
            state.isChoosed=!state.isChoosed;
        },

        addSubject(state,action)
        {
                const newSubject = action.payload;
                   
                    state.subjects.push({
                        time:newSubject.time,
                         history:newSubject.history,
                         month:newSubject.month, 
                         name :newSubject.name
                    })
        },
        
        removeSubject(state,action){
            const id= action.payload;
            const existingItem = state.subjects.find((item)=>item.id===id);
            if(existingItem){
                state.subjects=state.subjects.filter((item)=>item.id!==id);
            }
            
        }   
    }} 
);

export const examAction = examSlice.actions;

export default examSlice;