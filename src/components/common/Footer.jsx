import { footerLinks } from "../../utils/helper";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="w-full bg-ternary px-4">
      <div className="max-w-249 m-auto relative flex flex-col items-center pt-10 sm:pt-25 gap-14">
        <a href="/" className="scale-75 sm:scale-100">
          <Icons icon={"logo"} />
        </a>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 w-full ">
          <div className="flex flex-col gap-3">
            <span className="text-secondary font-semibold">
              Rated 4.9 on trustpilot.
            </span>
            <Icons icon={"trustPilot"} />   
          </div>
          {footerLinks.map((item, i) => (
            <div className="flex flex-col gap-3" key={i}>
              <h3 className="text-secondary font-semibold">{item.title}</h3>
              <ul className="flex flex-col text-secondary gap-3">
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href=""
                      className="hover:[-webkit-text-stroke:0.5px_#2B2B2B]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:flex flex-col gap-3">
            <h3 className="text-secondary font-semibold">Contact</h3>
            <ul className="gap-3  sm:mt-0 mt-5 flex text-secondary flex-col">
              <li>
                <a
                  href="tel:520-702-5510"
                  className="flex gap-2 group hover:[-webkit-text-stroke:0.5px_#2B2B2B]">
                  <Icons icon={"phone"} />
                  520-702-5510
                </a>
              </li>
              <li>
                <a
                  href="mailto:Admin@rabbitfunding.io"
                  className="flex gap-2 group underline hover:[-webkit-text-stroke:0.5px_#2B2B2B]">
                  <Icons icon={"mail"} />
                  Admin@rabbitfunding.io
                </a>
              </li>
              <li>
                <a
                  href="geo:NY"
                  className="flex gap-2 w-[247px] hover:[-webkit-text-stroke:0.5px_#2B2B2B]" >
                  <Icons icon={"location"} />
                  28 Liberty St, NY, NY, 10005
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center pb-3.5 mt-7 sm:mt-15 w-full flex flex-col gap-4">
        <span className="border border-[#010101] opacity-10 w-full"></span>
        <p>© {new Date().getFullYear()} Rabbit Funding, LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
