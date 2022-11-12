import React, { useEffect, useState } from "react";
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

const Login = ({setShowLogin}) => {
	const { setFieldValue, values, submitForm } = useFormikContext() ?? {};
	const router = useRouter();
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

	return (
		<Formik
	        initialValues={{
	        	firstName: '',
	        	lastName: '',
	        	userName: '',
	        	email: '',
	        	password:'',
	        	confirm:'',
	      	}}
	      	onSubmit={async (values) => {
	        await new Promise((r) => setTimeout(r, 500));
	        alert(JSON.stringify(values, null, 2));
	      	}}
			render={({ setFieldValue, values, handleChange, touched, errors }) => (
			<div className={`${styles.loginContainer}`}>
				<div className={styles.loginBody}>
					<div className={styles.closeContainer}>
						<GrFormClose onClick={() => setShowLogin(false)}/>
					</div>
					<h3>Sign Up</h3>
					{ step === 1 && (
					<>
					  	<GoogleLogin
					  		onSuccess={(resp) => inheritData(resp, setFieldValue)}
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
				  	</>
					)}
					{ step === 2 && (
					<>
				      <Form>
						<TextField
				            fullWidth
				            id="userName"
				            name="userName"
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
						    sitekey="6Lc0rfwiAAAAABZCRu6RliDMY0PCaQW2exz1CKsq"
						    
						  />
				        <Button className={`mt-4`} color="primary" variant="contained" fullWidth type="button">
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
