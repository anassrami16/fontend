import Up from './Up';
import Down from './Down';

import { useState, useRef} from "react";


export default function Inscription() {


  const inputNom = useRef("");
  const inputPrenom = useRef("");
  const inputEmail = useRef("");
  const inputConfEmail = useRef("");
  const inputMotDePasse = useRef("");
  const inputConfMotDePasse = useRef("");
  const inputTelephone = useRef("");
  const inputDateNaissance = useRef("");

  const [inputDateType, setInputDateType] = useState("text");
  const [st, setSt] = useState(null);


  function handle(e) {

    setSt(null);

    e.preventDefault();

    if ( 
        (inputNom.current.value == "") || (inputPrenom.current.value == "") || 
        (inputEmail.current.value =="") || (inputConfEmail.current.value == "") || 
        (inputMotDePasse.current.value == "") || (inputConfMotDePasse.current.value == "") || 
        (inputTelephone.current.value == "") || (inputDateNaissance.current.value == "") 
      )

      setSt("Veuillez remplir tous les champs.");


    else {

      if (inputEmail.current.value != inputConfEmail.current.value)
        setSt("Les deux emails que vous avez saisis ne sont pas indentiques.");

      else {

        if (inputMotDePasse.current.value != inputConfMotDePasse.current.value)
          setSt("Les deux mots de passe que vous avez saisis ne sont pas indentiques.");

        else {


            fetch('http://localhost:8080/createAccount', { 
                    'method': 'POST', 
                    'headers': { 'Content-Type': 'application/json'},
                    'body': JSON.stringify({ nom: inputNom.current.value,
                                            prenom: inputPrenom.current.value,
                                            email: inputEmail.current.value,
                                            confemail: inputConfEmail.current.value,
                                            password: inputMotDePasse.current.value,
                                            confmot_de_passe :inputConfMotDePasse.current.value,
                                            telephone: inputTelephone.current.value,
                                            dateNaissance: inputDateNaissance.current.value
                                          })
                  })
            .then(r =>  r.json())
            .then(data => setSt(data.message));









        }

      }





    }




    console.log("\n" + inputNom.current.value + inputPrenom.current.value + inputEmail.current.value + inputConfEmail.current.value + inputMotDePasse.current.value + inputConfMotDePasse.current.value + inputTelephone.current.value + inputDateNaissance.current.value);


  }


	return (
		<>

<Up />
<div class="block-31" style={{position: 'relative'}}>
    <div class="owl-carousel loop-block-31 ">
      <div class="block-30 block-30-sm item" style={{backgroundImage: "url('images/bg_2.jpg')"}} data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7 text-center">
              <h2 class="heading">Rejoingnez la communauté des acteurs bénévoles</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <div class="site-section">
    <form onSubmit={handle}>
    <div class="container">
      <div class="row block-9 mb-5">
        <div class="col-12">
          <h2 class="display-4 mb-3 text-center">Inscrivez-Vous</h2>
        </div>
      </div>

      { (st == "success") ?

      <div class="row block-9 mb-5 mx-4 text-center">
        <div class="col-12">
          <div class="alert alert-success text-center" role="alert">Votre demande d'inscription a été effectué avec succès. Vous pouvez désormais vous connecter à votre espace.</div>
        </div>
      </div>

      : (st != null) &&
        <div class="row block-9 mb-5 mx-4 text-center">
          <div class="col-12">
            <div class="alert alert-danger text-center" role="alert">{st}</div>
          </div>
        </div>

        

      }


      <div class="row block-9">
        <div class="col-md-6 pr-md-5">
            <div class="form-group">
              <input type="text" class="form-control px-3 py-3" placeholder="Nom" ref={inputNom}/>
            </div>
        
        </div>

        <div class="col-md-6">
            <div class="form-group">
              <input type="text" class="form-control px-3 py-3" placeholder="Prénom" ref={inputPrenom}/>
            </div>
            
        </div>
      </div>


      <div class="row block-9">
          <div class="col-md-6 pr-md-5">
            <div class="form-group">
              <input type="email" class="form-control px-3 py-3" placeholder="E-mail" ref={inputEmail}/>
            </div>
        
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <input type="email" class="form-control px-3 py-3" placeholder="Confirmer votre E-mail" ref={inputConfEmail}/>
            </div>
          </div>
      </div>

      <div class="row block-9">
        <div class="col-md-6 pr-md-5">
            <div class="form-group">
              <input type="password" class="form-control px-3 py-3" placeholder="Mot de passe" ref={inputMotDePasse}/>
            </div>
        
        </div>

        <div class="col-md-6">
            <div class="form-group">
              <input type="password" class="form-control px-3 py-3" placeholder="Confirmer votre mot de passe" ref={inputConfMotDePasse}/>
            </div>
        </div>
      </div>


    <div class="row block-9">
        <div class="col-md-6 pr-md-5">
            <div class="form-group">
              <input type="text" class="form-control px-3 py-3" placeholder="N° de téléphone" ref={inputTelephone}/>
            </div>
        
        </div>

        <div class="col-md-6">
            <div class="form-group">
              <input type={inputDateType} onFocus={() => setInputDateType('date')} onBlur={() => setInputDateType('text')} min="1900-01-01" max="2021-12-31" class="form-control px-3 py-3" placeholder="Date de naissance" ref={inputDateNaissance}/>
            </div>
        </div>
    </div>




















      <div class="row block-9 my-3">
        <div class="col-12">
          <div class="form-group text-center">
            <button type="submit" class="btn btn-primary py-3 px-5">CRÉER MON COMPTE</button>
          </div>
        </div>
      </div>


    </div>
  </form>
  </div>



<Down />



</>









		);

};
