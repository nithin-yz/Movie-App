import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const Adminhome = () => {
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
      <Header />
      <h2 className="text-3xl font-bold text-center my-6">Admin Page</h2>
      <nav className="flex justify-center mb-8">
        <ul className="flex space-x-4">
          <li>
            <Link to="/addmovie" className="text-blue-500 hover:underline">
              Add Movie
            </Link>
          </li>
          <li>
            <Link to="/movies" className="text-blue-500 hover:underline">
              View Movies
            </Link>
          </li>
        </ul>
      </nav>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Cast</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{movie.title}</td>
              <td className="border px-4 py-2">
                <img
                  className="w-24 h-24 object-cover"
                  src={movie.imageurl}
                  alt={movie.title}
                />
              </td>
              <td className="border px-4 py-2">{movie.cast}</td>
              <td className="border px-4 py-2">{movie.rating}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Adminhome;
