
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t  pt-10 pb-16 px-4 sm:px-8 lg:px-20 font-inter text-gray-800">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-gray-200">

        <div>
          <div className="uppercase text-xs text-gray-500 font-semibold mb-2">Loaction</div>
          <div className="text-sm leading-relaxed mb-2">
            <br />New York, NY<br />United States
          </div>

        </div>


        {/* EMAIL US */}
        <div>
          <div className="uppercase text-xs text-gray-500 font-semibold mb-2">Email Us</div>
          <a
            href="mailto:rachel@stroy.dev"
            className="inline-flex items-center text-blue-700 font-medium text-sm hover:underline"
          >
            rachel@stroy.dev <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1" size="xs" />
          </a>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pt-10">

        <div>
          <h2 className="text-4xl font-serif font-medium font-porlane tracking-tight mb-2 ">STROY</h2>
          <p className="text-sm text-gray-600 mb-6 py-4">
            Empowering brands by delivering innovative web design that goes beyond aesthetics, building strategic online presences that connect and convert.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/R-LaRoi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 p-2 hover:border-stone-500"
            >

              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://github.com/R-LaRoi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 p-2 hover:border-stone-500"
            >

              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://www.rachelstroy.com/"
              aria-label="Art portfolio"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 p-2 hover:border-stone-500"
            >

              <FontAwesomeIcon icon={faPalette} size="lg" />
            </a>
          </div>
        </div>
      </div>


      {/* UTILITY */}
      <div>
        <div className="uppercase text-xs text-gray-500 font-semibold mb-2">Navigation</div>
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="/Pages/Work" className="hover:underline">
              WORK
            </Link>
          </li>
          <li>
            <Link href="/Pages/Services" className="hover:underline">
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/Pages/Connect" className="hover:underline">
              CONNECT
            </Link>
          </li>
        </ul>
      </div>

    </footer>

  );
}