export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] border-t border-[#232136] py-8 flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-2 mb-2">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#a78bfa" />
        </svg>
        <span className="text-lg font-bold ml-2">CentralAxis</span>
      </div>
      <div className="text-gray-400 text-sm mb-2">Copyright © 2025</div>
      <div className="flex gap-4 text-gray-400 text-xs">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
} 