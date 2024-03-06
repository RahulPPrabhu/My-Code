import './App.css';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import NewAddUser from './components/NewAddUser';
import UserDetails from './components/UserDetails';
import ValidUser from './components/ValidUser';

function App() {
  return (
    <div className="App">
      <h1>Nexus</h1>
      <UserDetails />
      <ValidUser />
      <AddUser /> <br />
      <DeleteUser />
      <NewAddUser />
    </div>
  );
}

export default App;
