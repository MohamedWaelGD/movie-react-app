import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import { WishlistProvider } from "./contexts/WishListContext.jsx";
import Search from "./pages/Search/Search.jsx";
import PageLoader from "./components/PageLoader.jsx";
import React from "react";

function App() {
  return (
    <>
      <PageLoader isLoading={false} />
      <WishlistProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </Router>
      </WishlistProvider>
      <Footer />
    </>
  );
}

export default App;
