
import './App.css';
import config from './data';
import Panel from './component/panel';


function App() {
  return (
    <div className="app">
      <Panel {...config}></Panel>
    </div>
  );
}

export default App;
