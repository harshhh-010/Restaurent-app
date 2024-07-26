import React from "react";
import communityTable from "../Assets/community-table.jpg"
import room from "../Assets/hotel-room.jpg"
import rooftop from "../Assets/rooftop.jpg"
import reception from '../Assets/reception.jpg'
import food from '../Assets/hero-banner.jpg'
import '../App.css'
import { NavLink } from "react-router-dom";

const About = () => {
	return(
		<>
		<div className="about-us md:grid grid-cols-2 gap-10 p-10 mb-20 bg-slate-900">
			<div>
				<img src={rooftop} alt="" className="rounded-xl"/>
			</div>
			<div className="pt-16">
				<h1 className=" head-about-us text-3xl text-peel-orange-custom font-pacifico font-medium mb-5 relative">About Us</h1>
				<p className="text-gray-500"> From the moment you step into one of our hotels, you will be greeted by a warm and friendly staff who are dedicated to ensuring your stay is as comfortable and enjoyable as possible. We believe that attention to detail is key, and we make it our mission to provide every guest with personalized service that exceeds expectations.</p>
				<ul className="mt-5 ml-5 text-white">
					<li className="mb-1 list-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nam?</li>
					<li className=" mb-1 list-disc">Amet consectetur Lorem ipsum sit  adipisicing elit. Eum, nam?</li>
					<li className="mb-1 list-disc">Consectetur adipisicing Lorem ipsum dolor sit amet  elit. Eum, nam?</li>
				</ul>
				
				<NavLink to="/aboutPage" className="mx-14"><button className="bg-peel-orange-custom px-6 py-3 rounded-full mt-10 ml-5 text-white hover:shadow-lg ">Know More</button></NavLink>
			</div>
		</div>
		</>
	);
}
export default About;
