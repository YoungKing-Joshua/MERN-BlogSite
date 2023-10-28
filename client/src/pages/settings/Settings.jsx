import React from "react";
import "./settings.css";
import Sidebar from "../../component/sidebar/Sidebar";

function Settings() {
	return (
		<div className='settings'>
			<div className='settingWrapper'>
				<div className='settingTitle'>
					<span className='settingUpdateTitle'>Update your account</span>
					<span className='settingDeleteTitle'>Delete your picture</span>
				</div>
				<form className='settingForm'>
					<label>Profile Picture</label>
					<div className='settingPP'>
						<img
							src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
							alt=''
						/>
						<label htmlFor='fileInput'>
							<i className='settingPPIcon far fa-user-circle'></i>
						</label>
						<input type='file' id='fileInput' style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type='text' placeholder='Joshua' />
					<label>Email</label>
					<input type='email' placeholder='joshuadei-alorse@gmail.com' />
					<label>Password</label>
					<input type='password' />
					<button className="settingSubmit">Update Profile</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}

export default Settings;
