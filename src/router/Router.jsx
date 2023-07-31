import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

import ProtectedRoute from './ProtectedRoute';

import NotFound from '../pages/NotFound';
import Loader from "../components/Loader";

const Favorites = lazy(() => import('../pages/Favorites'));
const User = lazy(() => import('../pages/User'));
const Details = lazy(() => import('../pages/Details'));

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const Router = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route element={<Home />} path='/category/:categoryId' />
				<Route element={<Details />} path='/detail/:detailId' />

				<Route
					element={
						<ProtectedRoute>
							<User />
						</ProtectedRoute>
					}
					path='/user'
				/>
				<Route
					element={
						<ProtectedRoute>
							<Favorites />
						</ProtectedRoute>
					}
					path='/favs'
				/>

				<Route element={<Login />} path='/login' />
				<Route element={<Register />} path='/register' />
				<Route element={<Home />} path='/' />
				<Route element={<NotFound />} path='*' />
			</Routes>
		</Suspense>
	);
};

export default Router;
