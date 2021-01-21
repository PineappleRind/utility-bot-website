import Command from "./Command";
const Commands = () => {
  return (
    <div className="section-container">
      <div className="commands-wrapper" style={{ margin: "4rem " }}>
        <Command bgc="dimgray" title="title">
          params:params; description:description; example:;0
        </Command>
        <Command title="lock">
          params: text channel; description: locks a text channel temporarily;
        </Command>
        <Command title="lock">
          params: text channel; description: locks a text channel temporarily;
        </Command>
      </div>
    </div>
  );
};

export default Commands;
