export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2024 iHealthStack. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
