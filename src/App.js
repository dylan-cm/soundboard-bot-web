import logo from './soundlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Soundboard Bot</h2>
        <h5>
          A Discord Bot that play sound effects right in your voice channels.
        </h5>
        <h6>Try typing <code>!joke</code> in a text channel when you are joined in a voice channel.</h6>
        <a
          className="App-link"
          href="https://discord.com/oauth2/authorize?client_id=840782180455809025&scope=bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add to your Discord!
        </a>
      </header>
    </div>
  );
}

export default App;
