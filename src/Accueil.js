import Up from './Up';
import Down from './Down';

function Accueil() {

return (
<>
<Up />

<div class="block-31" style={{position: 'relative'}}>
    <div class="owl-carousel loop-block-31 ">
      <div class="block-30 block-30-sm item" style={{backgroundImage: 'url(/images/bg_1.jpg)'}} data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="heading mb-5">Plateforme Gratuite pour le Financement des Projets de Charité</h2>
              <p style={{display: 'inline-block'}}><a href="https://vimeo.com/channels/staffpicks/93951774"  data-fancybox class="ftco-play-video d-flex"><span class="play-icon-wrap align-self-center mr-4"><span class="ion-ios-play"></span></span> <span class="align-self-center">En savoir plus</span></a></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
  <div class="site-section section-counter">
    <div class="container">
      <div class="row">
        <div class="col-md-6 pr-5">
          <div class="block-48">
              <span class="block-48-text-1">Notre Objectif</span>
              <div class="block-48-counter ftco-number" data-number="1500">0</div>
              <span class="block-48-text-1 mb-4 d-block">Projets à financer pour 2022</span>
              <p class="mb-0"><a href="#" class="btn btn-white px-3 py-2">En savoir plus</a></p>
            </div>
        </div>
        <div class="col-md-6 welcome-text">
          <h2 class="display-4 mb-3">Qui sommes nous ?</h2>
          <p class="lead">FinBénévolat est une plateforme entièrement gratuite pour tout le monde. Le but est de pouvoir rassembler tout d'abord les porteurs des projets bénévoles et innovant ainsi que les personnes qui souhaitent financer et faire des dons au profit de ces projets.</p>
          <p class="mb-4">Notre plateforme ambitieuse est une tentative de digitalisation du domaine du bénévolat dans notre pays le Maroc</p>
        </div>
      </div>
    </div>
  </div>

  <div class="site-section border-top">
    <div class="container">

      <div class="row">
        <div class="col-12">
          <h2 class="display-4 mb-3 text-center">Comment ça marche ?</h2>
        </div>
      </div>

      <br /><br /><br />

      <div class="row">

        <div class="col-md-4">
          <div class="media block-6">
            <div class="icon"><span class="ion-ios-contacts"></span></div>
            <div class="media-body">
              <h3 class="heading">Inscrivez-Vous</h3>
              <p>Créez un compte dans notre plateforme afin de pouvoir profiter de notre service.</p>
              <p><a href="#" class="link-underline">En savoir plus</a></p>
            </div>
          </div>     
        </div>

        <div class="col-md-4">
          <div class="media block-6">
            <div class="icon"><span class="ion-ios-bulb"></span></div>
            <div class="media-body">
              <h3 class="heading">Créez votre demande</h3>
              <p>Créez facilement votre demande de financement de votre projet de bénévolat et puis publiez-là dans notre plateforme.</p>
              <p><a href="#" class="link-underline">En savoir plus</a></p>
            </div>
          </div>  
        </div>

        <div class="col-md-4">
          <div class="media block-6">
            <div class="icon"><span class="ion-ios-cash"></span></div>
            <div class="media-body">
              <h3 class="heading">Attendre</h3>
              <p>Votre demande sera visible à tous les visiteurs ce qui augmentera donc la chance d'attirer plusieurs donnateurs qui vont financer votre projet.</p>
              <p><a href="#" class="link-underline">En savoir plus</a></p>
            </div>
          </div> 
        </div>

      </div>
    </div>
  </div>

<div class="featured-section overlay-color-2" style={{backgroundImage: "url(/images/bg_3.jpg)"}}>
    
    <div class="container">
      <div class="row">

        <div class="col-md-6">
          <img src="images/bg_3.jpg" alt="Image placeholder" class="img-fluid" />
        </div>

        <div class="col-md-6 pl-md-5">
          <span class="featured-text d-block mb-3"></span>
          <h2>Bénévolat sociale au Maroc. Notre société a besoin de plusieurs initiatives</h2>
          <p class="mb-3">Plusieurs études ont été faites et qui montrent le besoin urgent des initiatives bénévoles aussi bien qu'au milieu urbaine qu'au milieu rurale. La société marocaine doit adopter rapidement la culture de bénévolat pour faire la lutte contre la pauvreté et la marginalisation sociale.</p>
          <span class="fund-raised d-block mb-5">Notre plateforme encourage les initiatives bénévoles.</span>

          <p><a href="#" class="btn btn-success btn-hover-white py-3 px-5">Découverez notre plateforme</a></p>
        </div>
        
      </div>
    </div>

  </div>

  <Down />


</>





);}

export default Accueil;