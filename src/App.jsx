import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import studentImage from "./assets/IMG_5154.jpeg";

const etudiants = [
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
]

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </div>

      <footer />
    </>
  );
}

export default App;