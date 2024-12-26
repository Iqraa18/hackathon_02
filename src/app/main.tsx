// /pages/main.tsx

import Image from 'next/image';
import Navbar from './navbar/navbar';

export default function Main() {
  return (
    <>
     
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative bg-black py-12">
          <div className="container mx-auto flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-yellow-500 mb-6">
              The Art of Speed Food Quality
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Learn everything about fast, convenient, and high-quality meals that redefine taste.
            </p>
            <button className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md">
              Order Now
            </button>
          </div>
          <div className="relative w-full h-[400px] mt-8">
            <Image
              src="/hero-food.jpg" // Replace with your food image
              alt="Delicious Food"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* About Us */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">About Us</h2>
            <p className="text-lg text-gray-400">
              We create the best food products with the highest quality standards to ensure you get the best experience every time.
            </p>
          </div>
        </section>

        {/* Food Categories */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">Choose Food Item</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((category, index) => (
                <div key={index} className="relative">
                  <div className="relative h-48">
                    <Image
                      src={`/food-${index + 1}.jpg`} // Replace with food category images
                      alt={`Food category ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}