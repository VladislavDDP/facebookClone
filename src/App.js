import style from './App.module.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';

const App = (props) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Navbar />
      <div className={style.content}>
        <Route exact path='/' component={Body} />
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/users' render={() => <Users usersPage={props.state.usersPage} />} />
        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} 
                                                      addPost={props.addPost}
                                                       />} />
        <Route path='/settings' component={Settings} />
      </div>
      
      <Footer />
    </div>
  )
}

export default App;
