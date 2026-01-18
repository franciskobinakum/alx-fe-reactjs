import UserContext from './context/UserContext';
import UserDetails from './UserDetails';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <UserDetails />
    </UserContext.Provider>
  );
}

export default App;
