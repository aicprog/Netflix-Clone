import {Router, Switch, Route} from 'react-router-dom'
import {LandingPage, SignInPage, BrowsePage } from './Pages/'
import { history } from './Components';

//paths
import { LANDING_PAGE, BROWSE, SIGN_IN, SIGN_UP } from './constants/routes';
import 'normalize.css'
import LoadingAvatar from './Components/BrowsePage/LoadingAvatar';


							// 	<BrowsePage newAvatarChosen={false}/>
							// </Route>


function App() {


  return (
		<div className="App">
			<Router history={history}>
				<LoadingAvatar>
					<Switch>
						<Route exact path={LANDING_PAGE}>
							<LandingPage />
						</Route>

							<Route exact path={BROWSE}><BrowsePage/></Route>


						<Route exact path={SIGN_IN}>
							<SignInPage />
						</Route>
						<Route exact path={SIGN_UP}></Route>
				</Switch>
				</LoadingAvatar>
			</Router>
		</div>
	);
}

export default App;
