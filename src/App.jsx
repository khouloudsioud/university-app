import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import img from './assets/IMG_5154.jpeg'
const etudiant = {
  nom:"sioud",
  prenom:'Kouloud',
  Email:'Kouloudsioud12345@gmail.com',
  Telephonne:'56701115',
  Filiére:'glsi',
  Annéeetude:'2 éme ',
  groupe:'A',
  ville:'Mahdia',
  image:'img',
}
function App() {

  return (
    <div class="card">
      <img src={img} alt="" />
      <h1>fiche d'etudiant</h1>
       <p><strong>nom & prenom:</strong>{etudiant.nom} {etudiant.prenom}</p>
       <p><strong>Email: </strong>{etudiant.Email}</p>
        <p><strong>Telephonne: </strong>{etudiant.Telephonne}</p>
         <p><strong>Filiére: </strong>{etudiant.Filiére}</p>
          <p><strong>Année d'etude: </strong>{etudiant.Annéeetude}</p>
           <p><strong>groupe: </strong>{etudiant.groupe}</p>
            <p><strong>ville: </strong>{etudiant.ville}</p>


    </div>
  )
      
}

export default App
