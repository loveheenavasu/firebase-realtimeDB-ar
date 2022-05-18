import React from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import dbReference from '../config/firebase-config';
const PollComponent = React.lazy(() => import('./PollComponent'));

const Dashboard = () => {
    const auth = getAuth();
    const navigate = useNavigate();

	const handleSignout = () => {
        signOut(auth).then(() => {
            navigate('/');
          }).catch((error) => {
            console.log("Error occured in signing out! Try Again...\n Have a look about error message here ", error);
          });
    }
    return (
        <>
            <div className="w3-panel">
                <span style={{ float: 'left' }}>
                    <h3>Welcome, {auth?.currentUser?.displayName}! </h3>
                </span>

                <span style={{ float: 'right' }}>
                    <button className='w3-button w3-text-pale-red w3-border w3-round w3-sand w3-text-red' onClick={handleSignout}>Sign Out</button>
                </span>
            </div>

            <hr />
            <button className='w3-button w3-border w3-round-large w3-pale-green w3-text-green w3-border-green' onClick={() => navigate('/arvr')}>Launch AR</button>
            
            <br />
            <PollComponent />
        </>
    )
}
export default Dashboard;