export default function CoreConcepts(props) {
  return (
    <li>
      <h1>{props.title}</h1>
      <img src={props.image} alt="" />
      <p>{props.description}</p>
    </li>
  );
}
