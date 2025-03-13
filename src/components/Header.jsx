import myPhoto from '../assets/my-photo.jpg';

function Header({ id }) {
  return (
    <header className="portfolio-header" id={id}>
      <div className="photo-container">
        <img src={myPhoto} alt="Aayush Vats" className="profile-photo" />
      </div>
      <div className="text-container">
        <h1 className="name">Aayush Vats</h1>
        <p className="description">Pre-Final Year Undergrad at IIT Dharwad</p>
        <p className="description">Tech Enthusiast, Problem Solver, Developer</p>
      </div>
    </header>
  );
}

export default Header;