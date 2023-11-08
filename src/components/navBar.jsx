import CartButton from "./cartButton";
import BrowseInput from "./browseInput";

function Navbar() {
  const logoStyle = {
    width: "50px",
    height: "50px", // Set the desired height here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://res.cloudinary.com/drj3ogctf/image/upload/v1696790846/LOGO_y8hszt.png"
            alt="Logo"
            style={logoStyle}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="/productsList">
                PRODUCTOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-3 me-3 mt-3">
          <BrowseInput />
        </div>
        <CartButton />
      </div>
    </nav>
  );
}

export default Navbar;
