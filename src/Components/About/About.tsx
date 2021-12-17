import "./About.css";

const About = () => {
  return (
    <div className="scroll-div">
      <div className="about-container">
        <h1>About</h1>
        <p>This is a game that is like a real game. It is fun and faxtonical</p>
      </div>
      <div className="about-headshots">
        <div>
          <h1>Joey</h1>
          <img
            src="../../images/headshot.png"
            alt="headshot1"
            className="headshot"
          />
          <p> this will be clickable modal. maybe</p>
        </div>
        <div>
          <h1>Joey</h1>
          <img
            src="../../images/headshot.png"
            alt="headshot2"
            className="headshot"
          />
          <p> this will be clickable modal. maybe</p>
        </div>
        <div>
          <h1>Joey</h1>
          <img
            src="../../images/headshot.png"
            alt="headshot3"
            className="headshot"
          />
          <p> this will be clickable modal. maybe</p>
        </div>
      </div>
    </div>
  );
};

export default About;
