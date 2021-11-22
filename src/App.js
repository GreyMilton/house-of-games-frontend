import Header from './components/Header';
import './App.css';
import DisplayReviews from './components/DisplayReviews';
import SelectReviews from './components/SelectReviews';

function App() {
  return (
    <div className="App">
      <Header />
      <SelectReviews />
      <DisplayReviews />
    </div>
  );
}

export default App;
