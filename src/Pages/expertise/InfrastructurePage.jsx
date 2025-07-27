import React from 'react';

const FeatureCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-oxford-blue mb-3">{title}</h3>
        <p className="text-medium-gray">{children}</p>
    </div>
);

const InfrastructurePage = () => {
    return (
        <div className="bg-light-gray">
            <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Infrastructure & Building Solutions</h1>
                    <p className="mt-4 text-xl opacity-90">Shaping the built environment for a better future.</p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                 <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                    DHD Group is a global leader in the delivery of sustainable infrastructure and building solutions. With a commitment to excellence, innovation, and client satisfaction, we provide comprehensive services across diverse sectors.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureCard title="Infrastructure">
                        Execution of complex civil engineering projects on a global scale, including transportation, energy, and urban development.
                    </FeatureCard>
                    <FeatureCard title="Utilities">
                        Expert installation and maintenance services for vital utility connections like water, energy, and telecommunications.
                    </FeatureCard>
                    <FeatureCard title="Housing Maintenance">
                        Comprehensive services through DHD Places, including repairs, planned maintenance, and fire safety compliance for social landlords.
                    </FeatureCard>
                    <FeatureCard title="Rail">
                        A critical role in modernizing rail infrastructure with specialized signaling and power solutions for safe and efficient operation.
                    </FeatureCard>
                    <FeatureCard title="Property & Facilities Management">
                        We strategically invest, develop, and manage property assets globally, ensuring optimal operation through our facilities management services.
                    </FeatureCard>
                    <FeatureCard title="Sustainable Building Design">
                        A leader in sustainable construction, prioritizing low-energy design, enhanced insulation, and occupant well-being to meet environmental targets.
                    </FeatureCard>
                </div>
            </main>
        </div>
    );
};

export default InfrastructurePage;