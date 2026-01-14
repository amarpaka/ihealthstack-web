'use client';

import Image from 'next/image';
import { stacks } from '@/data/stacks';
import Link from 'next/link';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="bg-white">

      {/* New Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Unlock Your Body's Potential. Backed by Science.
          </h1>
          <p className="text-xl md:text-2xl mb-12 animate-fade-in-up">
            iHealthStack is your personal health intelligence platform, translating cutting-edge research into actionable, personalized supplement stacks.
          </p>
          <Link href="/stacks" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Explore Stacks
            </a>
          </Link>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">iHealthStack Concierge</h2>
            <p className="text-lg text-gray-300 mt-4">Your AI-powered guide to optimal health. Ask me anything about supplements, health goals, or our curated stacks.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Chatbot />
          </div>
        </div>
      </section>

      {/* The iHealthStack Difference Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">The iHealthStack Difference</h2>
            <p className="text-lg text-gray-600 mt-4">We empower you with trusted, evidence-based health solutions. Here’s how:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                <Image src="/file.svg" width="64" height="64" alt="Research" className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Scientific Research</h3>
              <p className="text-gray-600">We dive deep into PubMed and clinical trials to find evidence-based combinations that deliver real results. Our recommendations are backed by credible scientific data.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                 <Image src="/globe.svg" width="64" height="64" alt="Social" className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Social Intelligence</h3>
              <p className="text-gray-600">We analyze social chatter and community discussions to identify emerging trends and real-world efficacy. This allows us to stay ahead of the curve and provide you with the latest insights.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                <Image src="/window.svg" width="64" height="64" alt="Ecommerce" className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Unified Ecommerce</h3>
              <p className="text-gray-600">One-click access to curated stacks from trusted vendors, taking the guesswork out of purchasing. We streamline the process from discovery to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Supplements Matter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">The Modern Food Dilemma: Why Supplementation Matters</h2>
            <p className="text-lg text-gray-600 mt-4">The food on our plates has changed. While we have more access to food than ever before, the nutritional quality has been quietly declining. Here's a look at the science behind why supplementation is becoming increasingly important for holistic health.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-700">
              <p>Modern agricultural practices, while successful in increasing crop yields, have unintentionally stripped the soil of essential micronutrients. A landmark study published in the <a href="https://www.tandfonline.com/doi/abs/10.1080/07315724.2004.10719409" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Journal of the American College of Nutrition</a> reveals a significant decline in the amounts of protein, calcium, phosphorus, iron, riboflavin (vitamin B2), and vitamin C in fruits and vegetables over the past half-century. This means that even with a "healthy" diet, we may not be getting the same level of nutrients our grandparents did.</p>
              <p>Our dietary habits have also shifted dramatically. The rise of processed foods, high in calories but low in essential nutrients, has created a new kind of malnutrition. As documented in a <a href="https://www.nature.com/articles/s41598-019-46703-9" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Nature study</a>, modern diets are often rich in macronutrients like fats, carbohydrates, and proteins, but deficient in vital micronutrients and enzymes. These micronutrients, though required in small amounts, are the catalysts for countless biochemical reactions in the body, from energy production to DNA repair. Enzymes, the protein-based molecules that facilitate these reactions, are also often lacking in our over-processed and over-cooked foods.</p>
              <p>This is where supplementation comes in. It's not about replacing a healthy diet, but rather about filling the inevitable gaps. High-quality supplements can provide the essential vitamins, minerals, and enzymes that are increasingly difficult to obtain from food alone. Research from <a href="https://pubmed.ncbi.nlm.nih.gov/22254122/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">PubMed Central</a> highlights how targeted supplementation can help correct deficiencies, support specific health goals, and contribute to overall well-being.</p>
              <p>At iHealthStack, we believe in a holistic approach to health. By understanding the science behind the modern food dilemma, we can empower you to make informed decisions about your nutritional intake. Our curated stacks are designed to provide the targeted support you need to thrive in the modern world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Spotlight Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Evidence Spotlight</h2>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">The Power of Magnesium</h3>
              <p className="text-gray-600 mb-4 text-lg">
                A crucial mineral for over 300 enzymatic reactions in the body, Magnesium is a powerhouse for health. Clinical studies have shown its effectiveness in improving sleep quality, reducing anxiety, and supporting muscle function.
              </p>
              <p className="text-gray-600 text-lg">
                Our Deep Sleep & Recovery stack leverages Magnesium Glycinate for its high bioavailability, ensuring maximum absorption and benefit. See the science for yourself.
              </p>
               <a href="https://pubmed.ncbi.nlm.nih.gov/?term=magnesium+sleep" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-6 inline-block">Explore the Research on PubMed &rarr;</a>
            </div>
            <div className="md:w-1/2">
              <Image src="https://images.unsplash.com/photo-1591131143432-3e0b0433e334?q=80&w=2070&auto=format&fit=crop" width={500} height={400} alt="Magnesium" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Stacks Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Explore Our Health Stacks</h2>
            <p className="text-lg text-gray-600 mt-4">Find the perfect stack to meet your health goals. Each one is designed with a specific purpose in mind, backed by research, and ready to integrate into your wellness routine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stacks.slice(0, 3).map((stack) => (
              <div key={stack.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                 <Image src={stack.imageUrl} alt={stack.name} width={400} height={200} className="w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{stack.name}</h3>
                  <p className="text-gray-600 mb-4">{stack.description}</p>
                  <Link href={"/stacks/"} legacyBehavior>
                    <a className="text-blue-500 hover:underline font-semibold">View Details &rarr;</a>
                   </Link>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link href="/stacks" legacyBehavior>
                <a className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                View All Stacks
                </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Connect With Us</h2>
            <p className="text-lg text-gray-600 mt-4">Follow us on social media for the latest updates, health tips, and community discussions.</p>
          </div>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-blue-500 hover:underline">Twitter</a>
            <a href="#" className="text-blue-500 hover:underline">Instagram</a>
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
          </div>
        </div>
      </section>

    </main>
  );
}
