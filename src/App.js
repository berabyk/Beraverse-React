import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Router>
        <div className='h-14 bg-gray-900 text-white flex justify-between sticky top-0 items-center px-6'>
          <div className='flex items-center'>
            <span className='text-4xl font-semibold whitespace-nowrap text-sky-600 -scale-x-1'>B</span>
            <NavLink to='/' className=" text-2xl font-semibold whitespace-nowrap text-white">Beraverse</NavLink>
          </div>
          <ul className='flex flex-row'>
            <li>
              <NavLink to='/' className='pr-4 md:hover:text-blue-700 aria-[current=page]:text-blue-700'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/createpost' className='pr-4 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center aria-[current=page]:bg-blue-900'>Create A Post</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
