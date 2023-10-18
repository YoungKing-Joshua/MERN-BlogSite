import TopBar from "./component/topbar/TopBar";
import Register from "./pages/Register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/single";
import Write from "./pages/write/Write";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<TopBar />
			{/* <Home />
			<Single /> 
			<Write /> 
			<Settings />
			<Login />*/}

			<Register />
		</>
	);
}

export default App;
