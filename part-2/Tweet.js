const Tweet = ({ username, name, tweet, date }) => (
  <div className="tweet">
    <span className="name">{name}</span>
    <span className="username"> @{username} </span>
    <span className="date"> {date}</span>
    <p className="message"> {tweet} </p>
  </div>
);
