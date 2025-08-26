export default function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b-2 border-saffron-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-full flex items-center justify-center">
              <i className="fas fa-om text-white text-lg"></i>
            </div>
            <div>
              <h1 className="font-heading font-semibold text-lg text-sacred-brown">दादाजी धाम</h1>
              <p className="text-xs text-gray-600">Dadaji Dham Mandir</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">होम</a>
            <a href="#about" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">गुरुदेव</a>
            <a href="#temple" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">मंदिर</a>
            <a href="#gallery" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">गैलरी</a>
            <a href="#teachings" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">उपदेश</a>
            <a href="#contact" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">संपर्क</a>
          </div>
          
          <button className="md:hidden text-gray-700">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
