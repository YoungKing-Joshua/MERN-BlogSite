import React from "react";
import "./sidebar.css";

export default function Sidebar() {
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
					<li className='sidebarListItem'>Life</li>
					<li className='sidebarListItem'>Music</li>
					<li className='sidebarListItem'>Style</li>
					<li className='sidebarListItem'>Sport</li>
					<li className='sidebarListItem'>Tech</li>
					<li className='sidebarListItem'>Cinema</li>
				</ul>
			</div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">				<i className='topIcon fa-brands fa-square-facebook'></i>
				<i className='topIcon fa-brands fa-x-twitter'></i>
				<i className='topIcon fa-brands fa-pinterest'></i>
				<i className='topIcon fa-brands fa-instagram'></i></div>
            </div>
		</div>
	);
}
