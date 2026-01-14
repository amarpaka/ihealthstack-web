import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">iHealthStack</h3>
            <p className="text-gray-400">Your personal health intelligence platform.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:underline">About Us</Link></li>
              <li><Link href="/stacks" className="text-gray-400 hover:underline">Stacks</Link></li>
              <li><Link href="/profile" className="text-gray-400 hover:underline">Profile</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:underline">Twitter</a>
              <a href="#" className="text-gray-400 hover:underline">Instagram</a>
              <a href="#" className="text-gray-400 hover:underline">Facebook</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; {new Date().getFullYear()} iHealthStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
