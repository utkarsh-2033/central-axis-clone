import logo from '../assets/logo.jpeg';
export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#232136] py-8 flex flex-col items-start justify-center text-center pl-20 pr-4">
      <div className="flex  gap-2 mb-2">
        <img  src={logo} alt="CentralAxis Logo" className="h-12 w-12">
          {/* <rect width="32" height="32" rx="8" fill="#a78bfa" /> */}
        </img>
      <div className="text-white justify-center text-mb mt-3">Copyright © 2025</div>
      </div>
      
    </footer>
  );
} 