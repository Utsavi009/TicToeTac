import { Link } from "react-router-dom";
import "../index.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <section>
        <Link to="/">Game</Link>
      </section>
      <section>
        <Link to="/count">Counter</Link>
      </section>
      <section>
          <Link to="/todo">Todo</Link>
      </section>
    </div>
  );
};

export default Navbar;
