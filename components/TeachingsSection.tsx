export default function TeachingsSection() {
  return (
    <section id="teachings" className="py-20 bg-gradient-to-br from-saffron-50 to-sacred-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-sacred-brown mb-4">
            आध्यात्मिक उपदेश
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 to-sacred-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            गुरुदेव के मार्गदर्शन में जीवन के गूढ़ रहस्यों की खोज
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Teaching Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-saffron-500">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-lightbulb text-white text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold text-sacred-brown mb-4 text-center">
              ईश्वर प्राप्ति का मार्ग
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              ईश्वर प्राप्ति सरल है। जब आप दूसरों के बारे में सोचना शुरू करते हैं, 
              तब ईश्वर आपके बारे में सोचना शुरू करते हैं।
            </p>
          </div>
          
          {/* Teaching Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-sacred-gold">
            <div className="w-16 h-16 bg-gradient-to-br from-sacred-gold to-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-hands-praying text-white text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold text-sacred-brown mb-4 text-center">
              सरल पूजन पद्धति
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              दादाजी की पूजन पद्धति बहुत ही सरल, सात्विक एवं आडम्बरहीन थी। 
              सच्ची श्रद्धा ही सब कुछ है।
            </p>
          </div>
          
          {/* Teaching Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-sacred-red">
            <div className="w-16 h-16 bg-gradient-to-br from-sacred-red to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-infinity text-white text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold text-sacred-brown mb-4 text-center">
              मन का समर्पण
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              जब आप ईश्वर को अपना मन समर्पित करते हैं, तो आपकी पूर्ण जिम्मेदारी 
              ईश्वर की होती है।
            </p>
          </div>
        </div>
        
        {/* Experience Quote */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-l-8 border-saffron-500">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <i className="fas fa-quote-left text-4xl text-saffron-500"></i>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-sacred-brown mb-4">
                श्री दादाजी का अनुभव - 2005
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "2005 की गर्मियों की बात है और मैं अपने बिस्तर पर जूते पहने बैठा था। 
                अचानक मुझे हवा में उछाल दिया गया और मैं बिस्तर पर पीठ के बल गिर पड़ा। 
                दर्द असहनीय था... यह था प्रभु की कृपा का प्रारंभ।"
              </p>
              <p className="text-saffron-600 font-semibold">
                - व्यक्तिगत अनुभव, श्री दादाजी गुरुदेव
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
