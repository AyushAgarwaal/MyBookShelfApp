import BookSearch from './components/bookSearch';
import './App.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const click = () => {
    navigate('/books')
  }
  return (
    <div>
      <h1 className='bookshelf-heading'>BookShelf App</h1>
      <BookSearch />
      <button className='bookshelf-button' onClick={click}>My Bookshelf</button>
    </div>

  )
}


export default App;

