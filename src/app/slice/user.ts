import {
    createSlice,
    PayloadAction,
    CaseReducer,
    // createAsyncThunk,
} from '@reduxjs/toolkit';
import { User } from '../models/user';
import { ModalList } from '../util/constant';

interface State {
    User: User | null

}

const initialState: State = {
    User: null
};

// const TYPE_PREFIX = 'modal/';

type CR<T> = CaseReducer<State, PayloadAction<T>>;

const setUserCR: CR<{ value: User }> = (
    state,
    action,
) => ({
    ...state,
    User: action.payload.value
})


const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: setUserCR

    },
    extraReducers: () => { },
});

// export const { setDisabledPopupDocumentTableAction,setShowPopupShareAction } = modal.actions;
export const {
    setUser

} = user.actions;

export default user.reducer;
