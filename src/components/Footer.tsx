export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 border-t-4 border-mint-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-mint-500 rounded-full"></div>
            <div className="text-4xl">✨</div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-lavender-500 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div>
            <p className="font-display text-xl font-bold bg-gradient-to-r from-mint-400 to-lavender-400 bg-clip-text text-transparent mb-3">
              Calvin's Portfolio
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Designed with webtoon inspiration 🎨 | Built with React & TypeScript ⚡
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
            <a
              href="mailto:calvindanker@gmail.com"
              className="hover:text-mint-400 transition-colors flex items-center gap-2"
            >
              <span>✉️</span>
              <span>calvindanker@gmail.com</span>
            </a>
            <span className="hidden md:inline text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Johor Bahru, Malaysia</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} Calvin Jarrod Danker. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Thanks for reading my story! 💙
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
