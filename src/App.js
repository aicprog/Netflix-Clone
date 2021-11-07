import {Router, Switch, Route} from 'react-router-dom'
import {LandingPage, SignInPage, BrowsePage, SearchPage } from './Pages/'
import { history, Navbar } from './Components';

//paths
import { LANDING_PAGE, BROWSE, SIGN_IN, SEARCH } from './constants/routes';
import 'normalize.css'
import LoadingAvatar from './Components/BrowsePage/LoadingAvatar';



function App() {


  return (
		<div className="App">
			<Router history={history}>
				<LoadingAvatar>
					<Switch>
						<Route exact path={LANDING_PAGE}>
							<LandingPage />
						</Route>
						<Route exact path={SIGN_IN}>
							<SignInPage />
						</Route>
							<>
							<Navbar/>
							<Route exact path={BROWSE}><BrowsePage/></Route>
							<Route exact path={SEARCH}><SearchPage/></Route>
							</>
				</Switch>
				</LoadingAvatar>
			</Router>
		</div>
	);
}

export default App;
