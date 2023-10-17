import React from "react";
import "./write.css";

export default function Write() {
	return (
		<div className='write'>
			<form action='' className='writeForm'>
				<div className='writeFormGroup'>
					<label htmlFor='fileInput'>
						<i className='writeIcon fas fa-plus'></i>
					</label>
					<input type='file' id='fileInput' style={{display:"none"}} />
					<input type='text' placeholder='Title' />
				</div>
			</form>
		</div>
	);
}
