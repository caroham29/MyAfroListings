import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { GoTriangleUp } from "react-icons/go";
import styles from "./header.module.css";
import Login from "../modals/login/login";
import { BsPlusSquare } from "react-icons/Bs";
import { BiUser } from "react-icons/Bi";
import { IoExitOutline } from 'react-icons/io5'

const Header = () => {
	const router = useRouter();
	const [hoverItem, setHoverItem] = useState(null);
	const [showLogin, setShowLogin] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	useEffect(() => {
		console.log(user, " User from store  from header ");
	}, [user]);

	const home = () => router.push('/');
	const viewBusiness = () => router.push('/business-listings');
	const viewEducation = () => router.push('/education-listings');
	const viewHousing = () => router.push('/housing-listings');
	const viewTravel = () => router.push('/travel-listings');
	const viewNews = () => router.push('/news');

	const signOut = () => {
		dispatch({
			type: 'setUser',
			user: null,
		})
	}

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
				<div className={styles.rightItemAlt} onMouseOver={() => setHoverItem('Profile')} onMouseLeave={() => setHoverItem(null)}>
				{ user && user.id
					? 
					(
						<> 
						{ user.picture !== 'undefined'
							?
							( <div>
								<img className={styles.profilePic} src={user.picture}/>
							</div> )
							: ( <div className={styles.profilePicAlt}>{user.username[0].toUpperCase()}</div> )
						}
						{hoverItem === "Profile" && (
						<div className={`${styles.hoverOptionsContainer} border`}>
							<div>
								<BiUser/>
								<span className={styles.profileItems}>Profile</span>
							</div>
							<div onClick={signOut}>
								<BsPlusSquare/>
								<span className={styles.profileItems}>Create Listing</span>
							</div>
							<div onClick={signOut}>
								<IoExitOutline />
								<span className={styles.profileItems}>Sign Out</span>
							</div>
						</div>
						)}
					</>)
					: <div onClick={() => setShowLogin(true)}>Sign in</div>
				}
				</div>
			</div>
		</div>
		</>
	)
}

export default Header
