import React, { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Editor } from '@tinymce/tinymce-react';
import styles from "./business-listings.module.css";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { BsEye, BsBookmark } from "react-icons/bs";

const Business = () => {
   const editorRef = useRef(null);
   const theme = useTheme();
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
	useEffect(() => {
	}, [])
	
	const profile = () => {
		console.log(" Profile view ");
	}

	const halp = () => {
		console.log(" Help and Support ");
	}

	const arr = [1,2,3,4,5,6];
	return (
		<div className={` ${styles.bgOutterMost}`}>
			{ false && (
	       	<Editor
				onInit={(evt, editor) => editorRef.current = editor}
				initialValue="<p>This is the initial content of the editor.</p>"
				init={{
				height: 500,
				menubar: false,
				plugins: [
				 'advlist autolink lists link image charmap print preview anchor',
				 'searchreplace visualblocks code fullscreen',
				 'insertdatetime media table paste code help wordcount'
				],
				toolbar: 'undo redo | formatselect | ' +
				'bold italic backcolor | alignleft aligncenter ' +
				'alignright alignjustify | bullist numlist outdent indent | ' +
				'removeformat | help',
				content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
				}}
	       	/>
			)}
			<div className={`d-flex`}>
				<div className={`${styles.rightContainer}`}>
					
				</div>
				<div className={`${styles.leftContainer}`}>
					<div className={`${styles.typeTitle}`}>Popular Business Listings</div>
					<div className={`${styles.filterContainer}`}>
						(* Filters *)
					</div>
					{ arr.map((item, i) => (
					<div key={i} className={`${styles.cardContainer}`}>
						<div className={`${styles.title}`}>Challenge Independent Middle School in San Francisco, CA — School</div>
						<div className={styles.body}>
							<div className={styles.bodyLeft}>
								<img src={"/school.jpg"} />
								<div className={styles.imgHead}>
									<div className={styles.imgHeadItemContainer}>
										<BsBookmark/>
										<span>Save</span>
									</div>
									<div className={styles.imgHeadItemContainer}>
										<BsEye/>
										<span>Preview</span>
									</div>
								</div>
							</div>
							<div className={styles.bodyRight}>
								Browse a list of Google products designed to help you work and play, stay organized, get answers, keep in touch, grow your
							</div>
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Business
