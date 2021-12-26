import "./About.css";

import PersonCard from "../UI/PersonCard/PersonCard";
import zach from "../../images/zach.jpeg";

const About = () => {
  return (
    <div className="scroll-div">
      <div className="about">
        <h1>About</h1>
        <p>A mix of Dark Souls and left for dead</p>
      </div>
      <div className="person-div">
        <PersonCard
          name="Joey"
          image={zach}
          position="Game Designer"
          description="I love potatoes"
        />
        <PersonCard
          name="Zach"
          image={zach}
          position="Web Developer"
          description={`Front End Web developer using the React Framework.`}
          href="https://linktr.ee/zachinjapan"
        />
      </div>
    </div>
  );
};

export default About;
