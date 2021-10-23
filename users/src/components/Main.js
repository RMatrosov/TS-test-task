import React, {useMemo, useState} from 'react';
import '../blocks/MainStyles.css'
import User from "./User";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Loading from "./Loading";
import EditUserPopup from "./EditUserPopup";
import {deleteUserServer, pathUser, setEditedUsers, setIsOpen} from "../redux/actions/actions";


const Main = ({singOut}) => {

  const [search, setSearch] = useState('');
  const dispatch = useDispatch()
  const users = useSelector(state => state.userReducer.users)
  const isLoaded = useSelector(state => state.userReducer.isLoaded)
  const isOpen = useSelector(state => state.userReducer.isOpen)
  const editedUser = useSelector(state => state.userReducer.editedUser)

  async function onCardDelete(id) {
    if (window.confirm("Delete?")) {
      dispatch(deleteUserServer(id))
      dispatch(setIsOpen(false))
    }
  }

  function onCardEdit(user) {
    dispatch(setEditedUsers(user))
    dispatch(setIsOpen(true))
  }

  async function handleSave(id, newUser) {
    dispatch(pathUser(id, newUser))
    dispatch(setIsOpen(false))
  }

  const dataSearch = useMemo(() => {
    return users.filter((item) => {
      return Object.keys(item)
          .some((key) =>
              (item[key]).toString().toLowerCase().includes(search.toString().toLowerCase())
          )
    })
  }, [search, users]);

  return (
      <div className='main__wrapper'>
        <EditUserPopup
            onCardDelete={onCardDelete}
            onSave={handleSave}
            editedUser={editedUser}
            onClose={() => dispatch(setIsOpen(false))}
            isOpen={isOpen}/>
        <div className="input__block">
          <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search…'
              className='main__input' type="text"/>
          <button
              onClick={singOut}
              className="out">out
          </button>
          <Link to='/add-user' className="add">
            <button className="add__btn">add user</button>
          </Link>
        </div>
        <div className="users__title">
          <div className="users__id text">№</div>
          <div className="users__date text">Date</div>
          <div className="users__name text">Name</div>
          <div className="users__job text">Job</div>
          <div className="users__email text">Email</div>
        </div>
        <div className="user__wrapper">
          {isLoaded ? dataSearch.map((user, i) => <User
              index={i}
              onCardEdit={onCardEdit}
              onCardDelete={onCardDelete}
              user={user} key={user._id}/>) : <Loading/>}

        </div>
      </div>
  );
};

export default Main;
