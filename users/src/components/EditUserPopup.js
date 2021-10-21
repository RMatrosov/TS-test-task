import React, {useEffect, useState} from 'react';
import '../blocks/EditUserPopupStyles.css'

const EditUserPopup = ({isOpen, onClose, editedUser, onSave, onCardDelete}) => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userJob, setUserJob] = useState('');
  const [userId, setUserId] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userImg, setUserImg] = useState('');

  useEffect(() => {
    setUserName(editedUser.name);
    setUserEmail(editedUser.email);
    setUserJob(editedUser.about)
    setUserId(editedUser._id)
    setUserDate(editedUser.createdAt)
    setUserImg(editedUser.link)
  }, [editedUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      "name": userName,
      "email": userEmail,
      "about": userJob,
      "link": userImg,
    }
    onSave(editedUser._id, newUser)
  }

  return (
      <div className={`popup ${isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <form action="#" className="form" onSubmit={handleSubmit}>

            <button onClick={onClose} type="button"
                    className="close">Close
            </button>
            <div className="info__wrapper">
              <div className="group__wrapper">
                <div className="group">
                  <h5 className="form__heading">ID</h5>
                  <p className="form__value">{userId}</p>
                </div>
                <div className="group">
                  <h5 className="form__heading">Date</h5>
                  <p className="form__value">{userDate}</p>
                </div>
              </div>
              <img src={userImg} alt="" className="form__img"/>
            </div>
            <div className="group">
              <h5 className="form__heading">Name</h5>
              <input type="text" className="form__input" id="name"
                     value={userName || ''}
                     placeholder='send name'
                     onChange={(e) =>
                         setUserName(e.target.value)}
              />
            </div>
            <div className="group">
              <h5 className="form__heading">Email:</h5>
              <input type="text" className="form__input" id="email"
                     value={userEmail || ''}
                     placeholder=''
                     onChange={(e) =>
                         setUserEmail(e.target.value)}
              />
            </div>

            <div className="group">
              <h5 className="form__heading">Job</h5>

              <input type="text" className="form__input" id="Job"
                     value={userJob || ''}
                     placeholder=''
                     onChange={(e) =>
                         setUserJob(e.target.value)}
              />
            </div>
            <div className="group">
              <h5 className="form__heading">Link</h5>

              <input type="text" className="form__input" id="Link"
                     value={userImg || ''}
                     placeholder=''
                     onChange={(e) =>
                         setUserImg(e.target.value)}
              />
            </div>

            <div className="buttons__group">
              <button
                  type="submit" className="popup__button save">save
              </button>
              <button
                  onClick={() => onCardDelete(editedUser._id)}
                  type="button" className="popup__button delete">delete
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default EditUserPopup;
