import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => (
  <nav>
    <div className="Nav">
      <NavLink to="/">Blog App</NavLink>
    </div>
      <div className="nav-right">
        <NavLink to="/AddPost">Add Post</NavLink>
        <NavLink to="/">Posts</NavLink>
      
    </div>
  </nav>
)
export default Nav;