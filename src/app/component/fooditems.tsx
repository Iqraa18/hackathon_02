// app/components/FoodItems.tsx

import Image from "next/image";

export default function FoodItems() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl text-yellow-500 font-serif font-semibold"><i>Food Category</i></h1>
        <h2 className="text-6xl font-bold text-white mb-12 hover:text-yellow-600 font-sans">Choose Your Food Item</h2>
        <div className="grid grid-rows-1 grid-cols-4 gap-6">
          <div className="pt-5 gap-6 shadow-lg">
            <Image 
              src="/images/food1.png" 
              alt="Food 1" 
              width={400}  // Adjusted width
              height={250} // Adjusted height
              className="object-cover mb-4 rounded-lg" 
            />
          </div>
          <div className="pt-5 gap-6 shadow-lg">
            <Image 
              src="/images/food2.png" 
              alt="Food 2" 
              width={400}  // Adjusted width
              height={250} // Adjusted height
              className="object-cover mb-4 rounded-lg" 
            />
          </div>
          <div className="pt-5 gap-6 shadow-lg">
            <Image 
              src="/images/food3.png" 
              alt="Food 3" 
              width={400}  // Adjusted width
              height={250} // Adjusted height
              className="object-cover mb-4 rounded-lg" 
            />
          </div>
          <div className="pt-5 gap-6 shadow-lg">
            <Image 
              src="/images/food4.png" 
              alt="Food 4" 
              width={400}  // Adjusted width
              height={250} // Adjusted height
              className="object-cover mb-4 rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
