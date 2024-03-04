import Header from "../../components/Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <Header />
      <div className="welcome">
        <h2>Welcome to my simple Blog</h2>
        <Link to="/blog">Go to articles</Link>
      </div>
    </section>
  );
};

export default Home;
<section></section>;
