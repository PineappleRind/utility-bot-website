const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-credits">
        <li>
          bot made by <span className="colored-text">flop#0001, pr#1951</span>{" "}
          and <span className="colored-text">StLVox™#4618</span>
        </li>
        <li>
          website made by <span className="colored-text">titongo#6811</span>
        </li>
      </ul>

      <ul className="footer-links">
        <li>utility bot</li>
        <li>
          <a href="https://twitter.com/utilitybot1" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/discordutilitybot" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="">Discord server</a>
        </li>
      </ul>
      <ul className="footer-links">
        <li>Github Repos</li>
        <li>
          <a
            href="https://github.com/discordutilitybot/utilitybot"
            target="_blank"
          >
            Bot repo
          </a>
        </li>
        <li>
          <a
            href="https://github.com/discordutilitybot/utility-bot-website"
            target="_blank"
          >
            website repo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
