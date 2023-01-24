import {bindActionCreators} from "redux";
import ActionsCreators from "@/store/actionsCreators";
import {useDispatch} from "react-redux";

export const useActions=()=>{
    const dispatch=useDispatch()
    return bindActionCreators(ActionsCreators,dispatch)
}