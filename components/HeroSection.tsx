import heroImagePath from "@/public/WhatsApp Image 2025-08-12 at 23.07.03_1755034083056.jpeg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center sacred-pattern">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${heroImagePath.src})`
        }}
      ></div>
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            श्री दादाजी धाम मंदिर
          </h1>
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl text-sacred-cream mb-8 font-medium">
            Sri Dadaji Dham Mandir
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            पटेल नगर, भोपाल में स्थित जागृत तीर्थ स्थल<br />
            आध्यात्मिक शांति और दिव्य आशीर्वाद का केंद्र
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-saffron-600 px-8 py-3 rounded-full font-semibold hover:bg-sacred-cream transition-all duration-300 shadow-lg transform hover:scale-105">
              <i className="fas fa-pray mr-2"></i>
              दर्शन करें
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-saffron-600 transition-all duration-300">
              <i className="fas fa-map-marker-alt mr-2"></i>
              स्थान देखें
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
