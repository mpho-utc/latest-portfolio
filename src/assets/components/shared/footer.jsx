import githubImg from '../../images/github-sign.png';
import linkedinImg from '../../images/linkedin-logo.png';
import mailImg from '../../images/apple.png';
import Container from "./container";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-brand-black to-brand-darkBlue text-brand-lightGray py-16 overflow-hidden">
      <Container>

        {/* MAIN FOOTER CONTENT */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 text-center md:text-left">

          {/* CONTACT BLOCK */}
          <ul className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">

            {/* Phone */}
            <li className="flex flex-col items-center md:items-start">
              <p className="font-semibold text-brand-yellow mb-1">
                Call Today
              </p>
              <a
                href="tel:+27739127333"
                className="hover:text-brand-yellow transition"
              >
                +27 73 912 7333
              </a>
            </li>

            {/* Email */}
            <li className="flex flex-col items-center md:items-start">
              <p className="font-semibold text-brand-yellow mb-1">
                Email
              </p>
              <a
                href="mailto:mphog3401@gmail.com"
                className="hover:text-brand-yellow transition"
              >
                mphog3401@gmail.com
              </a>
            </li>

            {/* Social */}
            <li className="flex flex-col items-center md:items-start">
              <p className="font-semibold text-brand-yellow mb-2">
                Social
              </p>
              <ul className="flex gap-5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mpho-shabalala-88b126362/"
                    className="hover:bg-brand-yellow p-1 rounded-full transition"
                  >
                    <img src={linkedinImg} alt="LinkedIn" className="h-7 w-7" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/mpho-shabalala/"
                    className="hover:bg-brand-yellow p-1 rounded-full transition"
                  >
                    <img src={githubImg} alt="GitHub" className="h-7 w-7" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mphog3401@gmail.com"
                    className="hover:bg-brand-yellow p-1 rounded-full transition"
                  >
                    <img src={mailImg} alt="Mail" className="h-7 w-7" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* COPYRIGHT */}
          <div className="text-sm text-gray-400 mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Mpho Shabalala. All rights reserved.
          </div>
        </div>

        

      </Container>
    </footer>
  );
}
