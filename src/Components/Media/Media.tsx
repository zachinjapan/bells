import "./Media.css";

const Media = () => {
  return (
    <div className="scroll-div">
      <h1
        style={{
          marginTop: "50px",
        }}
      >
        Media
      </h1>
      <div className="media-container">
        <iframe
          title="youtube"
          className="media-item"
          src="https://www.youtube.com/embed/TV6Maj-SLkI"
        />
      </div>
    </div>
  );
};

export default Media;
