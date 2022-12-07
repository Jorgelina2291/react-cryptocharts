
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ChartsPage from './pages/ChartsPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import styled
 from "styled-components";

const CryptoContainer = styled.div `
    display: "flex";
    flex-direction: column;
    margin: auto;
    align-content: center;
    min-height: 100vh;
    width: 80vw;
    
`

function App() {
  return (
    <CryptoContainer>
        <Router>
    <Header/>
    <Switch> // abarca las rutas
          <Route path ="/cryptocurrency/:id" component={ChartsPage }/>
          <Route to="/" component = { HomePage}/>
             
          
    </Switch>
   </Router>
    </CryptoContainer>
 
  );
}

export default App;
