import './App.css';
import LogIn from "./components/LogIn";
import {useEffect, useState} from "react";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import Main from "./components/Main";
import AddUser from "./components/AddUser";
import {useDispatch} from "react-redux";
import {authorize} from "./api/auth";
import {fetchUsers, postUser} from "./redux/actions/actions";


function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setLoggedIn(true)
      history.push('/')
    }
  }, [history])


  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  function handleAuthorize(email, password) {
    authorize(email, password).then((data) => {
      if (data.token) {
        setLoggedIn(true)
        history.push('/')
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  function singOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }


  async function addUser(newUser) {
    dispatch(postUser(newUser))
    history.push('/')
  }

  return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Main singOut={singOut}/> :
                <Redirect to="/sign-in"/>}
          </Route>
          <Route exact path="/sign-in">
            <LogIn handleAuthorize={handleAuthorize}/>
          </Route>
          <Route exact path="/add-user">
            <AddUser addUser={addUser}/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
