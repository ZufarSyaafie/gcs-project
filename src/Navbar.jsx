import React from "react";
import logo from "./assets/gmat.png";

function Navbar() {
	return (
		<>
			<nav className="fixed top-0 z-[99999] flex h-[7vh] w-[100vw] items-center justify-between bg-[#483C46] p-2 px-8 shadow-md">
				<div className="flex items-center gap-4">
					<img src={logo} alt="" className="w-[3vw]" />
					<p className="text-xl font-bold text-slate-100">
						Gadjah Mada Aerospace Team
					</p>
				</div>
				<div className="flex gap-3 text-lg font-bold">
					<p className="text-slate-100">ID: 43210 </p>
					<p className="text-slate-100">Time: 123 </p>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
