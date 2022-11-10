import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoTriangleUp } from "react-icons/go";
import styles from "./header.module.css";
import Login from "../modals/login/login";

const Header = () => {
	const router = useRouter();
	const [hoverItem, setHoverItem] = useState(null);
	const [showLogin, setShowLogin] = useState(false);
	useEffect(() => {
	}, [])

	const home = () => router.push('/');
	const viewBusiness = () => router.push('/business-listings');
	const viewEducation = () => router.push('/education-listings');
	const viewHousing = () => router.push('/housing-listings');
	const viewTravel = () => router.push('/travel-listings');
	const viewNews = () => router.push('/news');

	return (
		<>
		{ showLogin && (
			<Login setShowLogin={setShowLogin}></Login>
		)}
		<div className={`${styles.headerContainer}`}>
			<div className={styles.leftContainer}></div>
			<div className={styles.rightContainer}>
				<div onClick={() => home()} className={`${styles.rightItem} ${router.pathname === '/' ? styles.active  : null}`}>Home</div>
				<div onClick={() => viewBusiness()} className={`${styles.rightItem} ${router.pathname === '/business-listings' ? styles.active  : null}`}>Business</div>
				<div onClick={() => viewNews()} className={`${styles.rightItem} ${router.pathname === '/news' ? styles.active  : null}`}>News</div>
				<div onClick={() => viewEducation()} className={`${styles.rightItem} ${router.pathname === '/education-listings' ? styles.active  : null}`}>Education</div>
				<div onClick={() => viewHousing()} className={`${styles.rightItem} ${router.pathname === '/housing-listings' ? styles.active  : null}`} onMouseOver={() => setHoverItem('Housing')}  onMouseLeave={() => setHoverItem(null)}>Housing
				{hoverItem === "Housing" && (
					<div className={`${styles.hoverOptionsContainer} border`}>
						<div>Properties for Rent</div>
						<div>Properties for Sale</div>
					</div>
				)}
				</div>
				<div onClick={() => viewTravel()} className={`${styles.rightItem} ${router.pathname === '/travel-listings' ? styles.active  : null}`}>Travel</div>
				<div onClick={() => setShowLogin(true)} className={styles.rightItem}>Join Now</div>
			</div>
		</div>
		</>
	)
}

export default Header
