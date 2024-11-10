import './App.css';
import { NavBar } from './components/NavBar';
import { ContactContainer } from './components/ContactContainer';
import { Section } from './components/Section';
import { WelcomePage } from './components/WelcomePage';
import { MeetMe } from './components/MeetMe';
import foto from './mi-foto.jpg';

import { Card } from './components/Card';

function App() {
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
      
  
      <Section 
        title='Contact me'
        component={ <ContactContainer /> }
      />

    </div>
  );
}

export default App;
