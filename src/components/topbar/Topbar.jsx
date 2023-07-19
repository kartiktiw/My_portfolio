import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            my-portfolio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href='tel:8052471478'><span>+91 8052471478</span></a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:kartiktiwari8052471478@gmail.com">
            <span>kartiktiwari14391@gmail.com</span></a>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon"/>
           <a href="https://www.linkedin.com/in/kartik-tiwari-b49475203/"><span>linkedIn</span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
