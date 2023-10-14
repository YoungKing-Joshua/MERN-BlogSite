import "./topbar.css";

export default function TopBar() {
    
	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='top Icon fa-brands fa-square-facebook'></i>
				<i className='top Icon fa-brands fa-x-twitter'></i>
				<i className='top Icon fa-brands fa-pinterest'></i>
				<i className='top Icon fa-brands fa-instagram'></i>
			</div>
			<div className='topCenter'>
				<li className='topListItem'>HOME</li>
				<li className='topListItem'>ABOUT</li>
				<li className='topListItem'>CONTACT</li>
				<li className='topListItem'>WRITE</li>
				<li className='topListItem'>LOGOUT</li>
			</div>
			<div className='topRight'>
				<img
					className='topImg'
					src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
				></img>
				<i class='fa-solid fa-magnifying-glass'></i>
			</div>
		</div>
	);
}