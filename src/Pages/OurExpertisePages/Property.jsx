export default function Property() {
    return (
        <div>
            <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/modern-building_1127-3133.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                    <h1 className="text-5xl font-extrabold">Property</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-oxford-blue text-center mb-6">Strategic Property Investment & Development</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        [cite_start]We strategically invest in and develop property assets globally, maximizing their potential to create thriving spaces for communities and businesses. [cite: 552] [cite_start]Our expertise spans a wide range of property types, including residential, commercial, and mixed-use developments. [cite: 553]
                    </p>
                </div>
            </div>
        </div>
    );
}