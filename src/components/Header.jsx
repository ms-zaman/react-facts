import globe from "../assets/globe.png";
export default function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <nav className="navbar">
          <img className="nav-logo" src={globe} alt="Glob Icon" />
          <span className="nav-logo-title">my travel journal.</span>
        </nav>
      </div>
    </header>
  );
}
