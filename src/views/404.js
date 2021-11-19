import Link from "react-router-dom/Link";

const err = () => {
  return (
    <div>
      <h1>Nothing Found</h1>
      <Link to="/admin/dashboard">Go To DashBoard</Link>
    </div>
  );
};

export default err;
