import {
  faGithub,
  faLinkedinIn,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import tLogo from '@/assets/tlogo.png';
import { Logo } from '@/components/Elements';

interface Link {
  href: string;
  icon: IconDefinition;
}

const links: Link[] = [
  { href: 'mailto:todd.judd@gmail.com', icon: faEnvelope },
  {
    href: 'https://www.linkedin.com/in/todd-judd-432a86b4/',
    icon: faLinkedinIn,
  },
  { href: 'https://github.com/toddjudd', icon: faGithub },
];

export const Landing = () => {
  return (
    <div className='bg-slate-700 h-screen w-screen text-white font-roboto flex justify-center items-center p-6 '>
      <div className='grid md:grid-cols-2 justify-items-start gap-6 h-full'>
        <div className='flex h-full w-full flex-col justify-center gap-2 md:order-2'>
          <h1 className='text-6xl self-end text-right'>
            Hi, I &rsquo;m Todd Judd
          </h1>
          <h2 className='text-3xl text-right'>
            I&rsquo;m a <b>Software Developer</b>
          </h2>
          <ul className='flex justify-end gap-4'>
            {links.map((link, i) => (
              <li
                className=' bg-orange-500 hover:bg-white hover:text-orange-500 py-1 px-3 rounded-xl'
                key={i}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-orange-500 '>
                  <FontAwesomeIcon icon={link.icon} size='2x' />
                </a>
              </li>
            ))}
          </ul>
          <h3 className='text-right italic font-thin'>
            Feel free to get in touch
          </h3>
        </div>
        <div className='md:justify-self-center md: self-center'>
          <Logo className=' h-40 md:h-auto' src={tLogo} spin={false} />
        </div>
      </div>
    </div>
  );
};
