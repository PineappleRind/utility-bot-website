import RippleButton from "./RippleButton";
import Card from "./card";
const Home = () => {
  return (
    <div>
      <div className="section-container">
        <div>
          <h1 className="section-content" style={{ marginLeft: "0.7rem" }}>
            Utility Bot is a discord bot with many useful commands to help you
            manage your server.
          </h1>
          <RippleButton content="invite" />
        </div>
      </div>
      <div className="cards">
        <Card title="title">
          content of the cardcontent of the cardcontent of the cardcontent of
          the cardcontent of the cardcontent of the cardcontent of the
          cardcontent of the cardcontent of the cardcontent of the cardcontent
          of the cardcontent of the card
        </Card>
        <Card title="title">content</Card>
        <Card title="title">content of the card</Card>
      </div>
    </div>
  );
};

export default Home;
