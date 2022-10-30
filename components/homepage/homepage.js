import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./homepage.module.css";

const Homepage = () => {
	useEffect(() => {
		
	}, [])

	return (
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
					<button className={`${styles.btn} btn btn-primary m-2`}>Search</button>
				</div>
			</div>
		</div>
		<video autoPlay muted loop id="myVideo">
		    <source src="https://josephfarmsmedia.s3.us-west-1.amazonaws.com/Sequence+01_11.mp4" type="video/mp4"></source>
		</video>
	</div>
	)
}

export default Homepage
