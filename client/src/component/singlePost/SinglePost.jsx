import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./singlePost.css";
import { useLocation } from "react-router-dom";

//A

export default function SinglePost() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get("http://localhost:5000/api/posts/" + path);
			setPost(res.data);
		};
		getPost();
	}, [path]);

	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				{post.photo && <img className='singlePosting' src={post.photo} alt='' />}
				<h1 className='singlePostingTitle'>
					{post.title}
					<div className='singlePostEdit'>
						<i className='singlePostIcon far fa-edit'></i>
						<i className='singlePostIcon far fa-trash-alt'></i>
					</div>
				</h1>

				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Author: <b>{post.username}</b>
					</span>
					<span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
				</div>
				<p className='singlePostDesc'>{post.desc}</p>
			</div>
		</div>
	);
}
