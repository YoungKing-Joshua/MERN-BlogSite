import React, { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get("http://localhost:5000/api/categories/");
			setCats(res.data);
		};
		getCats();
	}, []);

	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>ABOUT ME</span>
				<img
					src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'
					alt=''
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit fuga sint
					officiis natus consequatur voluptates delectus, culpa est voluptas iste!
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>CATEGORIES</span>
				<ul className='sidebarList'>
					{cats.map((c) => (
						<li className='sidebarListItem'>{c.name}</li>
					))}
				</ul>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>FOLLOW US</span>
				<div className='sidebarSocial'>
					{" "}
					<i className='topIcon fa-brands fa-square-facebook'></i>
					<i className='topIcon fa-brands fa-x-twitter'></i>
					<i className='topIcon fa-brands fa-pinterest'></i>
					<i className='topIcon fa-brands fa-instagram'></i>
				</div>
			</div>
		</div>
	);
}
