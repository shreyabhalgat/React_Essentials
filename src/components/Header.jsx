import Reactimg from "../assets/react-core-concepts.png";

const reactdescription = ["Fundamental", "Crucial", "Core"];
const genindex = () => {
  return Math.floor(Math.random() * 3);
};

export default function Header() {
  return (
    <header>
      <img src={Reactimg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactdescription[genindex()]} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}
