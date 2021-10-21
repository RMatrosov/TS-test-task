import React from 'react';
import '../blocks/UserStyles.css'


const User = ({user, onCardEdit}) => {

  function handleEditClick() {
    onCardEdit(user)
  }

  const regExp = /[0-9]{1,4}\-[0-9]{1,3}\-[0-9]{1,3}/g;

  const createDate = user.createdAt.match(regExp)

  return (
      <div className='user'>
        <div className="user__info">
          <div className="user__text id">{user._id}</div>
          <div className="user__text createdAt">{createDate}</div>
          <div className="user__text name">{user.name}</div>
          <div className="user__text about">{user.about}</div>
          <div className="user__text email">{user.email}</div>
          <div className="button__group">
            <button
                onClick={handleEditClick}
                className="user__btn">edit
            </button>
          </div>
        </div>
      </div>
  );
};

export default User;
