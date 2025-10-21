import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./B300_Bottom.jpg" alt="computer"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Computer Man</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure
        nulla officiis. Asperiores doloribus quia doloremque sunt minus
        similique officia. Illo dolores eum nostrum nihil itaque hic explicabo,
        impedit et.
      </p>
    </div>
  );
}

function SkillList() {
  return <p>dummy text</p>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
