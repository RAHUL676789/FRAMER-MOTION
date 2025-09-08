import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">
                <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
                    Welcome Home!
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    This is your beautiful homepage built with <span className="font-semibold text-blue-500">Tailwind CSS & Framer motion</span> and <span className="font-semibold text-purple-500">React</span>.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;