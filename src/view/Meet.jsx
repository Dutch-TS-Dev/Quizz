import { Buttons } from "../components/Buttons/Index";
import users from "./users";

const colors = {
  orange: "#EE6C02",
  purple: "#AB47BB",
  green: "#689F37",
  brown: "#8C6E63",
};

const getRandomIndex = () =>
  Math.floor(Math.random() * Object.keys(colors).length);

console.log("getRandomIndex()");
console.log(getRandomIndex());
console.log("");

export default function Meet() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",

        flexWrap: "wrap",
      }}
    >
      {users.map((u, i) => (
        <div
          style={{
            flexBasis: "25%",
            border: "2px dotted cyan",
            height: "35vh",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path>
            <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path>
          </svg>
          <p
            style={{
              display: "inline",
              padding: "30px",
              background: Object.values(colors)[getRandomIndex()],
              borderRadius: "50%",
            }}
          >
            {u.name[0]}
          </p>
        </div>
      ))}
      <Buttons />
    </div>
  );
}
