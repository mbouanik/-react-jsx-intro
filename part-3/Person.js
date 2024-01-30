const Person = ({ name, age, hobbies }) => {
  const lenName = name.length;
  const hob = hobbies.map((item) => <li> {item} </li>);
  return (
    <div>
      <p> Learn some information about this person </p>
      <p> {name.slice(0, 5)} </p>
      <h3> {age > 18 ? "please go vote!" : "you must be 18"}</h3>
      <ul>{hob}</ul>
    </div>
  );
};
