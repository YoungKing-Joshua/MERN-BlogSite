import React from "react";
import "./singlePost.css";

//A

export default function SinglePost() {
	return (
		<div className='singlePost'>
			<img
				className='singlePosting'
				src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
				alt=''
			/>
			<h1 className='singlePostingTitle'>
				Lorem ipsum dolor sit amet.
				<div className='singlePostEdit'>
					<i className='singlePostIcon far fa-edit'></i>
					<i className='singlePostIcon far fa-trash-alt'></i>
				</div>
			</h1>
			<div className='singlePostInfo'>
				<span className='singlePostAuthor'>
					Author: <b>Joshua Dei-Alorse</b>
				</span>
				<span className='singlePostDate'>1 hour ago</span>
			</div>
			<p className='singlePostDesc'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores veniam molestias vel
				numquam quam totam, saepe id alias mollitia, quisquam nihil cumque! Commodi deleniti magni
				alias id asperiores blanditiis.lorem Lorem, ipsum dolor sit amet consectetur adipisicing
				elit. Temporibus libero a incidunt dolorem reprehenderit voluptas sint aut autem dicta,
				atque ratione eum iusto possimus quisquam quidem ducimus vel vero suscipit. Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Sequi voluptatum atque illo perspiciatis
				soluta. Maiores delectus quo voluptates dicta numquam accusamus iure vero, provident
				exercitationem temporibus maxime, quisquam, perferendis eos! Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Ipsam incidunt itaque repellendus saepe harum sed excepturi
				est ratione ab placeat distinctio aliquam quos modi hic eum voluptatem, aut tempore vero!
			</p>
		</div>
	);
}
