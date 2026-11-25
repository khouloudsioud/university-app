import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import studentImage from "./assets/IMG_5154.jpeg";
import StudentForm from "./components/StudentForm.jsx";

// données initiales (barra mel App, ykounou valeur de départ mte3 l'état)
const etudiantsInitiaux = [
  {
    id: 1,
    prenom: "khouloud",
    nom: "sioud",
    email: "khouloudsioud12345@gmail.com",
    telephone: "+216 56701115",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: studentImage,
  },
  {
    id: 2,
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
    image: studentImage,
  },
  {
    id: 3,
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    image: studentImage,
  },
];

function App() {
  // états de visibiliter
  const [etudiants, setEtudiants] = useState(etudiantsInitiaux);
  const [recherche, setRecherche] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);
 // AJOUTER
function ajouterEtudiant(nouvelEtudiant) {
  const etudiantAvecId = {
    ...nouvelEtudiant,
    id: Date.now(),
  };
  setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  setFormVisible(false);
}
  // SUPPRIMER
 function supprimerEtudiant(id) {
  setEtudiants(etudiants.filter((e) => e.id !== id));
  if (etudiantAModifier && etudiantAModifier.id === id) {
    setEtudiantAModifier(null);
    setFormVisible(false);
  }
}

  // MODIFIER
function modifierEtudiant(id) {
  const etudiant = etudiants.find((e) => e.id === id);
  setEtudiantAModifier(etudiant);
  setFormVisible(true);
}
function enregistrerModification(etudiantModifie) {
  setEtudiants((anciensEtudiants) =>
    anciensEtudiants.map((e) =>
      e.id === etudiantAModifier.id
        ? { ...etudiantModifie, id: e.id } 
        : e
    )
  );
  setEtudiantAModifier(null);
  setFormVisible(false);
}

  // FILTRER
  const texte = recherche.toLowerCase();
  const etudiantsFiltres = etudiants.filter(
    (e) =>
      e.nom.toLowerCase().includes(texte) ||
      e.prenom.toLowerCase().includes(texte) ||
      e.filiere.toLowerCase().includes(texte)
  );

  return (
    <>
      <Header />
      <Navbar />

      <div className="actions">
        <button onClick={() => {
          setEtudiantAModifier(null);
          setFormVisible(!formVisible);
        }}
      >+ Ajouter un étudiant</button>
        <input
          type="text"
          placeholder="Rechercher (nom, prénom, filière)..."
          value={recherche}
          onChange={(event) => setRecherche(event.target.value)}
        />
      </div>
      {formVisible && (
      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={enregistrerModification}
          />
    )}


      <div className="container">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            id={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;