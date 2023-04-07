const CompanyInfo = () => {
  console.log(document.cookie);
  return (
    <div>
      <h1 style={{ marginTop: 50, textAlign: "center", fontSize: 50 }}>
        Company Info
      </h1>
      <div
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "50px",
          lineHeight: 2,
          padding: "10px",
          border: "1px solid gray",
        }}
      >
        <p>Company: Geeksynergy Technologies Pvt Ltd</p>
        <p>Address: Sanjayanagar, Bengaluru-56</p>
        <p>Phone: XXXXXXXXX09</p>
        <p>Email: XXXXXX@gmail.com</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
