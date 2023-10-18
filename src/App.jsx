import TopBar from "./component/topbar/TopBar";
import Home from "./pages/home/Home";
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
			<Write /> */}
			
			<Settings />
		</>
	);
}

export default App;
