import React, { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./create-listings.module.css";
import { GrFormClose } from 'react-icons/gr';
import { useFormikContext, Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

const CreateListings = () => {
	const { setFieldValue, values, submitForm } = useFormikContext() ?? {};
	const router = useRouter();
	const dispatch = useDispatch();
	const [loginErr, setLoginErr] = useState(false);
	const user = useSelector((state) => state.user);
	const [showCapErr, setShowCapErr] = useState(false);
	const captchaRef = useRef(null)
	const [hoverItem, setHoverItem] = useState(null);
	const [step, setStep] = useState(1);



	useEffect(() => {
		console.log(" Inside use effect", values);
		setTimeout(() => {
			const ref = document.getElementById('title');
			ref.focus();
		}, 500)
	}, []);

	const ListingsSchema = Yup.object().shape({
	   	title: Yup.string()
	   		.min(3, "Titile must be at least 4 characters")
	   		.max(100, "100 character limit")
	   		.required('Required'),
	  	description: Yup.string().required('Required'),
	});

	const close = () => {
		dispatch({
			type: 'setShowNewListing',
			showNewListing: false,
		})
	}
 	

	return (
		<div className={`${styles.loginContainer}`}>
			<div className={styles.createListingModalContainer}>
				<div className={styles.closeContainer}>
					<GrFormClose onClick={() => close()}/>
				</div>
				<div className={`${styles.formContainer}`}>
				<h2 className={`mb-1`}> Create Listing </h2>
				<Formik
			        initialValues={{
			        	title: '',
			        	description:'',
			        	picture: '',
			      	}}
			      	validationSchema={ListingsSchema}
			      	onSubmit={async (values) => {
			      		console.log(values)
			      	}}>
					{({ setFieldValue, values, handleChange, touched, errors }) => (
						<Form >
						        <TextField
						        	className={`my-2`}
						        	fullWidth
						          	id="title"
						          	required
						          	variant="standard"
						          	name="title"
						          	label="Title"
						          	value={values.title}
						          	onChange={handleChange}
						          	error={touched.title && Boolean(errors.title)}
						          	helperText={touched.title && errors.title}
						        />
						        <TextField
						        	className={`my-2`}
						          	fullWidth
						          	id="description"
						          	required
						          	name="description"
						          	label="Description"
						          	type="description"
						          	value={values.description}
						          	onChange={handleChange}
						          	multiline
								  	rows={4}
								  	maxRows={7}
						          	error={touched.description && Boolean(errors.description)}
						          	helperText={touched.description && errors.description}
						        />
						        <Button className={`mt-5 ${styles.signInBtn}`} color="primary" variant="contained" fullWidth type="submit">
						          Submit
						        </Button>
					  	</Form>
					  	)}
				  	</Formik>
				</div>
			</div>
		</div>
	)
}

export default CreateListings
