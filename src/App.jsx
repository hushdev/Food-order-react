import './App.scss';
import Header from './components/Layouts/Header/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Meals/>
    </div>
  );
}

export default App;
