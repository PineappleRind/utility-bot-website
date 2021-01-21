const Card = (props) => {
  return (
    <div className="card-container">
      <h1 style={{ color: "purple" }}>{props.title}</h1>
      <p style={{ margin: "1rem 1rem" }}>{props.children}</p>
    </div>
  );
};

export default Card;
