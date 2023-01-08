import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Catalog from './pages/Catalog'
import Home from './pages/Home'
import Login from './pages/Login'
import Rpl from './pages/Rpl'
import WorldCup from './pages/WorldCup'
import { Provider } from 'react-redux'
import { store } from './redux'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='catalog' element={<Catalog />} />
					<Route path='qatar' element={<WorldCup />} />
					<Route path='rpl' element={<Rpl />} />
					<Route path='login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
