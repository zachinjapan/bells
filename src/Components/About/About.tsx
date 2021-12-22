import "./About.css";
import headshot from "../../images/headshot.png";

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
          <img src={headshot} alt="headshot1" className="headshot" />
          <p> My name is Joey I love potatoes.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
