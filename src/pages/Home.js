import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Home({ members, setMembers }) {
  const [newName, setNewName] = useState("");
  const [typeOfP, setTypeOfP] = useState("pf");

  function newMember() {
    if (newName !== "" && typeOfP !== undefined) {
      const newId = Number(members[members.length - 1].id) + 1;
      console.log(members[members.length - 1], newId);
      const newContact = { id: newId.toString(), name: newName, type: typeOfP };
      setMembers([...members, newContact]);
    }
  }

  return (
    <div>
      <ul>
        {members.map((item) =>
          item.type === "pf" ? (
            <li key={item.id}>
              <Link to={`/customer/${item.id}`}>{item.name}</Link>
            </li>
          ) : (
            <li key={item.id}>
              {" "}
              <Link to={`/company/${item.id}`}>{item.name}</Link>
            </li>
          )
        )}
      </ul>
      <div>
        <div>
          <input
            type="text"
            id="newName"
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <select id="typeOfP" onChange={(e) => setTypeOfP(e.target.value)}>
            <option value="pf">Pessoa Física</option>
            <option value="pj">Pessoa Jurídica</option>
          </select>
        </div>
        <div>
          <button onClick={() => newMember()}>Adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
