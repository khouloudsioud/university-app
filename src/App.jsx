import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import img from './assets/IMG_5154.jpeg'

import Student from './Student.jsx'
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
    image: img,
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
    image: img,
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
    ville: "Mahdia",
    image: img,
  },
]

function App() {
  return (
    <div className="container">
      {etudiants.map((etudiant) => (
        <Student
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
  )
}

export default App