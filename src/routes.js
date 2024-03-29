import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import ScroolToTop from './components/ScrollToTop';
import Loader from './components/Loader/Loader';
import NavBar from './components/Bar/NavBar';
import FootBar from './components/Bar/FootBar';

// import HomePage from './pages/HomePage';
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage"
// import Learning from "./components/Learning";

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const WorksPage = lazy(() => import('./pages/WorksPage'));

function Routes() {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<div className="background">
						<div id="loadingScreen">
							<div> Loading </div>
							<Loader />
						</div>
					</div>
				}
			>
				<ScroolToTop />
				<Switch>
					<Route
						exact
						path="/"
						element={
							<>
								<NavBar />
								<HomePage />
								<FootBar />
							</>
						}
					/>
					<Route
						exact
						path="/about"
						element={
							<>
								<NavBar />
								<AboutPage />
								<FootBar />
							</>
						}
					/>
					<Route
						exact
						path="/works"
						element={
							<>
								<NavBar />
								<WorksPage />
								<FootBar />
							</>
						}
					/>
					<Route
						exact
						path="/contact"
						element={
							<>
								<NavBar />
								<ContactPage />
								<FootBar />
							</>
						}
					/>

					<Route
						path="*"
						element={
							<center id="pageNotFound">
								<h1>Page Not Found</h1>
								<div>Error: 404</div>
							</center>
						}
					/>
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default Routes;
