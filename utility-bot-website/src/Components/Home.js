import RippleButton from "RippleButton";
const Home = () => {
  return (
    <div>
      <div className="home-main-container">
        <div>
          <h1 className="home-content">
            Utility Bot is a discord bot with many useful commands to help you
            manage your server.
          </h1>
          <RippleButton content="invite"/>
        </div>
      </div>
      <div className="faq-container">
        <h1>FAQ</h1>
        <br />
        <ul style={{ marginLeft: "2rem" }}>
          <li className="faq">
            <h1>Q: What makes Utility Bot superior to other bots?</h1>
            <h1>A: Absolutely everything</h1>
          </li>
          <li>
            <h1>Q: Add your question here</h1>
            <h1>A: Add your answer here</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;