import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Business = () => {
	useEffect(() => {
	}, [])
	
	const profile = () => {
		console.log(" Profile view ");
	}

	const halp = () => {
		console.log(" Help and Support ");
	}


	return (
		<div className={`my-5`}>
			Business Listings...
		</div>
	)
}

export default Business
