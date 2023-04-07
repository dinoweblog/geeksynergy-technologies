const Button = ({ children, style, onClick, type, disabled }) => {
  return (
    <button
      style={{
        height: "45px",
        maxWidth: 150,
        border: "1px solid #B2B2B2",
        borderRadius: "4px",
        fontSize: 18,
        backgroundColor: "#009FBD",
        ...style,
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
