import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8">
                <h1 className="text-4xl font-bold text-purple-700 mb-4">About Us</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Welcome to our website! We are passionate about creating beautiful and interactive web experiences using modern technologies like React and Framer Motion.
                </p>
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
                        <p className="text-gray-600">
                            To deliver high-quality, user-friendly, and visually appealing web applications that delight users and solve real-world problems.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">What We Do</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Web development with React</li>
                            <li>Motion design with Framer Motion</li>
                            <li>UI/UX design and prototyping</li>
                            <li>Performance optimization</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                        Thank you for visiting!
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;