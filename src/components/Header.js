const Header = ({ isActive, setIsActive }) => {
  const clickHandler = (e) => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  const body = document.querySelector("body");

  body.style.color = !isActive ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)";
  body.style.backgroundColor = !isActive
    ? "hsl(207, 26%, 17%)"
    : "hsl(0, 0%, 98%)";
  const lt__eleBg = isActive ? "lt__ele-Bg" : "";

  return (
    <header className={`header ${lt__eleBg}`}>
      <div className="container">
        <div className="header__heading">
          <h2 className="header__heading">Where in the World?</h2>
        </div>
        <div className="toggle-switch">
          <div className="toggle-switch__icon">
            <ion-icon name="moon"></ion-icon>
          </div>
          <button onClick={clickHandler} className="toggle-switch__btn">
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
