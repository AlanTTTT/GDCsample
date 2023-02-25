import React, {useState} from 'react';
import {db} from '../firebase-config';
import {collection,addDoc} from 'firebase/firestore';



const AddSubscribe = () => {
    const [newEmail, setNewEmail] = useState("");
    const subscribersCollectionRef = collection(db, "subscribers");
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    
      const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
          setError('Email is invalid');
        } else {
          setError(null);
        }
    
        setNewEmail(event.target.value);
      };


    const createEmail = async () => {
        await addDoc(subscribersCollectionRef, {email: newEmail});
        setError('Thank you.');
    }
    
    
    
  return (
    <div>
        <input onChange={handleChange} type="email" name="email" className="form-control" placeholder="Subscribe Our Newsletter" value={newEmail} />
        <button onClick={createEmail} type="submit"><i className="fa fa-long-arrow-right" /></button>
        {error && <p style={{color: 'yellow'}}>{error}</p>}            
    </div>
  )
}

export default AddSubscribe