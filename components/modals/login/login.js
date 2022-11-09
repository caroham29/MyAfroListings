import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import styles from "./login.module.css";
import Button from 'react-bootstrap/Button';
import { GrFormClose } from 'react-icons/gr';

const Login = ({setShowLogin}) => {
	const router = useRouter();
	const [hoverItem, setHoverItem] = useState(null);
	useEffect(() => {
		
	}, [])


	return (
		<div className={`${styles.loginContainer}`}>
			<div className={styles.loginBody}>
				<div className={styles.closeContainer}>
					<GrFormClose onClick={() => setShowLogin(false)}/>
				</div>
				<h3>Sign Up</h3>
			  	<GoogleLogin
			  		onSuccess={credentialResponse => {
			    		console.log(credentialResponse);
			    		var data = jwt_decode(credentialResponse.credential);
			    		console.log(data, " OK SIR")
			  		}}
			  		width='300'
			  		text='continue_with'
			  		shape='pill'
			  		onError={() => {
			    		console.log('Login Failed');
			  		}}
				/>
				<div className={styles.orContainer}>
					<span className={styles.orContainerBorder}></span>
					<span className={styles.orItem}>OR</span>
					<span className={styles.orContainerBorder}></span>
				</div>
				<Button as="a"
					className={styles.fullWidth}
					variant="primary">
			   		CONTINUE
			  	</Button>
			</div>
		</div>
	)
}

export default Login
