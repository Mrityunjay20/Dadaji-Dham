import Image from "next/image";
import templeImagePath from "@/public/WhatsApp Image 2025-08-12 at 23.07.05_1755034083060.jpeg";

export default function TempleSection() {
  return (
    <section id="temple" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-sacred-brown mb-4">
            जागृत तीर्थ स्थल
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 to-sacred-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            दादाजी धाम मंदिर का निर्माण और महत्व
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <Image 
              src={templeImagePath} 
              alt="दादाजी धाम मंदिर" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
              placeholder="blur"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="font-heading text-3xl font-bold text-sacred-brown">
              मंदिर का निर्माण
            </h3>
            <p className="text-gray-700 leading-relaxed">
              दादाजी धाम मंदिर का निर्माण श्री दादाजी गुरुदेव सांईखेड़ा वालों के द्वारा किया गया है। 
              श्री दादाजी गुरुदेव को भगवान शिव के प्रिय गण भृंगी ऋषि की सिद्धि प्राप्त थी।
            </p>
            
            <div className="bg-saffron-50 p-6 rounded-xl border-l-4 border-saffron-500">
              <h4 className="font-semibold text-sacred-brown mb-3">गर्भगृह की विशेषताएं</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-saffron-500 mt-1 flex-shrink-0"></i>
                  <span>संगमरमर की जयपुर से बनाई गई मूर्तियां</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-saffron-500 mt-1 flex-shrink-0"></i>
                  <span>मध्य में अर्धनारीश्वर (शंकर पार्वती) की प्रतिमा</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-saffron-500 mt-1 flex-shrink-0"></i>
                  <span>बाईं ओर सांई बाबा की प्रतिमा</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-saffron-500 mt-1 flex-shrink-0"></i>
                  <span>दाहिनी ओर दादाजी की प्रतिमा</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-sacred-gold/10 p-6 rounded-xl">
              <p className="text-sacred-brown font-medium">
                <i className="fas fa-calendar-alt mr-2"></i>
                मंदिर समापन: अगहन शुक्ल पक्ष तृतीय, दिसंबर 2010
              </p>
            </div>
          </div>
        </div>
        
        {/* Trust Information */}
        <div className="bg-gradient-to-r from-saffron-50 to-sacred-cream p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="font-heading text-3xl font-bold text-sacred-brown mb-4">
              श्री श्री 1008 श्री दादाजी चैरिटेबल ट्रस्ट
            </h3>
            <div className="w-16 h-1 bg-saffron-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-sacred-brown mb-3 text-xl">ट्रस्ट का गठन</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                श्री दादाजी गुरुदेव (सांईखेड़ा वाले) ने श्री श्री 1008 श्री दादाजी (गुरुदेव) 
                चैरिटेबल ट्रस्ट का गठन सन् 1992 में किया।
              </p>
              <div className="flex items-center space-x-2 text-saffron-600">
                <i className="fas fa-calendar"></i>
                <span className="font-semibold">स्थापना वर्ष: 1992</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-sacred-brown mb-3 text-xl">कार्यक्षेत्र</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                इसी ट्रस्ट के माध्यम से दादाजी धाम मंदिर पटेल नगर रायसेन रोड में स्थित है 
                और विभिन्न सामाजिक कार्य संपन्न होते हैं।
              </p>
              <div className="flex items-center space-x-2 text-saffron-600">
                <i className="fas fa-map-marker-alt"></i>
                <span className="font-semibold">पटेल नगर, रायसेन रोड, भोपाल</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
