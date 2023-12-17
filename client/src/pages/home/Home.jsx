import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../component/header/header";
import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import axios from "axios";

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get("http://localhost:5000/api/posts");
			setPosts(res.data)
			
		}
		fetchPosts()
	}, []);

	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts ={posts}/>
				<Sidebar />
			</div>
		</>
	);
}
