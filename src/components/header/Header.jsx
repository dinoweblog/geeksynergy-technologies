import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../../Redux/user/action";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(loginSuccess(null));
    navigate("/signin");
  };

  return (
    <div
      style={{
        padding: 10,
        paddingTop: 40,
        display: "flex",
        gap: 20,
        justifyContent: "space-between",
        fontSize: 22,
        width: "80%",
        margin: "auto",
        borderBottom: "1px solid #D8D9CF",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/company-info">Company Info</Link>
        <Link to="/movies">Movies</Link>
      </div>

      {user ? (
        <button
          style={{
            border: "none",
            padding: "8px",
            fontSize: "17px",
            backgroundColor: "#009FBD",
            color: "#ffffff",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Link to="/signin">Signin</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
