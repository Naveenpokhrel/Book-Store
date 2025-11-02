import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrivals />
    </>
  );
};

export default Home