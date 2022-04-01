import { Cart, Footer, Header, Home, Product } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import products from './mock/products.json';
import { setProducts } from './features/products/productsSlice';

const Root = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setProducts(products));
	}, []);

	return (
		<Router>
			<div className='min-h-screen flex flex-col bg-slate-200'>
				{/* Header */}
				<Header />

				{/* Main */}
				<main className='flex-grow container m-auto max-w-6xl pl-2 pr-2'>
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route
							path='/products/:id'
							exact
							element={<Product />}
						/>
						<Route path='/cart' exact element={<Cart />} />
					</Routes>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
};

export default Root;
