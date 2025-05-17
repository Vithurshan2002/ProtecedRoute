import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../slices/useSlice";
const Nav = () => {
 const dispatch=useDispatch();
  const navigate=useNavigate();

  const users = useSelector((state) => {
    return state.userInfor.user;
  });
  console.log(users);

//to set the stte null to lockkout
 

  const lockout=()=>{
    dispatch(deleteUser());
    navigate('/'); //navigate homepage
  }

  return (
    <div className="flex justify-around bg-blue-200 h-15 items-center">
      <h1 className="font-bold text-2xl">Ultra</h1>
      <ul className="flex gap-x-10">
        {!users && <Link to="/login"> Login</Link>}
        {users && (
          <>
            <Link to="/home"> Home</Link>
            <Link to="/setting"> Setting</Link>
            <Link onClick={lockout}> Logout</Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
