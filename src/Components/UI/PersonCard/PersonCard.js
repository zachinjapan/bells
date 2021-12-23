import "./PersonCard.css";

const PersonCard = (props) => {
  return (
    <div className="person-card">
      <div className="person-card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="person-card-nfo">
        <div className="person-card-name">{props.name}</div>
        <div className="person-card-position">{props.position}</div>
        <div className="person-card-description">{props.description}</div>
      </div>
    </div>
  );
};

export default PersonCard;
