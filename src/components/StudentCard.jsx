import { useState } from "react";

function StudentCard(props) {
  const ville = props.ville || "Non renseignée";

  // état : au départ les coordonnées sont masquées
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h1>Fiche étudiant</h1>
      <p><strong>Nom &amp; Prénom :</strong> {props.prenom} {props.nom}</p>

      {/* affichage conditionnel : email et téléphone ybanou ken coordonneesVisibles = true */}
      {coordonneesVisibles && (
        <>
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
        </>
      )}

      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>

      {/* ternaire : el texte mte3 el bouton yetbaddel */}
      <button onClick={basculerCoordonnees}>
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
      </button>

      <button>Contacter</button>

      <button onClick={() => props.onModifier(props.id)}>Modifier</button>
      <button onClick={() => props.onSupprimer(props.id)}>Supprimer</button>
    </div>
  );
}

export default StudentCard;