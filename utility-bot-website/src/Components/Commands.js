import { useState } from "react";
import Command from "./Command";

// to add the commands just create a new object with the commands properties
// if no example is provided it will throw u! + the name of the command
// command name and description are nec
const commands = [
  {
    name: "lock",
    params: "text channel",
    description: "locks a text channel",
    example: "u!lock #general",
  },
  {
    name: "ban",
    params: "user",
    description: "ban a user",
  },
];

const Commands = () => {
  const [dropIndex, setIndex] = useState(false);

  const changeIdx = (index) => {
    setIndex((prevIdx) => {
      return prevIdx === index ? false : index;
    });
  };

  return (
    <div className="section-container">
      <div className="commands-wrapper">
        <Command
          name="command name"
          params="params"
          description="description"
        ></Command>

        {commands.map((i, index) => (
          <Command
            key={i.name}
            changeIdx={() => changeIdx(index)}
            name={i.name}
            params={i.params}
            description={i.description}
            example={i.example}
            isIdx={dropIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Commands;
