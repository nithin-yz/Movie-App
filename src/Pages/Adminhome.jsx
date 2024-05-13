import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditMovieForm from './editmovie'; 
import Swal from "sweetalert2"

const AdminPage = () => {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      const parsedMovies = JSON.parse(storedMovies);
      setMovies(parsedMovies);
    }
  }, []);

  // Function to handle saving edited movie
  const handleSaveEditedMovie = (editedMovie) => {
    const updatedMovies = movies.map(movie => (movie.id === editedMovie.id ? editedMovie : movie));
    setMovies(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
    setEditingMovie(null);
  };

// Function to handle deleting a movie
const handleDeleteMovie = (id) => {
  // Display a confirmation dialog using SweetAlert2
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // If user confirms deletion
      Swal.fire(
        'Deleted!',
        'Movie has been deleted.',
        'success'
      );
      
      const updatedMovies = movies.filter(movie => movie.id !== id);
      setMovies(updatedMovies);
      localStorage.setItem('movies', JSON.stringify(updatedMovies));
    }
  });
};
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/addmovie" className="text-blue-500 hover:text-blue-700 mr-4">Add Movie</Link>
          </li>
          <li>
            <Link to="/movies" className="text-blue-500 hover:text-blue-700">View Movies</Link>
          </li>
        </ul>
      </nav>

      {editingMovie ? (
        <EditMovieForm movie={editingMovie} onSave={handleSaveEditedMovie} />
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 text-gray-800">Title</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-800">Image</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-800">Cast</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-800">Rating</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2">{movie.title}</td>
                <td className="px-4 py-2"><img src={movie.imageurl} alt={movie.title} className="w-16 h-16 object-cover" /></td>
                <td className="px-4 py-2">{movie.cast}</td>
                <td className="px-4 py-2">{movie.rating}</td>
                <td className="px-4 py-2">
                  <button onClick={() => setEditingMovie(movie)} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                  <button onClick={() => handleDeleteMovie(movie.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
