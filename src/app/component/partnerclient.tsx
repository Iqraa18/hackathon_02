// import Image from 'next/image'
// import React from 'react'

// // Partner data
// const partners = [
//   { name: 'Restaurant', logo: '/restaurant.png' },
//   { name: 'Bakery', logo: '/bakery.png' },
//   { name: 'Fork & Spoon', logo: '/forkspoon.png' },
//   { name: 'Wolf Coffee', logo: '/wolfcoffee.png' },
//   { name: 'Bistro', logo: '/bistro.png' },
//   { name: 'Bakery', logo: '/bakery1.png' },
// ]

// export default function PartnersAndClients() {
//   return (
//     <section className="py-16 px-4 max-w-7xl mx-auto">
//       <div className="text-center mb-12">
//         <h3 className="text-lg sm:text-xl text-gray-700 mb-2">Partners & Clients</h3>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//           We work with the best people
//         </h2>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
//         {partners.map((partner, index) => (
//           <div key={index} className="flex justify-center">
//             <Image
//               src={partner.logo}
//               alt={`${partner.name} logo`} width={21} height={21}
//               className="max-h-24 sm:max-h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }   


import Image from 'next/image'
import React from 'react'

// Partner data with correct paths to images in the public/images folder
const partners = [
  { name: 'Restaurant', logo: '/images/restaurant.png' },
  { name: 'Bakery', logo: '/images/bakery.png' },
  { name: 'Fork & Spoon', logo: '/images/forkspoon.png' },
  { name: 'Wolf Coffee', logo: '/images/wolfcoffee.png' },
  { name: 'Bistro', logo: '/images/bistro.png' },
  { name: 'Bakery', logo: '/images/bakery1.png' },
]

export default function PartnersAndClients() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-lg sm:text-xl text-gray-700 mb-2">Partners & Clients</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          We work with the best people
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`} 
              width={170}   // Adjusted width to a more suitable value
              height={170}  // Adjusted height to a more suitable value
              className="max-h-24 sm:max-h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

