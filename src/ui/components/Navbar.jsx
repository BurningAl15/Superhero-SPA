import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={
              location.pathname === "/marvel"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={
              location.pathname === "/dc"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={
              location.pathname === "/search"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          {/* <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
          <span className="nav-item nav-link text-primary">Aldhair</span>

          <button
            className="nav-item nav-link btn"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
