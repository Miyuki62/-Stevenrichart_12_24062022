import Horizontalmenu from "./components/Horizontalmenu";
import Verticalmenu from "./components/Verticalmenu";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className="App">
			<Horizontalmenu />
			<Verticalmenu />
			<main className="content">
				<Profile />
			</main>
		</div>
	);
}

export default App;
