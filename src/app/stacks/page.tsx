
import { stacks } from '@/data/stacks';
import Image from 'next/image';
import Link from 'next/link';

export default function StacksPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Curated Health Stacks
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore our expertly crafted stacks to boost your health and wellness.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((stack) => (
            <div key={stack.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={stack.imageUrl}
                  alt={stack.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white text-center p-4">{stack.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{stack.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Components:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {stack.components.map((component, index) => (
                      <li key={index}>{component.name} ({component.dosage})</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <a
                    href={stack.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-green-600 transition-colors duration-300 mb-3"
                  >
                    Buy on Amazon
                  </a>
                  <div className="flex space-x-3">
                    <p className="text-sm text-gray-500">Share:</p>
                    <Link href={`https://twitter.com/intent/tweet?text=Check out this health stack: ${stack.name}&url=${stack.purchaseUrl}`}>
                      <a target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">Twitter</a>
                    </Link>
                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=${stack.purchaseUrl}`}>
                      <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Facebook</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
