import "./PersonCard.css";

const PersonCard = (props) => {
  return (
    <div className="person-card">
      <div className="person-card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="person-card-info">
        <div className="person-card-name">{props.name}</div>
        <div className="person-card-position">{props.position}</div>
        <div className="person-card-description">{props.description}</div>
        <div className="person-card-social">
          {props.href ? (
            <a href={props.href} target={"_blank"} rel="noreferrer noopener">
              Social Links
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
