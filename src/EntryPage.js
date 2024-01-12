import React from "react";
import { Outlet } from "react-router-dom";

export default function EntryPage() {
	return (
		<div className="">
			{/* Navbar */}
			<div className="p-4 flex justify-center gap-12 text-xl fixed top-0 h-20 bg-black z-50 w-full text-white ">
				<button>Hey</button>
				<button>Me</button>
				<button>Experience</button>
				<button>Projects</button>
			</div>
			<div className=" min-h-screen  bg-black">
				<Outlet />
			</div>
		</div>
	);
}
