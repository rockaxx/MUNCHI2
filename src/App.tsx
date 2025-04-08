import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/Index";
import DocsPage from "@/pages/Docs";
import PricingPage from "@/pages/Pricing";
import BlogPage from "@/pages/Blog";
import AboutPage from "@/pages/About";
import HomePage from "@/pages/Home";
import RestaurantPage from "@/pages/Restaurants/Restaurants"

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/index" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<HomePage />} path="/" />
      <Route element={<RestaurantPage />} path="/restaurants" />
      {/* <Route element={<RestaurantPage />} path="/restaurants/:id" /> */}

    </Routes>
  );
}

export default App;
