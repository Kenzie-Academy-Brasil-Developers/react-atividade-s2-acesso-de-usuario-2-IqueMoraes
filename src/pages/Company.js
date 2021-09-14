import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Company({ members }) {
  const params = useParams();
  const member = members.find((item) => item.id === params.id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}
