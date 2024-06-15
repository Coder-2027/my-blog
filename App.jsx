import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Blog></Blog>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
