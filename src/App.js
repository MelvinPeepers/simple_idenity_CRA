import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

netlifyIdentity.init();

function App() {

  const openWidget = () => {
    netlifyIdentity.open('login');
  }


  return (
    <div className="App">
      <button className="btn-open" onClick={openWidget}>Open Widget</button>
    </div>
  );
}

export default App;
