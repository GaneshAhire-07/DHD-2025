export default function Rail() {
    return (
        <div>
            <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/train-station_1127-3134.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                    <h1 className="text-5xl font-extrabold">Rail</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-oxford-blue text-center mb-6">Modernizing Rail Infrastructure</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        [cite_start]DHD plays a critical role in the development and modernization of rail infrastructure. [cite: 548] [cite_start]We provide specialized signaling and power solutions, ensuring the safe and efficient operation of this vital transportation mode. [cite: 549]
                    </p>
                </div>
            </div>
        </div>
    );
}