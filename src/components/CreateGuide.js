import React, { useState } from 'react';
import { db } from '../firebase';
import firebase from 'firebase';

const CreateGuide = () => {
  const [newGuide, setNewGuide] = useState({
    title: '',
    content: '',
  });

  const guideHandler = (e) => {
    setNewGuide({
      ...newGuide,
      [e.target.name]: e.target.value,
    });
  };

  const createGuide = (e) => {
    e.preventDefault();
    const { title, content } = newGuide;
    db.collection('guides')
      .add({
        title: title,
        content: content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('Successfully addded new guide');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <center>
      <div id="modal-create" style={{ width: '50%', marginTop: '50px' }}>
        <div className="modal-content">
          <h4>Create Guide</h4>
          <br />
          <form id="create-form">
            <div className="input-field">
              <input
                type="text"
                id="title"
                name="title"
                onChange={guideHandler}
                required
              />
              <label htmlFor="title">Guide Title</label>
            </div>
            <div className="input-field">
              <textarea
                id="content"
                className="materialize-textarea"
                name="content"
                onChange={guideHandler}
                required
              ></textarea>
              <label htmlFor="content">Guide Content</label>
            </div>
            <button
              className="btn yellow darken-2 z-depth-0"
              onClick={createGuide}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </center>
  );
};

export default CreateGuide;
