<<<<<<< HEAD
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Travel Memory
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/addexperience">
                Add Experience
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
=======
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [location.pathname]);

  const linkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand-md tm-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand tm-brand" to="/">
          <span aria-hidden="true">✈️</span> Travel Memory
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="tmNavbar"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="tmNavbar">
          <div className="navbar-nav ms-auto align-items-md-center gap-md-2">
            <NavLink className={linkClass} to="/" end>
              Home
            </NavLink>
            <NavLink className="btn btn-primary btn-sm ms-md-2 my-2 my-md-0" to="/addexperience">
              + Add Experience
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
>>>>>>> 96decdb (first commit)
  );
}

export default Header;
