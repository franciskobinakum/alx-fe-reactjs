import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile</Link><br />
      <Link to="/blog/1">View Blog Post 1</Link><br />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;