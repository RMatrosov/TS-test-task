import React, {useState} from 'react';
import '../blocks/AddUserStyles.css'
import {Link} from "react-router-dom";

const AddUser = ({addUser}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (link !== '') {
      const newUser = {name, email, about, link}
      addUser(newUser)
    } else {
      const newUser = {name, email, about}
      addUser(newUser)
    }
  }

  return (
      <div className='add__user_wrapper'>
        <div className="popup__container">
          <form action="#" className="form" onSubmit={handleSubmit}>
            <h3 className="add__user_title">Create user</h3>
            <div className="group">
              <h5 className="form__heading">Name</h5>
              <input type="text" className="form__input" id="name"
                     value={name || ''}
                     placeholder='send name'
                     onChange={(e) =>
                         setName(e.target.value)}
              />
            </div>
            <div className="group">
              <h5 className="form__heading">Email:</h5>
              <input type="text" className="form__input" id="email"
                     value={email || ''}
                     placeholder='send email'
                     onChange={(e) =>
                         setEmail(e.target.value)}
              />
            </div>

            <div className="group">
              <h5 className="form__heading">Job</h5>

              <input type="text" className="form__input" id="Job"
                     value={about || ''}
                     placeholder='send job'
                     onChange={(e) =>
                         setAbout(e.target.value)}
              />
            </div>
            <div className="group">
              <h5 className="form__heading">Link</h5>

              <input type="text" className="form__input" id="Link"
                     value={link || ''}
                     placeholder='send link'
                     onChange={(e) =>
                         setLink(e.target.value)}
              />
            </div>

            <div className="buttons__group">
              <button
                  type="submit" className="popup__button save">save
              </button>
              <Link to='/' className="add">
                <button
                    type="button" className="popup__button delete">back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddUser;
