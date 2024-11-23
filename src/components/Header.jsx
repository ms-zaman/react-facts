import globe from "../assets/Globe.png";
export default function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <nav className="navbar">
          <img className="nav-logo" src={globe} alt="React Logo" />
          <span className="nav-logo-title">my travel journal.</span>
        </nav>
      </div>
    </header>
  );
}
