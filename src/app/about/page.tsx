import Image from 'next/image';

export default function About() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">About iHealthStack</h1>
            <p className="text-lg text-gray-600 mb-12">iHealthStack is dedicated to empowering you to take control of your health. We believe that by combining cutting-edge scientific research with community wisdom, we can help you achieve your wellness goals and live your best life.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">

            {/* Team Member 1 */}
            <div className="transform hover:scale-105 transition duration-300">
              <Image src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Team Member 1" width={192} height={192} className="w-48 h-48 mx-auto rounded-full shadow-lg mb-6"/>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h3>
              <p className="text-gray-500 mb-4">Co-Founder & CEO</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724 9.94 9.94 0 01-3.125 1.192A4.965 4.965 0 0016.63.5a4.963 4.963 0 00-4.96 4.96c0 .357.04.707.118 1.05A14.06 14.06 0 011.62 1.31a4.963 4.963 0 001.524 6.62c-.75-.025-1.45-.23-2.05-.57v.06c0 2.308 1.64 4.232 3.824 4.674a4.966 4.966 0 01-2.223.084 4.963 4.963 0 004.63 3.442A9.96 9.96 0 010 19.53a14.026 14.026 0 007.548 2.21c9.058 0 14.01-7.503 14.01-14.01s-.032-1.28-.094-1.923a10.02 10.02 0 002.488-2.56z" /></svg></a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg></a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="transform hover:scale-105 transition duration-300">
              <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Team Member 2" width={192} height={192} className="w-48 h-48 mx-auto rounded-full shadow-lg mb-6"/>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Jane Smith</h3>
              <p className="text-gray-500 mb-4">Head of Research</p>
              <div className="flex justify-center space-x-4">
                 <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724 9.94 9.94 0 01-3.125 1.192A4.965 4.965 0 0016.63.5a4.963 4.963 0 00-4.96 4.96c0 .357.04.707.118 1.05A14.06 14.06 0 011.62 1.31a4.963 4.963 0 001.524 6.62c-.75-.025-1.45-.23-2.05-.57v.06c0 2.308 1.64 4.232 3.824 4.674a4.966 4.966 0 01-2.223.084 4.963 4.963 0 004.63 3.442A9.96 9.96 0 010 19.53a14.026 14.026 0 007.548 2.21c9.058 0 14.01-7.503 14.01-14.01s-.032-1.28-.094-1.923a10.02 10.02 0 002.488-2.56z" /></svg></a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg></a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="transform hover:scale-105 transition duration-300">
              <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Team Member 3" width={192} height={192} className="w-48 h-48 mx-auto rounded-full shadow-lg mb-6"/>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">David Chen</h3>
              <p className="text-gray-500 mb-4">Lead Engineer</p>
              <div className="flex justify-center space-x-4">
                 <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724 9.94 9.94 0 01-3.125 1.192A4.965 4.965 0 0016.63.5a4.963 4.963 0 00-4.96 4.96c0 .357.04.707.118 1.05A14.06 14.06 0 011.62 1.31a4.963 4.963 0 001.524 6.62c-.75-.025-1.45-.23-2.05-.57v.06c0 2.308 1.64 4.232 3.824 4.674a4.966 4.966 0 01-2.223.084 4.963 4.963 0 004.63 3.442A9.96 9.96 0 010 19.53a14.026 14.026 0 007.548 2.21c9.058 0 14.01-7.503 14.01-14.01s-.032-1.28-.094-1.923a10.02 10.02 0 002.488-2.56z" /></svg></a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg></a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
