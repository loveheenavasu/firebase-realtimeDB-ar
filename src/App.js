import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate, } from "react-router-dom";
import 'w3-css/w3.css';

import { app } from './config/firebase-config';
import  { getAuth, onAuthStateChanged } from 'firebase/auth';

const Login = React.lazy(() => import('./component/Login'));
const Dashboard = React.lazy(() => import('./component/Dashboard'));
const RendererPanel = React.lazy(() => import('./component/ArComponent/RendererPanel'));

function App() {
    const auth = getAuth();
	const navigate = useNavigate();


	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user){
				navigate('/dashboard');
			}else{
				navigate('/');
			}
		});
	}, [])
	
	return (
		<>
			<div className='w3-red w3-xlarge w3-center w3-wide'>Start - Trek</div>
			<Routes>
				<Route exact path='/' element={ <Login /> }/>
				<Route exact path='/dashboard' element={<Dashboard /> }/>
				<Route path='/arvr' element={<RendererPanel /> }/>
			</Routes>
		</>
	);
}
export default App;
	

