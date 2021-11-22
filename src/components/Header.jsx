import { Link } from "react-router-dom";

function Header () {
  return (
    <header>
      <Link to="/"><h1>Grey's House of Games</h1></Link>
      <Link to="/login"><p>Login</p></Link>
    </header>);
}

export default Header;