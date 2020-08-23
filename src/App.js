import React,{useEffect,useState} from 'react';
import './App.css';
import Contenedor from './components/MessageContainer';
import Loading from './components/Loading';


function App() {
  const [view, setView] = useState("Loading");
  useEffect(() => {
    const timer = setTimeout(() => {
      setView("Chat");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  switch(view){
    case "Loading":
      return (
              <div className="App">
                <Loading text="Loading chat..." />
                <h6 className="author">Orlando Rodriguez</h6>
              </div>
             );
    case "Chat":
      return (
        <div className="App">
          <Contenedor/>
        </div>
      );
      default:
        return false;   
  }
 
}

export default App;
