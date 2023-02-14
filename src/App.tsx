import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Movie from './Components/Movie';
import NotFound from './Components/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyle';
import UserProvider from './contex';
import Login from './Components/Login';

const App: React.FC = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
