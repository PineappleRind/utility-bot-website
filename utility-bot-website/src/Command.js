const Command = ({
  name,
  params = "none",
  description,
  example = `u!${name} ${params === "none" ? "" : params}`,
  changeIdx,
  isIdx,
}) => {
  return (
    <>
      <div className="command" onClick={changeIdx}>
        <div className="command-info" style={{ width: "20%" }}>
          {name}
        </div>
        <div
          className="command-info command-description"
          style={{ width: "65%" }}
        >
          {description}
        </div>
        <div className="command-info" style={{ width: "15%" }}>
          {params}
        </div>
      </div>
      {isIdx && (
        <div className=" command-info dropdown-command">
          <div className="dropdown-command-content">{example}</div>
        </div>
      )}
    </>
  );
};

export default Command;
