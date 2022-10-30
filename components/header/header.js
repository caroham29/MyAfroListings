import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./header.module.css";

const Header = () => {
	const router = useRouter();
	useEffect(() => {
		
	}, [])

	const aboutUs = () => {
		console.log("About us");
		router.push('/about');
	}

	return (
		<div className={`${styles.headerContainer}`}>
			<div className={styles.leftContainer}></div>
			<div className={styles.rightContainer}>
				<div onClick={() => aboutUs()} className={styles.rightItem}>About Us
					
				</div>
				<div className={styles.rightItem}>Business
					<a className={`${styles.toggle} dropdown-toggle`} href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
				</div>
				<div className={styles.rightItem}>Education
					<a className={`${styles.toggle} dropdown-toggle`} href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
				</div>
				<div className={styles.rightItem}>Housing
					<a className={`${styles.toggle} dropdown-toggle`} href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
				</div>
				<div className={styles.rightItem}>Travel
					<a className={`${styles.toggle} dropdown-toggle`} href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
				</div>
				<div className={styles.rightItem}>Join Now
				</div>
			</div>
		</div>
	)
}

export default Header
