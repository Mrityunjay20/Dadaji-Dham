export default function Footer() {
  return (
    <footer className="bg-sacred-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Temple Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-full flex items-center justify-center">
                <i className="fas fa-om text-white text-lg"></i>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">दादाजी धाम</h3>
                <p className="text-sacred-cream text-sm">जागृत तीर्थ स्थल</p>
              </div>
            </div>
            <p className="text-sacred-cream leading-relaxed">
              श्री दादाजी गुरुदेव (सांईखेड़ा वाले) के आशीर्वाद से स्थापित 
              यह पवित्र धाम आध्यात्मिक शांति का केंद्र है।
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sacred-cream hover:text-sacred-gold transition-colors">होम</a></li>
              <li><a href="#about" className="text-sacred-cream hover:text-sacred-gold transition-colors">गुरुदेव</a></li>
              <li><a href="#temple" className="text-sacred-cream hover:text-sacred-gold transition-colors">मंदिर</a></li>
              <li><a href="#gallery" className="text-sacred-cream hover:text-sacred-gold transition-colors">गैलरी</a></li>
              <li><a href="#teachings" className="text-sacred-cream hover:text-sacred-gold transition-colors">उपदेश</a></li>
              <li><a href="#contact" className="text-sacred-cream hover:text-sacred-gold transition-colors">संपर्क</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">संपर्क सूत्र</h4>
            <div className="space-y-3">
              <p className="text-sacred-cream">
                <i className="fas fa-map-marker-alt mr-2"></i>
                पटेल नगर, रायसेन रोड, भोपाल
              </p>
              <p className="text-sacred-cream">
                <i className="fas fa-clock mr-2"></i>
                दर्शन: प्रातः 6-11, सायं 5-9
              </p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://youtu.be/3XyRBqYaz4s?si=Vvls6U7H2sAMiA9n" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center hover:bg-saffron-600 transition-colors"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a 
                  href="https://youtu.be/Ldv0VP3mCx8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center hover:bg-saffron-600 transition-colors"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sacred-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sacred-cream text-sm">
              © 2024 श्री दादाजी धाम मंदिर। सभी अधिकार सुरक्षित।
            </p>
            <p className="text-sacred-cream text-sm mt-2 md:mt-0">
              श्री श्री 1008 श्री दादाजी चैरिटेबल ट्रस्ट
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
