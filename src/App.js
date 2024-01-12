import logo from "./logo.svg";
import "./App.css";
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useEffect } from "react";
import EntryPage from "./EntryPage";

function App() {
	const Scroll = (props) => {
		const location = useLocation();
		useEffect(() => {
			window.scrollTo(0, 0);
		}, [location]);

		return props.children;
	};
	return (
		<BrowserRouter>
			<Scroll>
				<Routes>
					<Route path="/" element={<Navigate to="/my" />} />

					<Route path="/my" element={<EntryPage />}>
						<Route path="" element={<Navigate to="home" />} />
						<Route path="home" element={<Homepage />} />
					</Route>
				</Routes>
			</Scroll>
		</BrowserRouter>
	);
}

export default App;
