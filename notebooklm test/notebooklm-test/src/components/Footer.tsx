import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-emerald-100/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">

              <span className="font-outfit font-bold text-xl tracking-tight text-gray-900">
                Green Chemical
              </span>
            </Link>

          </div>

          {/* Contact Us */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-medium">
              <div>
                <h4 className="font-extrabold text-emerald-800 mb-2 text-base">Head Office / Plant / R&D</h4>
                <p>103, Dokgot2-ro, Daesan-eup, Seosan-si, Chungcheongnam-do, Korea, 31900</p>
                <p className="text-gray-500 mt-1">Tel: +82-41-661-5000</p>
              </div>
              
              <div>
                <h4 className="font-extrabold text-emerald-800 mb-2 text-base">R&D Center</h4>
                <p>6F, 16-9, Dongbaekjungang-ro 16beon-gil, Giheung-gu, Yongin-si, Gyeonggi-do, Korea, 17015</p>
              </div>
            </div>
            
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-medium">
              <div>
                <h4 className="font-extrabold text-emerald-800 mb-2 text-base">Seoul Office (Sales Department)</h4>
                <p>15F, Changgang Building, 86, Mapo-daero, Mapo-gu, Seoul, Korea, 04168</p>
                <p className="text-gray-500 mt-1">Tel: +82-2-3158-8823</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm focus:outline-none">
            © {new Date().getFullYear()} Green Chemical. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
