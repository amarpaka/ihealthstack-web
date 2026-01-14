import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-600 text-white py-32 text-center">
        <h1 className="text-5xl font-extrabold">About iHealthStack</h1>
        <p className="text-xl mt-4">We are a team of scientists, health enthusiasts, and technologists dedicated to empowering you with personalized, evidence-based health solutions.</p>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">To bridge the gap between scientific research and everyday wellness. We believe that everyone deserves access to the knowledge and tools needed to optimize their health. Our platform is designed to make complex scientific data accessible, actionable, and personalized.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image src="/profile/person1.jpg" width={150} height={150} alt="Team Member 1" className="rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Dr. Alice Williams</h3>
              <p className="text-gray-500 mb-2">Founder & CEO</p>
              <p className="text-gray-600">A molecular biologist with a passion for translating research into real-world applications. Alice leads our team with a vision for a healthier future.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image src="/profile/person2.jpg" width={150} height={150} alt="Team Member 2" className="rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Dr. Ben Carter</h3>
              <p className="text-gray-500 mb-2">Chief Scientific Officer</p>
              <p className="text-gray-600">With a PhD in nutritional science, Ben ensures that every stack is grounded in solid scientific evidence. He’s our in-house research guru.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image src="/profile/person3.jpg" width={150} height={150} alt="Team Member 3" className="rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Chloe Davis</h3>
              <p className="text-gray-500 mb-2">Head of Product</p>
              <p className="text-gray-600">Chloe is the architect behind our user-friendly platform. She’s passionate about creating intuitive and empowering digital experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
