import './navbar.css'
// import resume from '../Assets/satya_ReactJs_Developer.pdf'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-black fixed-top shadow">
      <div className="container">
        <h3 className="navbar-brand" >Satya Kola</h3>

        <div className="nav-left">
          <a href="#about" className="nav-link d-inline text-light m-3">About</a>
          <a href="#skills" className="nav-link d-inline text-light m-3">Skills</a>
          <a href="#projects" className="nav-link d-inline text-light m-3">Projects</a>
          <a href="#contact" className="nav-link d-inline text-light m-3">Contact</a>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
