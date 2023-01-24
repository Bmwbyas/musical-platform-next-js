// create a makeStore function
import {Context, createWrapper} from "next-redux-wrapper";
import {createStore, Store} from "redux";
import {rootReducer, RootStateType} from "@/store/reducers";


const makeStore = (context: Context) => {
    return createStore(rootReducer);
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootStateType>>(makeStore, {debug: true});