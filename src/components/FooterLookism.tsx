export default function FooterLookism() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lookism-bg-dark border-t-3 border-lookism-accent-cyan py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Divider Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-lookism-accent-cyan"></div>
            <div className="w-2 h-2 bg-lookism-accent-cyan rotate-45"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-lookism-accent-pink"></div>
          </div>

          {/* Main Content */}
          <div>
            <p className="font-display text-3xl font-bold tracking-wider text-lookism-text-main mb-2">
              CALVIN DANKER
            </p>
            <p className="text-sm text-lookism-text-muted uppercase tracking-widest">
              Portfolio • React + TypeScript
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-lookism-text-muted">
            <a
              href="mailto:calvindanker@gmail.com"
              className="hover:text-lookism-accent-cyan transition-colors font-semibold"
            >
              calvindanker@gmail.com
            </a>
            <span className="hidden md:inline text-lookism-border-muted">|</span>
            <span>Johor Bahru, Malaysia</span>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-lookism-border-dark">
            <p className="text-xs text-lookism-text-dim">
              &copy; {currentYear} Calvin Jarrod Danker. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

