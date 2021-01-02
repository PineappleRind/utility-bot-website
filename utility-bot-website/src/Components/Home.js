import RippleButton from "./RippleButton";

const Home = () => {
  return (
    <div>
      <div className="section-container">
        <div>
          <h1 className="section-content">
            Utility Bot is a discord bot with many useful commands to help you
            manage your server.
          </h1>
          <RippleButton content="invite" />
        </div>
      </div>
    </div>
  );
};

export default Home;
