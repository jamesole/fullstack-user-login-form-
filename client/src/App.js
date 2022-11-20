import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from "./components/Form";
import List from './components/List';

export default function App(props) {

  return(
    <Router>
      <div>
        <Routes>
          <Route path='/' element={
            <div>
              <Form />
              <List />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}
