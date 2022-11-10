import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGeolocated } from "react-geolocated";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import Button from 'react-bootstrap/Button';
import styles from "./homepage.module.css";

const Homepage = () => {
	useEffect(() => {
			console.log("HERE YEE ")
	}, [])

	const responseGoogle = (response) => {
	  console.log(response);
	}
    // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    //     useGeolocated({
    //         positionOptions: {
    //             enableHighAccuracy: true,
    //         },
    //         userDecisionTimeout: 5000,
    //     })

	return (
		<div className={styles.homepageContainerMain}>
			<div className={styles.homepageContainer}>
				<div className={styles.homepageOverlay}>
					<div>
						<h1>Afro Business, Afro Education, Afro Community</h1>
						<div className="m-3">Highest Rated Afro Business Services Directory Worldwide, The Best Afro Travel, Afro Education Directory</div>
						<div className={`${styles.searchContainer} p-3 mt-3 form-inline`}>
							<div className="form-group m-2">
								<input type="search" className="form-control" autoComplete="false" placeholder="Ex: business, service, food"/>
							</div>
							<div className="form-group m-2">
								<input type="search" className="form-control" autoComplete="false" placeholder="Ex: zip code, city, state"/>
							</div>
							<Button as="a"
								className={`${styles.btn} m-2`}
								variant="default">
						   		Search
						  	</Button>
							
						</div>
					</div>
				</div>
				<video autoPlay muted loop id="myVideo">
				    <source src="https://josephfarmsmedia.s3.us-west-1.amazonaws.com/Sequence+01_11.mp4" type="video/mp4"></source>
				</video>
			</div>
			<div className={`d-inline-flex p-5 mx-3`}>
				<div className={styles.gridContainer}>
					  <div className={styles.item1}>
					  	<img className={styles.img} src={"/tutor1.jpg"}/>
					  	<div className={styles.mainContainer}>
					  		<h3><a href='/hello' target="_blank">How one tutor has changed the lives of her students</a></h3>
					  	</div>
					  </div>
					  <div className={`${styles.item2} ${styles.smallContainer}`}>
					  	<img src={"/img2.jpg"} />
					  	<div className={styles.smallContainerDiv}>How Gabby Goodwin's double-face double-snap barrettes shifted the culture</div>
					  </div>
					  <div className={`${styles.item3} ${styles.smallContainer}`}>
					  	<img  src={"/img3.jpg"} />
					  	<div className={styles.smallContainerDiv}>Beau2Go Meal Prep – serving people throughout Philadelphia</div>
					  </div>  
					  <div className={`${styles.item4} ${styles.smallContainer}`}>
					  	<img  src={"/img4.jpg"} />
					  	<div className={styles.smallContainerDiv}>Everyone has potential and everyone needs a coach pushing them to achieve their greatness</div>
					  </div>
					  <div className={`${styles.item5} ${styles.smallContainer}`}>
					  	<img  src={"/img5.jpg"} />
					  	<div className={styles.smallContainerDiv}>Small black businesses hit harder by inflation, here's why</div>
					  </div>  
					  <div className={`${styles.item6} ${styles.smallContainer}`}>
					  	<img  src={"/img6.jpg"} />
					  	<div className={styles.smallContainerDiv}>The importance of advancing black home ownership</div>
					  </div> 
				</div>
				<div className={styles.rightSide}></div>
			</div>
	</div>
	)
}

export default Homepage
