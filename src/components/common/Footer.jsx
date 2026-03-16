import { Footer_links } from "../../utils/helper";
import Icons from "./Icons";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="w-full bg-ternary px-4">
      <div className="max-w-285 mx-auto relative flex flex-col items-center pt-25 gap-15">
        
        <a href="/" className="max-w-74.5 w-full max-h-34">
          <Icons icon={"logo"} />
        </a>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 w-full px-4">
          
          <div className="flex flex-col gap-3">
            <span className="text-secondary font-semibold">
              Rated 4.9 on trustpilot.
            </span>
            <Icons icon={"trustpilot"} />
          </div>

          {Footer_links.map((item, i) => (
            <div className="flex flex-col gap-3" key={i}>
              <h3 className="text-secondary font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-3">
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:flex flex-col gap-3">
            <h3 className="text-secondary font-semibold">Contact</h3>

            <ul className="gap-3 flex flex-col">
              
              <li>
                <a href="tel:520-702-5510" className="flex gap-2 group">
                  <Icons icon={"phone"} />
                  520-702-5510
                </a>
              </li>

              <li>
                <a
                  href="mailto:Admin@rabbitfunding.io"
                  className="flex gap-2 group"
                >
                  <Icons icon={"mail"} />
                  Admin@rabbitfunding.io
                </a>
              </li>

              <li>
                <a href="geo:NY" className="flex gap-2">
                  <Icons icon={"location"} />
                  28 Liberty St, NY, NY, 10005
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="text-center pb-3.5 w-full flex flex-col gap-4 px-4">
          <span className="border border-primary opacity-10 w-full"></span>
          <p>© {date} Rabbit Funding, LLC. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
