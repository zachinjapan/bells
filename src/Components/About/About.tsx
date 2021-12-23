import "./About.css";
import headshot from "../../images/headshot.png";
import PersonCard from "../UI/PersonCard/PersonCard";

const About = () => {
  return (
    <div className="scroll-div">
      <div className="about">
        <h1>About</h1>
        <p>This is a game that is like a real game. It is fun and faxtonical</p>
      </div>
      <div className="person-div">
        <PersonCard
          name="Joey"
          image={headshot}
          position="Game Designer"
          description="I love potatoes"
        />
        <PersonCard
          name="Zach"
          image={headshot}
          position="Web Developer"
          description="I love cupcakes"
        />
      </div>
    </div>
  );
};

export default About;
