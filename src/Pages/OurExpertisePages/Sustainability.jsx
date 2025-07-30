import React from 'react';

// The main component for the Sustainability Building Design page.
export default function SustainabilityPage() {
    return (
        <div>
            {/* Hero Section with a background image and overlay */}
            <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/green-building_1127-3130.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                    <h1 className="text-5xl font-extrabold text-center">Sustainability Building Design</h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#002147] text-center mb-6">A Leader in Sustainable Construction</h2>
                    <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                        <p>
                            DHD has been a leader in sustainable building design and construction for over a decade. As a proud patron of the Sustainability Building Trust, DHD actively promotes the adoption of this leading international low-energy design standard. With a portfolio of over 50 certified buildings worldwide, we have demonstrated our commitment to sustainable construction across diverse sectors.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-[#002147] pt-4">Sustainably Built. Delivering Quality & Comfort.</h3>
                        <p>
                            Sustainability Building structures prioritize occupant well-being while minimizing energy consumption. This is achieved through:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Low air permeability</li>
                            <li>Enhanced insulation</li>
                            <li>Elimination of cold bridging</li>
                            <li>Optimized ventilation with a constant supply of fresh air</li>
                        </ul>
                        <p>
                            All Sustainability Building projects adhere to a rigorous quality assurance process, verified by an independent certifier to ensure compliance with the stringent criteria defined by the Sustainability Building Institute.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
