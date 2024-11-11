import './App.css';
import { NavBar } from './components/NavBar';
import { ContactContainer } from './components/ContactContainer';
import { Section } from './components/Section';
import { WelcomePage } from './components/WelcomePage';
import { MeetMe } from './components/MeetMe';
import foto from './mi-foto.jpg';


import foto1 from './luxurycars.jpg';
import foto2 from './soutofrutasyverduras.jpg'
import foto3 from './electronicarts.jpg'


import { Card } from './components/Card';
import { Catalog } from './components/Catalog';

function App() {

  const array = [
    {
      key: 1,
      img: foto1,
      labels: ['HTML', 'CSS'],
      title: "Luxury Premium Cars",
      text: 'Concesionaria de compra y alquiler de una amplia gama de vehiculos de lujos, locales y extranjeros en la ciudad de Miami.',
      link: 'https://carstorepremium.vercel.app/'
    },
    {
      key: 2,
      img: foto2,
      labels: ['HTML', 'CSS'],
      title: "Souto Frutas y Verduras",
      text: 'Comercio de alimentos naturales, vegetales, frutas y otros productos extras como productos para el asador y postres. Envios a domicilio.',
      link: 'https://soutofrutasyverduras.vercel.app/'
    },
    {
      key: 3,
      img: foto3,
      labels: ['HTML', 'CSS'],
      title: "Electronic Arts",
      text: 'Landing page de la empresa Estados Unidense desarrolladora de videos juegos y servicios en la nube.',
      link: 'https://challengelandingpage.vercel.app/'
    }
  ]


  return (
    <div className="App">
      <WelcomePage />

      <NavBar />

      <MeetMe 
        img= {foto}
        name='Alex Nahuel Echeverria'
        description= 'Desarollador Full-Stack'
      />

      <Card 
        img = "https://i.blogs.es/7f0255/new_ferrari_supercar_media_-4/840_560.jpeg"
        labels= { [ 'javascript', 'css' ] }
        title= "Ferrari"
        text= 'Text de prueba'
      />


      <Catalog 
        items = { array }
      
      />
      
  
      <Section 
        title='Contact me'
        component={ <ContactContainer /> }
      />

    </div>
  );
}

export default App;
