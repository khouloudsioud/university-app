import './App.css'
import img from './assets/IMG_5154.jpeg'
function Student(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />

      <h1>Fiche étudiant</h1>

      <p><strong>Nom &amp; Prénom : </strong>{props.prenom} {props.nom}</p>
      <p><strong>Email : </strong>{props.email}</p>
      <p><strong>Téléphone : </strong>{props.telephone}</p>
      <p><strong>Filière : </strong>{props.filiere}</p>
      <p><strong>Année d'étude : </strong>{props.anneeEtude}</p>
      <p><strong>Groupe : </strong>{props.groupe}</p>
      <p><strong>Ville : </strong>{props.ville}</p>

      <button>Contacter</button>
    </div>
  )
}

export default Student