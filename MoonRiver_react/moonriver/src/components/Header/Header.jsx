import "./Header.css";

function Header({ children }) {
  return (
    <div class="header">
      {children}
      <img
        class="header__logo"
        width="180"
        height="26"
        src="/logo.svg"
        alt="логотип"
      />
    </div>
  );
}
export default Header;
