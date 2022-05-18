import './App.css';
import Board from './components/Board/Board';

function App() {
  const board = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'] //9 boxes
  return (
    <>
      <Board board={board} onClick={null}/>
    </>
  );
}

export default App;
