import React from 'react';

// The main component for the Environmental Targets page.
export default function EnvironmentalTargetsPage() {
    return (
        <div>
            {/* Hero Section with a background image and overlay */}
            <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/green-leaf-with-water-droplets_1203-6351.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                    <h1 className="text-5xl font-extrabold text-center">Environmental Targets</h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Content */}
                    <div>
                        <img 
                            src="https://placehold.co/600x400/e2e8f0/334155?text=Sustainable+Practices" 
                            alt="Sustainable Practices" 
                            className="rounded-lg shadow-xl w-full h-auto"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/334155?text=Image+Not+Found'; }}
                        />
                    </div>
                     {/* Text Content */}
                    <div>
                         <h2 className="text-3xl font-bold text-[#002147] mb-6">Commitment to Sustainability</h2>
                         <p className="text-lg text-gray-700 leading-relaxed">
                            DHD collaborates with local authorities to optimize service delivery, reduce costs, and achieve critical environmental targets. We are committed to sustainable practices and environmental stewardship.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
