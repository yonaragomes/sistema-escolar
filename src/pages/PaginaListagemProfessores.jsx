import ListaProfessores from "../components/ListaProfesssores";

function PaginaListagemProfessores(props) {
  return (
    <div className="pagina-listagem">
      <h2>Professores cadastrados</h2>
      <ListaProfessores professores={props.professores} aoExcluir={props.aoExcluir} />
    </div>
  );
}

export default PaginaListagemProfessores;
