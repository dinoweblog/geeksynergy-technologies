const Input = ({ type, name, value, onChange, placeholder, required }) => {
  return (
    <input
      style={{
        border: "1px solid #B2B2B2",
        borderRadius: "4px",
        height: "45px",
        padding: "5px",
        paddingLeft: "20px",
        fontSize: "20px",
      }}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;
