import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./header.module.css";

const Header = () => {
	const router = useRouter();
	const [hoverItem, setHoverItem] = useState(null);
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
				<div onClick={() => aboutUs()} className={styles.rightItem}>Home
					
				</div>
				<div className={styles.rightItem}>Business</div>
				<div className={styles.rightItem} onMouseOver={() => setHoverItem('News')}  onMouseLeave={() => setHoverItem(null)}>
					<div>News</div>
					{hoverItem === "News" && (
					<div className={styles.hoverOptionsContainer}>
						<div>Properties for Rent</div>
						<div>Properties for Sale</div>
					</div>
					)}
				</div>
				<div className={styles.rightItem} onMouseOver={() => setHoverItem('Education')}  onMouseLeave={() => setHoverItem(null)}>
					<div>Education</div>
					{hoverItem === "Education" && (
					<div className={styles.hoverOptionsContainer}>
						<div>Properties for Rent</div>
						<div>Properties for Sale</div>
					</div>
					)}
				</div>
				<div className={styles.rightItem}  onMouseOver={() => setHoverItem('Housing')}  onMouseLeave={() => setHoverItem(null)}>
					<div>Housing</div>
					{hoverItem === "Housing" && (
					<div className={styles.hoverOptionsContainer}>
						<div>Properties for Rent</div>
						<div>Properties for Sale</div>
					</div>
					)}
				</div>
				<div className={styles.rightItem}>Travel</div>
				<div className={styles.rightItem}>Join Now</div>
			</div>
		</div>
	)
}

export default Header
