<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> a7a811711e0bfa1953e859b862ad9a06a0b6cd16
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import styles from "./login.module.css";
import { GrFormClose } from 'react-icons/gr';
import jwt_decode from "jwt-decode";
import { useFormikContext, Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReCAPTCHA from "react-google-recaptcha";
import { saveNewUser } from "../../../services/userServices";
import { useDispatch, useSelector } from 'react-redux';

const Login = ({setShowLogin}) => {
	const { setFieldValue, values, submitForm } = useFormikContext() ?? {};
	const router = useRouter();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const [showCapErr, setShowCapErr] = useState(false);
	const captchaRef = useRef(null)
	const [hoverItem, setHoverItem] = useState(null);
	const [step, setStep] = useState(1);
	useEffect(() => {
	}, []);
 	
	const inheritData = (data, updateMethod) => {
		var dataObj = jwt_decode(data.credential);
		updateMethod('email', dataObj.email);
		updateMethod('userName', dataObj.name);
		updateMethod('picture', dataObj.picture);
	const [hoverItem, setHoverItem] = useState(null);
	const [step, setStep] = useState(1);
	useEffect(() => {
		//console.log(useFormikContext)
	}, []);

	// const formik = useFormik({
	//     initialValues: {
	//       email: 'foobar@example.com',
	//       password: 'foobar',
	//     },
	//     validationSchema: validationSchema,
	//     onSubmit: (values) => {
	//       alert(JSON.stringify(values, null, 2));
	//     },
	// });
 	
	const inheritData = (data, updateMethod) => {
		var dataObj = jwt_decode(data.credential);
		console.log(dataObj, " OK SIR");
		updateMethod('email', dataObj.email);
		updateMethod('userName', dataObj.name);
		setStep(2);
	}

	const handleSubmit = () => {

	}
	const saveUser = async ({ firstName, lastName, userName, email, password, picture }) => {
		dispatch({
			  type: 'setUser',
			  user: { firstName, lastName, userName, email, password, picture },
		})
		setShowLogin(false);
		//let user = await saveNewUser({ firstName, lastName, userName, email, password, picture });
		// if (user.id) {
		// 	// Saved successfully
		// 	dispatch({
		// 	  type: 'setUser',
		// 	  user,
		// 	})
		// } else {

		// }
		// console.log(data, " Saved ");
	}

	return (
		<Formik
	        initialValues={{
	        	firstName: '',
	        	lastName: '',
	        	userName: '',
	        	email: '',
	        	password:'',
	        	picture: '',
	      	}}

	      	onSubmit={async (values) => {
	      		// Verify captcha value then save
	      		const token = captchaRef.current.getValue();
	      		if (!token) {
	      			setShowCapErr(true);
	      		} else {
	      			saveUser(values);
	      		}
	      	}}
			render={({ setFieldValue, values, handleChange, touched, errors }) => (
			<div className={`${styles.loginContainer}`}>
				<div className={styles.loginBody}>
					<div className={styles.closeContainer}>
						<GrFormClose onClick={() => setShowLogin(false)}/>
					</div>
					<h3 className={`mb-3`}>Sign Up</h3>
					{ step === 1 && (
					<>
						<div className={`my-5`}>
						  	<GoogleLogin
						  		onSuccess={(resp) => inheritData(resp, setFieldValue)}
						  		width='300'
						  		text='continue_with'
						  		shape='pill'
						  		onError={() => {
						    		console.log('Login Failed');
						  		}}
							/>
						</div>
						<div className={styles.orContainer}>
							<span className={styles.orContainerBorder}></span>
							<span className={styles.orItem}>OR</span>
							<span className={styles.orContainerBorder}></span>
						</div>
						<Button as="a"
							onClick={() => setStep(2)}
							color="primary" variant="contained" fullWidth>
					   		CONTINUE
					  	</Button>
				  	</>
					)}
					{ step === 2 && (
					<>
				      <Form >
						<TextField
				            fullWidth
				            id="userName"
				            name="userName"
				            required
				            label="Display name"
				            className={`my-2`}
				            value={values.userName}
				            onChange={handleChange}
				            error={touched.userName && Boolean(errors.userName)}
				            helperText={touched.userName && errors.userName}
				        />
				        <TextField
				        	className={`my-2`}
				        	fullWidth
				          	id="email"
				          	required
				          	name="email"
				          	label="Email"
				          	value={values.email}
				          	onChange={handleChange}
				          	error={touched.email && Boolean(errors.email)}
				          	helperText={touched.email && errors.email}
				        />
				        <TextField
				        	className={`my-2`}
				          	fullWidth
				          	id="password"
				          	required
				          	name="password"
				          	label="Password"
				          	type="password"
				          	value={values.password}
				          	onChange={handleChange}
				          	error={touched.password && Boolean(errors.password)}
				          	helperText={touched.password && errors.password}
				        />
						<ReCAPTCHA
						  	className={`mt-3`}
						  	onChange={(val) => setShowCapErr(!val)}
						    sitekey="6Lc0rfwiAAAAABZCRu6RliDMY0PCaQW2exz1CKsq"
						    ref={captchaRef}
						/>
						{ showCapErr && ( <small>CAPTCHA response required.</small> ) }
				        <Button className={`mt-5`} color="primary" variant="contained" fullWidth type="submit">
				          Sign up
				        </Button>
				      </Form>
				  	</>
					)}
				</div>
			</div>
		)}/>
	)
}

export default Login
