import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
const AdminPage = () => {
  const [movies, setMovies] = useState([]);

  // Fetch movies from localStorage when the component mounts
  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      const parsedMovies = JSON.parse(storedMovies);
      setMovies(parsedMovies);
    }
  }, []);

  return (
    <div>

      <Header></Header>
      <h2>Admin Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/add-movie">Add Movie</Link>
          </li>
          <li>
            <Link to="/movies">View Movies</Link>
          </li>
        </ul>
      </nav>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Cast</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td><img src={movie.imageUrl} alt={movie.title} /></td>
              <td>{movie.cast}</td>
              <td>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer></Footer>
    </div>
  );
};

export default Adminhome;