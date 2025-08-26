import Image from "next/image";
import gallery1Path from "@/public/WhatsApp Image 2025-08-12 at 23.07.06_1755034083061.jpeg";
import gallery2Path from "@/public/WhatsApp Image 2025-08-12 at 23.07.07_1755034083061.jpeg";
import gallery3Path from "@/public/WhatsApp Image 2025-08-12 at 23.07.07 (1)_1755034083061.jpeg";

export default function GallerySection() {
  const images = [
    {
      src: gallery1Path,
      alt: "दादाजी धाम मंदिर - मुख्य प्रवेश",
      title: "मंदिर प्रवेश द्वार"
    },
    {
      src: gallery2Path,
      alt: "दादाजी धाम मंदिर - आंतरिक दृश्य",
      title: "मंदिर आंतरिक भाग"
    },
    {
      src: gallery3Path,
      alt: "दादाजी धाम मंदिर - गर्भगृह",
      title: "पवित्र गर्भगृह"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-sacred-brown mb-4">
            मंदिर दर्शन
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 to-sacred-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            श्री दादाजी धाम मंदिर के पवित्र दर्शन
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-heading text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-saffron-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand-alt text-white text-sm"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-saffron-600">
            <i className="fas fa-camera text-2xl"></i>
            <p className="font-heading text-lg">
              आपके मोबाइल से भेजी गई वास्तविक तस्वीरें
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}