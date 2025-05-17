import{createSlice} from '@reduxjs/toolkit';

const initialState={
    user:null,
};

export const userSlice=createSlice({
    name:'userr',
    initialState:initialState,
    reducers:{
            setuser:(state,action)=>{
                state.user=action.payload;
            },
            deleteUser:(state,action)=>{
                state.user=null;
            }
    }

})

export const{setuser,deleteUser}=userSlice.actions;

export default userSlice.reducer;




