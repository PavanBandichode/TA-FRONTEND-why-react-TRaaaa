function Header() {
  return (
    <>
      <header className="container">
        <div className="flex">
          <img src="Images/logo.png" alt="" width="150" />
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </>
  );
}
export default Header;
