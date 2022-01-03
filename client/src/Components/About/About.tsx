import "./About.css";

import PersonCard from "../UI/PersonCard/PersonCard";
import zach from "../../images/zach.jpeg";
import cliff from "../../images/cliff.jpeg";
import joey from "../../images/joey.jpeg";

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
          image={joey}
          position="Game Designer"
          description="I love potatoes"
        />
        <PersonCard
          name="Zach"
          image={zach}
          position="Web Developer"
          description={`I love potatoes`}
          href="https://linktr.ee/zachinjapan"
        />
        <PersonCard
          name="Cliff"
          image={cliff}
          position="Web Developer"
          description="I love potatoes"
          href="https://google.com"
        />
      </div>
    </div>
  );
};

export default About;
