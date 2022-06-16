import './App.css';
import img from './media/pinacolada.jpg'

function App() {
  return (
    <div className='App'>
      <span className='Text'>Comming soon ... at its own pace</span>
      <img src={img} className='img' alt="pinacolada"/>
      <span className='Text'>You don't even know that you need it</span>
    </div>
  );
}

export default App;
