import RippleButton from "./Components/RippleButton";
import Card from "./Components/card";
const Home = () => {
  return (
    <div >
      <div className="fullpage-container">
        <div>
          <h1>
            Utility Bot
          </h1>
          <h2>Utility Bot is a discord bot with many useful commands to help you
            manage your server.</h2>
          <RippleButton content="invite" />
        </div>
      </div>
      <div className="cards">
        <Card title="title">
          content of the card
        </Card>
        <Card title="title">content</Card>
        <Card title="title">content of the card</Card>
      </div>
    </div>
  );
};

export default Home;
