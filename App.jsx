import React from "react";
import { Search, ShoppingCart } from "lucide-react";

const books = [
  { title: "Creative Hustle", author: "Hans Alsen", image: "/book1.jpg" },
  { title: "Art Unleashed", author: "Darlene Folk", image: "/book2.jpg" },
  { title: "The Study of Brain", author: "Alon W. Wells", image: "/book3.avif" },
  { title: "96", author: "Kevin Miles", image: "/book4.jpg" },
  { title: "Work for Money", author: "H. Finly", image: "/book5.webp" },
  { title: "Brand Strategy", author: "Dean Warner", image: "/book6.webp" },
];

export default function Bookstore() {
  return (
    <div className="bg-[#F6F1EB] min-h-screen p-8 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Booksy</h1>
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search by author, title, name"
            className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-4 top-3 text-gray-500" size={18} />
        </div>
        <ShoppingCart size={24} className="text-gray-700" />
      </nav>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium justify-center mb-8 bg-gray-200 p-3 rounded-lg">
        <li><a href="#" className="hover:text-purple-600 px-3 py-2 rounded-md">Home</a></li>
        <li><a href="#" className="hover:text-purple-600 px-3 py-2 rounded-md">Bestsellers</a></li>
        <li><a href="#" className="hover:text-purple-600 px-3 py-2 rounded-md">Categories</a></li>
        <li><a href="#" className="hover:text-purple-600 px-3 py-2 rounded-md">Find a Store</a></li>
        <li><a href="#" className="hover:text-purple-600 px-3 py-2 rounded-md">Blog</a></li>
      </ul>
      
      {/* Hero Section */}
      <section className="bg-[#F0E7DB] p-8 rounded-xl flex items-center justify-between shadow-md">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Build your library</h2>
          <p className="text-gray-600 mt-2">Buy two selected books and get one for free</p>
          <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700">View all</button>
        </div>
        <img src="/banner-image.jpg" alt="Illustration" className="w-56 rounded-lg" />
      </section>

      {/* Books Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Popular Now</h3>
        <div className="grid grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-lg" />
              <h4 className="mt-3 font-semibold text-gray-800">{book.title}</h4>
              <p className="text-sm text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
