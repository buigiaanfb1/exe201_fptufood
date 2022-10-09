import {
    createSlice,
    PayloadAction,
    CaseReducer,
    // createAsyncThunk,
  } from '@reduxjs/toolkit';
  import { ModalList } from '../util/constant';
  
  interface State {
    CartModalVisible:boolean,
   
  }
  
  const initialState: State = {
    CartModalVisible:false,
    
  };
  
  // const TYPE_PREFIX = 'modal/';
  
  type CR<T> = CaseReducer<State, PayloadAction<T>>;
 
  const setModalVisibleCR: CR<{ modal: string; visible: boolean }> = (
    state,
    action,
  ) => {
    switch (action.payload.modal) {
      case ModalList.CART_MODAL:
        return {
          ...state,
          CartModalVisible: action.payload.visible,
        };
      default:
        return { ...state };
    }
  };
  
  
  
  const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      setModalVisible:setModalVisibleCR
     
    },
    extraReducers: () => {},
  });
  
  // export const { setDisabledPopupDocumentTableAction,setShowPopupShareAction } = modal.actions;
  export const {
    setModalVisible
   
  } = modal.actions;
  
  export default modal.reducer;
  