import Image from "next/image";
import aboutImagePath from "@/public/WhatsApp Image 2025-08-12 at 23.07.04_1755034083060.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-sacred-brown mb-4">
            श्री दादाजी गुरुदेव
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 to-sacred-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            सांईखेड़ा वाले - आध्यात्मिक ज्ञान और दिव्य शक्तियों के धनी
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Image 
              src={aboutImagePath} 
              alt="श्री दादाजी गुरुदेव" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300" 
              placeholder="blur"
            />
          </div>
          
          <div className="space-y-8">
            <div className="bg-saffron-50 p-8 rounded-2xl border-l-4 border-saffron-500">
              <h3 className="font-heading text-2xl font-semibold text-sacred-brown mb-4">
                गुरुदेव का संदेश
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                व्यक्ति को अगर ईश्वर तक पहुँचना है तो हर व्यक्ति को ईश्वर के अंश से प्रेम करना शुरू करें 
                क्योंकि जब ईश्वर के अंश से प्रेम नहीं कर सकता तो ईश्वर से क्या प्रेम करेगा।
              </p>
              <p className="text-saffron-600 font-medium">
                - श्री दादाजी गुरुदेव (सांईखेड़ा वाले)
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-sacred-gold/10 to-saffron-100 rounded-xl">
                <i className="fas fa-dove text-3xl text-saffron-600 mb-3"></i>
                <h4 className="font-semibold text-sacred-brown mb-2">शांति</h4>
                <p className="text-sm text-gray-600">आध्यात्मिक शांति</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-sacred-gold/10 to-saffron-100 rounded-xl">
                <i className="fas fa-heart text-3xl text-saffron-600 mb-3"></i>
                <h4 className="font-semibold text-sacred-brown mb-2">प्रेम</h4>
                <p className="text-sm text-gray-600">सर्वोच्च प्रेम</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
