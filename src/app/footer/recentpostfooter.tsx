// import Image from "next/image";

// export default function RecentPostsSection() {
//   const posts = [
//     { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/images/food.jpg" },
//     { title: "Change your food habit with organic food", date: "February 28, 2022", image: "/images/food.jpg" },
//     { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/images/food.jpg" },
//   ];

//   return (
//     <div className="w-[273.83px]">
//       <h3 className="text-xl font-bold mb-8">Recent Post</h3>
//       {posts.map((post, index) => (
//         <div key={index} className="flex items-center mb-4">
//           <Image
//             src={post.image} // Correct image path
//             alt="Recent post"
//             width={64}   // Adjust width
//             height={64}  // Adjust height
//             className="w-16 h-16 object-cover mr-4"
//           />
//           <div>
//             <h4 className="font-semibold mb-1">{post.title}</h4>
//             <p className="text-sm text-gray-400">{post.date}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import Image from "next/image";

export default function RecentPostsSection() {
  const posts = [
    { title: "Is fastfood good for your body?", date: "November 8, 2024", image: "/images/food.jpg" }, // Different image for post 1
    { title: "Change your food habit with organic food", date: "November 8, 2024", image: "/images/food.jpg" }, // Different image for post 2
    { title: "Do you like fastfood for your life?", date: "November 8, 2024", image: "/images/food.jpg" }, // Different image for post 3
  ];

  return (
    <div className="w-[273.83px]">
      <h3 className="text-xl font-bold mb-8">Recent Post</h3>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-4">
          <Image
            src={post.image} // Correct image path for each post
            alt="Recent post"
            width={64}   // Adjust width
            height={64}  // Adjust height
            className="w-16 h-16 object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold mb-1">{post.title}</h4>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
