import "./topbar.scss";
import { Person,Mail } from "@mui/icons-material"


//to make topbar click animation when the user press
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">traveller</a>
            <div className="itemContainer"></div>
            <Person className="icon" />
            <span>+1 924 126 75</span>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>traveller@join.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
