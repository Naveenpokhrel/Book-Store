import React from 'react';

const Categories = () => {
  // Category data matching your folder structure
  const categories = [
    {
      id: 1,
      name: 'Academic',
      image: '/categories/academic.png',
      description: 'Textbooks, reference materials, and scholarly works',
      bookCount: 245
    },
    {
      id: 2,
      name: 'Children',
      image: '/assets/categories/children.png',
      description: 'Colorful picture books and engaging stories for young minds',
      bookCount: 189
    },
    {
      id: 3,
      name: 'Health',
      image: '/assets/categories/health.png',
      description: 'Wellness, nutrition, and medical knowledge',
      bookCount: 156
    },
    {
      id: 4,
      name: 'Horror',
      image: '/assets/categories/horror.png',
      description: 'Spine-chilling tales and supernatural thrillers',
      bookCount: 203
    },
    {
      id: 5,
      name: 'Business',
      image: '/assets/categories/business.png',
      description: 'Entrepreneurship, management, and finance',
      bookCount: 178
    },
    {
      id: 6,
      name: 'History',
      image: '/assets/categories/history.png',
      description: 'Historical accounts and explorations of civilizations',
      bookCount: 221
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of books across various categories. 
            Find your next favorite read in our carefully curated sections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* Category Image */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden relative">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="h-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {category.bookCount} books
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center justify-between">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm">
                    Explore Category
                  </button>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly updating our collection. If you don't see a specific category 
              or book, feel free to contact us and we'll help you find it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
                Contact Support
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
                Request a Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;