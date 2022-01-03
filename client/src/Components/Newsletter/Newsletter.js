import "./Newsletter.css";

const Newsletter = () => {
  const u = process.env.REACT_APP_u;
  const id = process.env.REACT_APP_id;

  return (
    <div className="scroll-div">
      <form
        action={
          "https://gmail.us6.list-manage.com/subscribe/post?u=" +
          u +
          "&amp;id=" +
          id
        }
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
        className="newsletter-form"
      >
        <div id="mc_embed_signup_scroll">
          <h1>Get notified as soon as the game is released to the public</h1>
          <input
            style={{
              opacity: "0.8",
              borderRadius: "5px",
              padding: "10px",
              margin: "10px",
              border: "1px solid brown",
              fontSize: "20px",
              fontFamily: "cursive",
              backgroundColor: "#faddac",
            }}
            type="email"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <div
            style={{
              ariaHidden: "true",
              inputType: "text",
              tabIndex: "-1",
            }}
          />
        </div>
        <div className="clear foot">
          <input
            style={{
              opacity: "0.8",
              borderRadius: "5px",
              border: "1px solid brown",
              padding: "10px",
              color: "brown",
              backgroundColor: "#faddac",
              margin: "10px",
              fontSize: "20px",
              fontFamily: "Cursive",
            }}
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="newsletter-button"
          />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
