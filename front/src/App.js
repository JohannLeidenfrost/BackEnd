import './App.css';
import ShowContacts from './components/ShowContacts';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';

function App() {
  return (
    //uses BrowserRouter to make a single page app where only the components 
    //are rendered when necessary but not the whole page. 
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          {/* the path specifies how the url should be changde and 
          the element specifies which component should be rendered */}
          <Route exact path="/" element={<ShowContacts />} />
          <Route exact path="/addContact" element={<AddContact />} />
          <Route exact path="/:id/" element={<ContactDetail />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
