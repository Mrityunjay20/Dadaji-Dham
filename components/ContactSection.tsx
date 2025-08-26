export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-saffron-50 to-sacred-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-sacred-brown mb-4">
            संपर्क एवं स्थान
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 to-sacred-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            दादाजी धाम मंदिर में पधारें और दिव्य आशीर्वाद प्राप्त करें
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-sacred-brown mb-6">
                <i className="fas fa-map-marker-alt text-saffron-500 mr-3"></i>
                मंदिर का पता
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>श्री दादाजी धाम मंदिर</strong><br />
                  पटेल नगर, रायसेन रोड<br />
                  भोपाल, मध्य प्रदेश<br />
                  भारत
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-sacred-brown mb-6">
                <i className="fas fa-clock text-saffron-500 mr-3"></i>
                दर्शन समय
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-saffron-50 rounded-lg">
                  <span className="font-medium text-sacred-brown">प्रातःकाल</span>
                  <span className="text-gray-700">06:00 - 11:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-saffron-50 rounded-lg">
                  <span className="font-medium text-sacred-brown">सायंकाल</span>
                  <span className="text-gray-700">17:00 - 21:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-sacred-gold/10 rounded-lg">
                  <span className="font-medium text-sacred-brown">विशेष पूजा</span>
                  <span className="text-gray-700">सुबह एवं शाम</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-sacred-brown mb-6">
                <i className="fas fa-hands text-saffron-500 mr-3"></i>
                सेवा एवं दान
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  मंदिर में नियमित पूजा-अर्चना, भंडारा, और धार्मिक कार्यक्रम आयोजित होते रहते हैं। 
                  भक्तगण अपनी श्रद्धानुसार सेवा एवं दान कर सकते हैं।
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium">
                    अन्नदान
                  </span>
                  <span className="px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium">
                    भंडारा
                  </span>
                  <span className="px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium">
                    विशेष पूजा
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-sacred-brown mb-6">
                <i className="fas fa-route text-saffron-500 mr-3"></i>
                मार्ग दर्शन
              </h3>
              <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600 font-medium">Google Maps Integration</p>
                  <p className="text-sm text-gray-500 mt-2">पटेल नगर, रायसेन रोड, भोपाल</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-sacred-brown mb-6">
                <i className="fas fa-bus text-saffron-500 mr-3"></i>
                आवागमन सुविधा
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-car text-saffron-500 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-sacred-brown">निजी वाहन</h4>
                    <p className="text-gray-600 text-sm">रायसेन रोड, पटेल नगर से आसान पहुंच</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-bus text-saffron-500 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-sacred-brown">सार्वजनिक परिवहन</h4>
                    <p className="text-gray-600 text-sm">नियमित बस सेवा उपलब्ध</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-taxi text-saffron-500 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-sacred-brown">टैक्सी / ऑटो</h4>
                    <p className="text-gray-600 text-sm">भोपाल शहर से सुविधाजनक पहुंच</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
