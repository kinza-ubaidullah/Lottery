import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "About",
    links: ["Refund policy", "Terms & Conditions"],
  },
  {
    title: "Help",
    links: ["Troubleshooting", "Affiliate"],
  },
  {
    title: "Developers",
    links: ["Github", "Bug Bounty", "Audits"],
  },
];

export const FooterLinksSection = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-[#242d35] bg-[#0d1115] pt-12 pb-8">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Social */}
          <div className="flex flex-col gap-6">
            <h1 className="[font-family:'Luckiest_Guy',Helvetica] text-[#fffdf7] text-3xl tracking-tight leading-none">
              LOTTERY
            </h1>
            <p className="text-[#8388aa] text-sm leading-relaxed max-w-[280px]">
              The first fully verifiable Bitcoin lottery on the blockchain. Play safe, win big.
            </p>
            <div className="flex items-center gap-4">
              <img
                className="w-full max-w-[260px] h-auto"
                alt="Social media"
                src="/figmaAssets/frame-407.svg"
              />
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:col-span-1 lg:col-span-3">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h2 className="text-white font-black text-sm uppercase tracking-widest">{section.title}</h2>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href="#" className="text-[#8388aa] text-sm font-semibold hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-6">
              <h2 className="text-white font-black text-sm uppercase tracking-widest">Support</h2>
              <Button className="w-fit h-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-white/5">
                Contact Support
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-[#242d35] mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#525c68] text-xs font-bold text-center md:text-left">
            © 2025 FIRSTBTCLOTTERY. All rights reserved. INFO CHOICE TRADE CONSULTING SERVICES Ltd.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#525c68] text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#525c68] text-xs hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
