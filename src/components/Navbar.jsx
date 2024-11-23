import reactLogo from "../assets/react.svg";
export default function Navbar() {
  return (
    <header className="header-section">
      <div className="container">
        <nav className="navbar">
          <img className="nav-logo" src={reactLogo} alt="React Logo" />
          <span className="nav-logo-title">ReactFacts</span>
        </nav>
      </div>
    </header>
  );
}
