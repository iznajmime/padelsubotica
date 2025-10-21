import React from 'react';

const LocationPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-custom p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 leading-tight mb-10 text-center">
          Kako do nas
        </h1>

        <div className="space-y-12">
          {/* Map Section */}
          <div>
            <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden border border-gray-300 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d488.17213933314366!2d19.74921966741788!3d46.06058830012271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srs!4v1753435881386!5m2!1sen!2srs"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold font-display text-gray-800 mb-3">Kontakt</h2>
            <p className="text-xl text-gray-600">
              <strong>Telefon:</strong> <a href="tel:+381665460000" className="text-[#baa070] hover:underline">+381 66 546 0000</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
