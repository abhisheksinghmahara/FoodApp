import { Logo_Url } from "../utils/Constants";
const Header = () => {
    return (
      <div className="header" id="header">
        <div>
          <img
            className="company_logo"
            src={Logo_Url}
          />
        </div>
        {/* <div className="cafetitle">
          <h1>NC Nishtha's Cafe</h1>
          </div> */}
        <div className="nav-items" >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        </div>
      </div>
    );
  };
  export default Header;