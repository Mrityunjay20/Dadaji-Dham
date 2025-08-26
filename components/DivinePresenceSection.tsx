export default function DivinePresenceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-saffron-500 to-sacred-red text-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <i className="fas fa-hands-praying text-6xl mb-6 opacity-80"></i>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              दिव्य उपस्थिति
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed mb-8 text-center">
              ब्रह्मलीन दादाजी गुरुदेव (सांईखेड़ा वाले) आज भी सूक्ष्म रूप से मंदिर में विराजमान हैं।
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
                दर्शन एवं प्रार्थना विधि
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <i className="fas fa-fire text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg">दो अगरबत्ती</h4>
                  <p className="text-white/80">श्रद्धा से जलाएं</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <i className="fas fa-circle text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg">एक नारियल</h4>
                  <p className="text-white/80">भक्ति भाव से अर्पित करें</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <i className="fas fa-heart text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg">पूर्ण श्रद्धा</h4>
                  <p className="text-white/80">विश्वास के साथ प्रार्थना</p>
                </div>
              </div>
              
              <p className="text-center mt-8 text-white/90 leading-relaxed">
                यदि कोई भी भक्त पूरी श्रद्धा एवं विश्वास से अपनी समस्या दादाजी के समक्ष रखता है, 
                तो दादाजी अवश्य ही उनकी सहायता करते हैं।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
