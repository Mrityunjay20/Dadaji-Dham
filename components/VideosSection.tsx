export default function VideosSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-saffron-50 to-sacred-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-sacred-brown mb-4">
            दर्शन एवं उपदेश
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 to-sacred-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            गुरुदेव के आध्यात्मिक संदेश और मंदिर के दर्शन
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="aspect-video mb-4">
              <iframe 
                className="w-full h-full rounded-xl" 
                src="https://www.youtube.com/embed/3XyRBqYaz4s" 
                title="दादाजी धाम मंदिर - विशेष दर्शन"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <h3 className="font-heading text-xl font-semibold text-sacred-brown mb-2">
              मंदिर दर्शन और महत्व
            </h3>
            <p className="text-gray-600">
              दादाजी धाम मंदिर के विशेष दर्शन और आध्यात्मिक महत्व की जानकारी
            </p>
            <a 
              href="https://youtu.be/3XyRBqYaz4s?si=Vvls6U7H2sAMiA9n" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-saffron-600 hover:text-saffron-700 font-medium"
            >
              <i className="fab fa-youtube mr-2"></i>
              YouTube पर देखें
            </a>
          </div>
          
          {/* Video 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="aspect-video mb-4">
              <iframe 
                className="w-full h-full rounded-xl" 
                src="https://www.youtube.com/embed/Ldv0VP3mCx8" 
                title="श्री दादाजी गुरुदेव के उपदेश"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <h3 className="font-heading text-xl font-semibold text-sacred-brown mb-2">
              गुरुदेव के आध्यात्मिक उपदेश
            </h3>
            <p className="text-gray-600">
              श्री दादाजी गुरुदेव के अमूल्य आध्यात्मिक संदेश और जीवन दर्शन
            </p>
            <a 
              href="https://youtu.be/Ldv0VP3mCx8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-saffron-600 hover:text-saffron-700 font-medium"
            >
              <i className="fab fa-youtube mr-2"></i>
              YouTube पर देखें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
