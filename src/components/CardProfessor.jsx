function CardProfessor(props) {
  return (
    <div className="card-professor">
      <h3>{props.aluno.nome}</h3>
      <p>{props.aluno.email}</p>
      <p>CPF: {props.aluno.cpf}</p>
      <p>Disciplina: {props.professor.disciplina}</p>
      <p>{props.aluno.data_admissao}</p>
      <button onClick={function () { props.aoExcluir(props.professor.id); }}>Excluir</button>
    </div>
  );
}

export default CardProfessor;
