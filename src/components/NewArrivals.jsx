import React, { useState } from 'react';

const NewArrivals = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const newArrivals = [
    {
      id: 1,
      title: "Everyday Math",
      price: "$15.00",
      originalPrice: "$20.00",
      description: "Basic math for daily life applications and practical problem solving",
      category: "New ROOM OFFERED IN DECEMBER",
      date: "19 DEC 29",
      image: "/assets/new-arrivals/math-book.png",
      badge: "New",
      rating: 4.5,
      reviews: 128,
      discount: 25
    },
    {
      id: 2,
      title: "Basics of Chemistry",
      price: "$10.00",
      originalPrice: "$15.00",
      description: "Explore atoms, matter, and chemical reactions in everyday life",
      category: "Nurturing Bright Minds",
      image: "/assets/new-arrivals/chemistry-book.png",
      badge: "Popular",
      rating: 4.8,
      reviews: 95,
      discount: 33
    },
    {
      id: 3,
      title: "Tech and Logic",
      price: "$10.00",
      originalPrice: "$12.00",
      description: "Learn coding basics and logical thinking for modern technology",
      category: "Celebrate Literacy",
      image: "/assets/new-arrivals/tech-book.png",
      badge: "Trending",
      rating: 4.3,
      reviews: 156,
      discount: 17
    },
    {
      id: 4,
      title: "World Events and History",
      price: "$15.00",
      originalPrice: "$18.00",
      description: "Discover key global events and their impact on modern society",
      category: "Dreams stories",
      image: "/assets/new-arrivals/history-book.png",
      badge: "New",
      rating: 4.7,
      reviews: 203,
      discount: 17
    },
    {
      id: 5,
      title: "Understanding Science",
      price: "$10.00",
      originalPrice: "$13.00",
      description: "Explore cells, genetics, and biological systems in depth",
      category: "Learning From Home",
      image: "/assets/new-arrivals/science-book.png",
      badge: "Featured",
      rating: 4.6,
      reviews: 87,
      discount: 23
    },
    {
      id: 6,
      title: "Creative Writing",
      price: "$12.00",
      originalPrice: "$16.00",
      description: "Master the art of storytelling and creative expression",
      category: "Creative Minds",
      image: "/assets/new-arrivals/writing-book.png",
      badge: "Bestseller",
      rating: 4.9,
      reviews: 312,
      discount: 25
    },
    {
      id: 7,
      title: "Digital Marketing",
      price: "$18.00",
      originalPrice: "$25.00",
      description: "Modern strategies for online business growth and branding",
      category: "Business Essentials",
      image: "/assets/new-arrivals/marketing-book.png",
      badge: "Hot",
      rating: 4.4,
      reviews: 178,
      discount: 28
    },
    {
      id: 8,
      title: "Mindful Living",
      price: "$14.00",
      originalPrice: "$19.00",
      description: "Techniques for mindfulness and stress management",
      category: "Personal Growth",
      image: "/assets/new-arrivals/mindfulness-book.png",
      badge: "New",
      rating: 4.7,
      reviews: 134,
      discount: 26
    }
  ];

  const addToCart = (book) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === book.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const toggleFavorite = (bookId) => {
    setFavorites(prev =>
      prev.includes(bookId)
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'New': 'bg-green-500',
      'Popular': 'bg-pink-500',
      'Trending': 'bg-orange-500',
      'Featured': 'bg-purple-500',
      'Bestseller': 'bg-red-500',
      'Hot': 'bg-red-600'
    };
    return colors[badge] || 'bg-blue-500';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Fresh Arrivals Every Week
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            New Arrivals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Check out our newest books arriving weekly with fresh ideas, exciting plots, 
            and vibrant voices. Discover the latest additions to our collection.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">{newArrivals.length}+</div>
            <div className="text-gray-600 text-sm">New Books</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
            <div className="text-gray-600 text-sm">Average Discount</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.6</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
            <div className="text-gray-600 text-sm">Delivery Time</div>
          </div>
        </div>

        {/* New Arrivals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newArrivals.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Book Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-blue-50 to-purple-100 overflow-hidden">
                {/* Discount Badge */}
                {book.discount && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      -{book.discount}%
                    </span>
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(book.id)}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 ${
                    favorites.includes(book.id)
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill={favorites.includes(book.id) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                {/* Book Cover */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-32 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-1">
                        {book.title.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div className="text-xs opacity-80">BOOK</div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {book.category}
                  </span>
                </div>

                {/* Date Badge */}
                {book.date && (
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                      {book.date}
                    </span>
                  </div>
                )}
              </div>

              {/* Book Content */}
              <div className="p-6">
                {/* Badge */}
                <div className="flex justify-between items-start mb-3">
                  <span className={`${getBadgeColor(book.badge)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {book.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(book.rating)}
                    <span className="text-xs text-gray-500 ml-1">({book.reviews})</span>
                  </div>
                </div>

                {/* Title and Price */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1 mb-2">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">{book.price}</span>
                    {book.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{book.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {book.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => addToCart(book)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </button>
                  
                  <button className="p-3 border border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl hover:shadow-3xl flex items-center gap-3 mx-auto">
            View All New Arrivals
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Our New Arrivals?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We carefully curate our new arrivals to bring you the latest and most relevant 
              books across all genres. Each book is selected for its quality, content, and 
              potential to inspire.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">Quality Checked</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">Weekly Updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">Best Prices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">Free Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Special Offer!</h3>
              <p className="text-blue-100 mb-6">
                Get an additional 10% off when you purchase 3 or more new arrival books. 
                Limited time offer!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">EXTRA 10% OFF</span>
                <div className="text-right">
                  <div className="text-sm opacity-80">Ends in</div>
                  <div className="text-xl font-bold">48:15:22</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;