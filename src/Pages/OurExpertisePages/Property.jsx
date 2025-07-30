import React from 'react';

// The main component for the Property page.
export default function Property() {
    return (
        <div>
            {/* Hero Section with a background image and overlay */}
            <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/modern-building_1127-3133.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                    <h1 className="text-5xl font-extrabold text-center">Property</h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* The 'text-oxford-blue' class should be defined in your tailwind.config.js. I'm using a placeholder color. */}
                    <h2 className="text-3xl font-bold text-[#002147] text-center mb-6">Strategic Property Investment & Development</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        We strategically invest in and develop property assets globally, maximizing their potential to create thriving spaces for communities and businesses. Our expertise spans a wide range of property types, including residential, commercial, and mixed-use developments.
                    </p>
                </div>
            </div>
        </div>
    );
}
