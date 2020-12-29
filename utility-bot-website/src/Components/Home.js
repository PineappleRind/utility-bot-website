const Home = () => {
  return (
    <div>
      <div className="home-main-container">
        <div>
          <h1 className="home-content">
            Utility Bot is a discord bot with many useful commands to help you
            manage your server.
          </h1>
          <button
            onClick={() => alert("no invitation link yet")}
            className="invite-button"
          >
            invite
          </button>
        </div>
      </div>
      <div className="home-faq">
        <h1>FAQ?</h1>
      </div>
    </div>
  );
};

export default Home;
