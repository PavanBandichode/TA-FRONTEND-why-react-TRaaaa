function Header() {
  return (
    <>
      <header className="navbar">
        <div className="container flex">
          <div className="flex">
            <a className="brand" href="index.html">
              <strong>Hydro</strong>
            </a>
            <nav>
              <ul className="flex nav-menu nav-menu-primary">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="index.html">About</a>
                </li>
                <li>
                  <a href="index.html">Blog</a>
                </li>
                <li>
                  <a href="index.html">Our Work</a>
                </li>
                <li>
                  <a href="index.html">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="flex nav-menu nav-menu-secondary">
              <li className="social-media-item">
                <a href="index.html">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a href="index.html">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a href="index.html">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="btn btn-primary" href="index.html">
                  Sign in / Join
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
