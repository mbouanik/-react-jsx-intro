const App = () => {
  return (
    <div>
      <Tweet
        username="mace"
        name="Mace Windu"
        tweet="The Jedi council has reach a verdict"
        date={new Date().toDateString()}
      />
      <Tweet
        username="themandalorian"
        name="Din Djarin"
        tweet="The bounty is mine"
        date={new Date().toDateString()}
      />
      <Tweet
        username="vador"
        name="Darth Vador"
        tweet="I'm new to social media"
        date={new Date().toDateString()}
      />
    </div>
  );
};
