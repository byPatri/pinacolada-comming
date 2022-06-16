import './App.css';
import img from './media/pinacolada.jpg'

function App() {
  return (
    <div className='App'>
      <span className='Text'>Comming soon ... at her own pace</span>
      <img src={img} height={450} width={650} alt="pinacolada"/>
      <span className='Text'>You don't even know that you need it</span>
    </div>
  );
}

export default App;
