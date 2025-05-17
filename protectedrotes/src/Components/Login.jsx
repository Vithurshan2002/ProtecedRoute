
import { useDispatch } from "react-redux";
import {  setuser } from "../slices/useSlice";

const Login = () => {
  const dispath = useDispatch();
  const data = {
    //databsekla user loginpanniu atha databasela check panni corevta irutha athu orudatava anupum  ATHU THAN ITHU ENA KOLLAKA
    name: "vithurshan",
    password:'12345',
  };
  const Login = () => {
    if (data) {
      dispath(setuser(data));
      console.log('loginda')
    }
  };
 

  return <div onClick={ Login}>Login</div>;
};

export default Login;
