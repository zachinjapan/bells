// This is a React Router v6 app
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Newsletter from './Components/Newsletter/Newsletter';
import Media from './Components/Media/Media';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="about" element={<About />} />
					<Route path="newsletter" element={<Newsletter />} />
					<Route path="media" element={<Media />} />
				</Routes>
				<Nav />
				<div className="mouse" />
			</div>
		</BrowserRouter>
	);
}

export default App;
