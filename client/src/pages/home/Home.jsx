import React from "react";
import "./home.css";
import Header from "../../component/header/header";
import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";

export default function Home() {
	return (
		<>
			<Header />
			<div className='home'>
            <Posts />
            <Sidebar />
            </div>
		</>
	);
}
