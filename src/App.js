
import './App.css';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';

function App() {
  return (
    <div className="App">
      <CounterHook />
      <Counter />
    </div>
  );
}

export default App;
