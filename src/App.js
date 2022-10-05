import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import SearchSection from './page/SearchSection/SearchSection';


function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/SearchSection' element={<SearchSection />} >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
