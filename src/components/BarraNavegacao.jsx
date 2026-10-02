import { Link } from "react-router-dom";

function BarraNavegacao() {
  return (
    <nav className="barra-navegacao">
      <Link to="/">Início</Link>
      <Link to="/alunos">Alunos</Link>
      <Link to="/professores">Professores</Link>
      <Link to="/cadastraraluno">Cadastrar Aluno</Link>
      <Link to="/cadastrarprofessor">Cadastrar Professor</Link>
    </nav>
  );
}

export default BarraNavegacao;
