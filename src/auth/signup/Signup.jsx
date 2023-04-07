import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../customTags/Button";
import Input from "../customTags/Input";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../notification/Notification";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    profession: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUser = users.some((user) => user.email === formData.email);

    if (!isUser) {
      localStorage.setItem("users", JSON.stringify([...users, formData]));
    } else {
      return showErrorNotification("User Already Exists");
    }

    navigate("/signin");
    return showSuccessNotification("Successfully Signup");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isSignupDisabled =
    !formData.name ||
    !formData.email ||
    !formData.phone_number ||
    !formData.profession;

  return (
    <div
      style={{
        width: "35%",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Sign up</h1>
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
        <Input type="text" name="name" placeholder="Name" required />
        <Input type="text" name="email" placeholder="E-mail" />
        <Input type="number" name="phone_number" placeholder="Phone Number" />
        <Input type="password" name="password" placeholder="Password" />
        <select
          style={{
            border: "1px solid #B2B2B2",
            borderRadius: "4px",
            height: "45px",
            padding: "5px",
            paddingLeft: "20px",
            fontSize: "20px",
          }}
          name="profession"
        >
          <option
            value=""
            disabled
            selected
            hidden
            style={{ color: "#B2B2B2" }}
          >
            Profession
          </option>
          <option value="Web Developer">Web Developer</option>
          <option value="Android Developer">Android Developer</option>
        </select>
        <Button type="submit" disabled={isSignupDisabled}>
          Signup
        </Button>
      </form>
    </div>
  );
};

export default Signup;
