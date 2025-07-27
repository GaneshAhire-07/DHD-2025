import React from 'react';

const ServiceCard = ({ image, title, children }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-oxford-blue mb-2">{title}</h3>
            <p className="text-medium-gray text-sm leading-relaxed">{children}</p>
        </div>
    </div>
);

const HorticulturePage = () => {
    return (
        <div className="bg-light-gray">
            <header className="bg-gradient-to-r from-green-600 to-teal-500 text-white">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Horticulture Services</h1>
                    <p className="mt-4 text-xl opacity-90">“Cultivating Life’s Landscapes”</p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                    DHD is a leading provider of comprehensive horticulture and landscape development solutions. We specialize in creating sustainable and aesthetically pleasing green spaces that enhance the built environment.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard image="https://picsum.photos/seed/architecture/600/400" title="Landscape Architecture & Design">
                        Expert master planning, site analysis, and conceptual design that harmonize with the environment.
                    </ServiceCard>
                    <ServiceCard image="https://picsum.photos/seed/development/600/400" title="Landscape Development & Construction">
                        Turnkey services from site preparation and planting to hardscaping and irrigation installation.
                    </ServiceCard>
                    <ServiceCard image="https://picsum.photos/seed/vertical/600/400" title="Vertical Gardens & Bio Walls">
                        Innovative vertical solutions to maximize space, promote biodiversity, and improve air quality.
                    </ServiceCard>
                    <ServiceCard image="https://picsum.photos/seed/corporate/600/400" title="Corporate Green Solutions">
                        "Plants on Rent" and "Maali on Rent" programs to enhance employee well-being and CSR.
                    </ServiceCard>
                    <ServiceCard image="https://picsum.photos/seed/gardening/600/400" title="Garden Design & Maintenance">
                        Comprehensive services ensuring vibrant and thriving landscapes year-round.
                    </ServiceCard>
                    <ServiceCard image="https://picsum.photos/seed/specialized/600/400" title="Specialized Horticultural Services">
                        Includes grass plantation for lawns, terrace gardening, and custom kitchen gardens for fresh produce.
                    </ServiceCard>
                </div>
            </main>
        </div>
    );
};

export default HorticulturePage;