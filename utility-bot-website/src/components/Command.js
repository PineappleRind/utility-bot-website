const Command = ({ children, title, bgc = "rgb(30, 30, 30)" }) => {
  let [params, description] = children.split(";");
  params = params.replace("params:", "");
  description = description.replace("description:", "");
  // example = example.replace("example:", "")
  return (
    <>
      <div className="command" style={{ backgroundColor: bgc }}>
        <div className="command-info" style={{ width: "8%" }}>
          {title}
        </div>
        <div
          className="command-info command-description"
          style={{ width: "70%" }}
        >
          {description}
        </div>
        <div className="command-info" style={{ width: "20%" }}>
          {params}
        </div>
      </div>
    </>
  );
};

export default Command;
