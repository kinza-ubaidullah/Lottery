import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  about: {
    title: "About",
    links: ["Refund policy", "Terms & Conditions"],
  },
  help: {
    title: "Help",
    links: ["Troubleshooting", "Affiliate"],
  },
  developers: {
    title: "Developers",
    links: ["Github", "Bug Bounty", "Audits"],
  },
};

export const FooterLinksSection = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-[#242d35] pt-[18px] pb-6 px-3">
      <div className="flex items-center justify-between mb-3">
        <h1 className="[font-family:'Luckiest_Guy',Helvetica] font-normal text-[#fffdf7] text-[23.4px] tracking-[-0.23px] leading-[23.4px]">
          LOTTERY
        </h1>
        <Button className="h-auto px-3 py-2.5 rounded-lg bg-[linear-gradient(180deg,rgba(43,53,64,1)_0%,rgba(74,89,104,1)_100%)] text-white font-14-bold font-[number:var(--14-bold-font-weight)] text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(180deg,rgba(70,84,99,0.2)_0%,rgba(152,175,198,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          Support
        </Button>
      </div>

      <img
        className="w-[263px] h-9 mb-[15px]"
        alt="Social media icons"
        src="/figmaAssets/frame-407.svg"
      />

      <div className="grid grid-cols-2 gap-x-[82px] gap-y-[11px] mb-[17px]">
        <nav className="flex flex-col gap-2.5">
          <h2 className="font-16-extra font-[number:var(--16-extra-font-weight)] text-[#cfd2e8] text-[length:var(--16-extra-font-size)] tracking-[var(--16-extra-letter-spacing)] leading-[var(--16-extra-line-height)] [font-style:var(--16-extra-font-style)]">
            {footerLinks.about.title}
          </h2>
          <ul className="flex flex-col gap-3">
            {footerLinks.about.links.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#8388aa] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)] hover:text-[#cfd2e8] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col gap-2.5">
          <h2 className="font-16-extra font-[number:var(--16-extra-font-weight)] text-[#cfd2e8] text-[length:var(--16-extra-font-size)] tracking-[var(--16-extra-letter-spacing)] leading-[var(--16-extra-line-height)] [font-style:var(--16-extra-font-style)]">
            {footerLinks.help.title}
          </h2>
          <ul className="flex flex-col gap-3">
            {footerLinks.help.links.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#8388aa] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)] hover:text-[#cfd2e8] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col gap-2.5 col-span-2">
          <h2 className="font-16-extra font-[number:var(--16-extra-font-weight)] text-[#cfd2e8] text-[length:var(--16-extra-font-size)] tracking-[var(--16-extra-letter-spacing)] leading-[var(--16-extra-line-height)] [font-style:var(--16-extra-font-style)]">
            {footerLinks.developers.title}
          </h2>
          <ul className="flex flex-col gap-3">
            {footerLinks.developers.links.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#8388aa] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)] hover:text-[#cfd2e8] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Separator className="bg-[#242d35] mb-3" />

      <p className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#525c68] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
        © 2025 FIRSTBTCLOTTERY. All rights reserved. INFO CHOICE TRADE
        CONSULTING SERVICES Ltd.
      </p>
    </footer>
  );
};
