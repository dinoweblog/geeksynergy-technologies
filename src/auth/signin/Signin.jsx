import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../customTags/Button";
import Input from "../customTags/Input";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../notification/Notification";
import { loginSuccess } from "../../Redux/user/action";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (isUser) {
      dispatch(loginSuccess(isUser));
      navigate("/movies");
      return showSuccessNotification(`Welcome ${isUser.name}`);
    } else {
      return showErrorNotification("Invalid Credentials");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isLoginDisabled = !formData.email || !formData.password;

  return (
    <div
      style={{
        width: "35%",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Sign in</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 20,
        }}
        onSubmit={handleSubmit}
        onChange={handleOnChange}
      >
        <Input type="text" name="email" />
        <Input type="password" name="password" />
        <Button type="submit" disabled={isLoginDisabled}>
          Signin
        </Button>
      </form>
    </div>
  );
};

export default Signin;
