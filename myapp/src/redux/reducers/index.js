import { combineReducers } from "redux"; //複数のリデューサーをまとめる
import calculator from "./calculator";

const reducer = combineReducers({ calculator });
//複数のリデューサーを使用する場合は下記のように
// const reducer = combineReducers({ calculator, hoge, fuga });

export default reducer;
