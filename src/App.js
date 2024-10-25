import './App.css';
import { NavBar } from './components/NavBar';
import { ContactContainer } from './components/ContactContainer';
import { Section } from './components/Section';
import { WelcomePage } from './components/WelcomePage';


function App() {
  return (
    <div className="App">
      
    <WelcomePage />

    <NavBar />

    
    

    <Section 
      title='Contact me'
      component={ <ContactContainer /> }
    />

    </div>
  );
}

export default App;
