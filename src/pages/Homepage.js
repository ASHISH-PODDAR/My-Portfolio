import React, { useEffect, useState } from "react";
import pic from "../assets/my.JPG";
import lgss from "../assets/lgss.png";
import grievance from "../assets/grievance.png";
import elephant from "../assets/jh-elepant.png";
import biodiversity from "../assets/bio-diversity.png";
import { FaHandshakeAngle } from "react-icons/fa6";

export default function Homepage() {
	return (
		<div className=" ">
			<div className="w-full h-screen flex justify-center items-center ">
				<div className="mt-10 flex justify-end w-7/12  text-white ">
					<div className=" ml-32">
						<div className="text-6xl ">
							<div className="text-green-500">Ashish Poddar</div>
							<div className="text-3xl text-gray-500 mt-2">
								Software Developer
							</div>
						</div>

						<div className="text-xl mt-2 flex-wrap w-[80%] leading-8 font-sans text-gray-300">
							Hi there! I'm Ashish Poddar, a web developer skilled in React.js,
							Firebase, and Tailwind CSS. I love transforming ideas into sleek,
							user-friendly web applications. Let's bring your vision to life!
						</div>
					</div>
				</div>
				<div className="w-5/12">
					<div
						//  style={col.colorChange}

						className="w-96 ml-8 h-96 mx-auto animate-fade-in duration-700 shadow-md overflow-hidden rounded-full"
					>
						<img src={pic} alt="pic" />
					</div>
				</div>
			</div>

			<div>
				<div className="text-center bg-green-600 w-16 mx-auto rounded-xl p-1 text-white text-xs">
					Projects
				</div>
				<div className="text-center text-white text-3xl mt-3">
					My Latest Projects
				</div>
				<div className="text-white grid grid-cols-2 gap-6 text-left p-8">
					<div className="mx-5">
						<div className="w-full h-[400px] overflow-hidden rounded-md  bg-white">
							<img
								src={lgss}
								alt="pic"
								className="object-contain h-[400px] w-full"
							/>
						</div>
						<div className="mt-2">Lgss web application</div>
					</div>
					<div className="mx-5">
						<div className="w-full h-[400px] overflow-hidden rounded-md  bg-white">
							<img
								src={biodiversity}
								alt="pic"
								className="object-contain h-[400px] w-full"
							/>
						</div>
						<div className="mt-2">Bio-diversity ticketing web application</div>
					</div>

					<div className="mx-5">
						<div className="w-full h-[400px] overflow-hidden rounded-md  bg-white">
							<img
								src={elephant}
								alt="pic"
								className="object-contain h-[400px] w-full"
							/>
						</div>
						<div className="mt-2">
							Jharkhand Forest Elephant tracking web/mobile app
						</div>
					</div>

					<div className="mx-5">
						<div className="w-full h-[400px] overflow-hidden rounded-md  bg-white">
							<img
								src={grievance}
								alt="pic"
								className="object-contain h-[400px] w-full"
							/>
						</div>
						<div className="mt-2">Chaibasa grievance portal</div>
					</div>
				</div>
			</div>

			<div className="mt-20">
				<div className="text-white">
					<div className="flex justify-evenly p-4">
						<div className="text-9xl my-auto p-8 flex justify-center  w-1/2 text-center">
							<FaHandshakeAngle />
						</div>
						<div className="w-1/2 ">
							<div className="text-center bg-green-600 w-16 rounded-xl p-1 text-white text-xs">
								About Me
							</div>
							<div className="capitalize text-3xl mt-4">
								Why hiring me for next project
							</div>
							<div className="mt-5 w-[90%]">
								Hi there! I'm Ashish Poddar, a web developer skilled in
								React.js, Firebase, and Tailwind CSS. I love transforming ideas
								into sleek, user-friendly web applications. Let's bring your
								vision to life!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
