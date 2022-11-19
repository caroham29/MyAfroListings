import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import Button from '@material-ui/core/Button';
import styles from "./homepage.module.css";
import { geoLocation } from "../../services/userServices";
import { BiLocationPlus } from "react-icons/bi";
import { categories } from "../../services/static-data";

const Homepage = () => {
	const [type, setType] = useState('');
	const [showCategories, setShowCategories] = useState(false);
	const [location, setLocation] = useState('');
	useEffect(() => {
		var item = document.getElementById('inputItemSearch');
		// setTimeout(() => {
		// 	item.focus();
		// }, 250);
		console.log(" Hello ", categories)
	}, [])

	const findLocation = async () => {
		const data = await geoLocation();
		console.log(data, " Locations ")
		setLocation(data.postal);
	}

	const setCategory = (type) => {
		console.log(type)
		setType(type);
		setShowCategories(false);
	}

	const responseGoogle = (response) => {
	  console.log(response);
	}

	return (
		<div className={styles.homepageContainerMain}>
			<div className={styles.homepageContainer}>
				<div className={styles.homepageOverlay}>
					<div className={`position-relative`}>
						<h1>Afro Business, Afro Education, Afro Community</h1>
						<h5 className="m-3">Highest Rated Afro Business Services Directory Worldwide, The Best Afro Travel, Afro Education Directory</h5>
						<div className={`${styles.searchContainer} p-3 mt-3 form-inline`}>
							<div className={`${styles.itemHolder} form-group m-2 rounded`}>
								<span>Type</span>
								<input type="search"
									id="inputItemSearch"
									autoComplete="false"
									onFocus={() => setShowCategories(true)}
									onChange={(e) => setType(e.target.value)}
        							value={type}
									placeholder="Ex: business, service, food"/>
								 	<div className={`${styles.categoriesContainer} ${ showCategories ? styles.display : null}`}>
									 	{ 
									 	categories.map(function(item, i) {
								        	return <div key={i} onClick={() => setCategory(item)}>{item}</div>
									 	})}
							    	</div>
							</div>
							<div className={`${styles.itemHolder} form-group m-2 rounded`}>
								<span>Location</span>
								<span onClick={findLocation} className={styles.iconHolder}>
									<BiLocationPlus></BiLocationPlus>
								</span>
								<input
									className={styles.itemHolderLast}
									type="search"
									autoComplete="false"
									onChange={(e) => setLocation(e.target.value)}
        							value={location}
									placeholder="Zip code, city or state"/>
							</div>
							<Button
								className={`${styles.btn} m-2`}
								variant="contained">
						   		Search
						  	</Button>
							
						</div>
					</div>
				</div>
				<video autoPlay muted loop id="myVideo">
				    <source src="https://josephfarmsmedia.s3.us-west-1.amazonaws.com/BGMovie.mp4" type="video/mp4"></source>
				</video>
			</div>
			<div className={`d-inline-flex p-5 mx-3 position-relative`}>
				<div className={styles.gridContainer}>
					  <div className={styles.item1}>
					  	<img className={styles.img} src={"/tutor1.jpg"}/>
					  	<div className={styles.mainContainer}>
					  		<h3><a href='/hello' target="_blank">How one tutor has changed the lives of her students</a></h3>
					  		<div className={styles.mainSmText}>Teachers often go above and beyond to make their students feel comfortable. One teacher matched a student's hairstyle when she saw she was uncomfortable. Another donated a kidney to her student.</div>
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
