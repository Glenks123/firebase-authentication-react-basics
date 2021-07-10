import React, { useState, useEffect } from 'react';
import Guide from './Guide';
import { db, auth } from '../firebase';

const Guides = () => {
  const [infoState, setInfoState] = useState([]);
  const [userAuth, setUserAuth] = useState();
  useEffect(() => {
    db.collection('guides')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setInfoState(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  });

  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <ul className="collapsible z-depth-0 guides" style={{ border: 'none' }}>
        {userAuth ? (
          infoState.map(({ id, data: { title, content } }) => {
            <Guide key={id} title={title} content={content} />;
          })
        ) : (
          <center>
            <h3>Login to view users.</h3>
          </center>
        )}
      </ul>
    </div>
  );
};

export default Guides;
