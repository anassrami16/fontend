import Up from './Up';
import Down from './Down';

import { useState, useRef} from "react";

export default function Connecter() {


    const inputEmail = useRef("");
    const inputMotDePasse = useRef("");

    const [st, setSt] = useState({});


    function handle(e) {

        setSt({});

        e.preventDefault();

        if ((inputEmail.current.value == "") ||  (inputMotDePasse.current.value == ""))

            setSt({error: "Veuillez remplir tous les champs."});


        else {


            fetch('http://localhost:8080/auth', { 
                    'method': 'POST', 
                    'headers': { 'Content-Type': 'application/json'},
                    'body': JSON.stringify({ email: inputEmail.current.value, password: inputMotDePasse.current.value})
                  })
            .then(r =>  r.json())
            .then(data => {

              setSt(data);

              if (data.hasOwnProperty("token"))
                localStorage.setItem("token", data.token);


            });










    }




    console.log("\n" + inputEmail.current.value + inputMotDePasse.current.value);


  }




















	return (<>

    <Up />

		<div class="featured-section overlay-color-2" style={{backgroundImage: "url('images/bg_2.jpg')"}}>
    
    <div class="container pt-5 mt-5">
      <div class="row">

        <div class="col-md-6 mb-5 mb-md-0">
          <img src="images/bg_2.jpg" alt="Image placeholder" class="img-fluid"/>
        </div>

        <div class="col-md-6 pl-md-5">

          <div class="form-volunteer">
            
            <h2 class="mb-5">Connectez-vous à FinBénévolat</h2>


            {st.hasOwnProperty("token") &&

                <div class="alert alert-success text-center" role="alert">Success</div> }

            {st.hasOwnProperty("error") &&
                <div class="alert alert-danger text-center" role="alert">{st.error}</div> }



            <form onSubmit={handle}>
              <div class="form-group my-4">
                <input type="email" class="form-control py-2" id="email" placeholder="Adresse électronique" ref={inputEmail}/>
              </div>
              <div class="form-group my-4">
                <input type="password" class="form-control py-2" id="mot_de_passe" placeholder="Mot de passe" ref={inputMotDePasse}/>
              </div>
              <div class="form-group my-4">
                <button type="submit" class="btn btn-white px-5 py-2">Se Connecter</button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>

  </div>




<Down />



</>













		);

};