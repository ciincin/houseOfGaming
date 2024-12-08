import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import BasicDropdown from "../dropdown/BasicDropdown";

const navbarDropdown = [
  {
    item: "Home",
    href: "/",
  },
  {
    item: "Game finder",
    href: "/survey",
  },
];

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="navbar">
      <div className="no-list-style">
        <div className="navbar-brand">
          <a href="/">
            <img
              src="../../../assets/logos/logoPNG.png"
              width={150}
              alt="logo"
            />
          </a>
        </div>
        <div className="navbar-dropdown">
          <BasicDropdown btnName={"Links"} objectsArray={navbarDropdown} />
        </div>
        <div className="links">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/survey">Game finder</a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
