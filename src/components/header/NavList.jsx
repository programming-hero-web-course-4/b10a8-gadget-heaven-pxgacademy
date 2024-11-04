import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavList = ({ list }) => {
  const { name, path } = list;
  return (
    <li>
      <NavLink to={path}>
        <span className="px-5 py-3 rounded-md">{name}</span>
      </NavLink>
    </li>
  );
};

NavList.propTypes = {
  list: PropTypes.object.isRequired,
};

export default NavList;
