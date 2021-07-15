import './App.css';
import Profile from './Profile/Profile'
import img from './profile.jpg'
function App() {
  const alertfnc = (fullname) => {
    alert(fullname)
  }
  
  return (
    <div className="App">
    <Profile fullName='mootez sighari' bio='montage video'profession='esefsdf' alert={alertfnc}><img src={img} alt='imgprofile'/></Profile>
    
    </div>
  );
}

export default App;
