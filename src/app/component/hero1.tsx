import Navbar from "../navbar/navbar";
import Image from "next/image";

export default function Hero1() {
    return (
        <>
            <Navbar />
            <section className="h-screen bg-black">
                <div className="absolute bg-black w-full"></div>
                <div className="container mx-auto h-full flex items-center justify-between text-white bg-black px-8">
                    {/* Text Content */}
                    <div className="w-1/2">
                        <h1 className="text-2xl text-yellow-500 font-serif font-semibold">
                            <i>It's Quick And Amazing!</i>
                        </h1>
                        <h1 className="text-6xl font-bold mb-4 text-white hover:text-yellow-500 mt-12 flex">
                            The Art of Speedy Food Quality
                        </h1>
                        <p className="mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quasi eos reprehenderit eligendi aut sed doloremque quaerat recusandae officiis veniam aliquid beatae doloribus, ad ipsa tempore molestias incidunt dolorum velit.
                        </p>
                        <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-600">
                            See Menu
                        </button>
                    </div>

                    {/* Image */}
                    <div className="flex w-auto mt-11 mr-10">
                        <Image
                            src="/images/pic1.png"  // Corrected the path to refer to the public folder
                            alt="Food"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
