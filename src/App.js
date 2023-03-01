import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";

import "./index.css";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/offers" element={<Offers />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
