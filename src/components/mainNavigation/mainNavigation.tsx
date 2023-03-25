import './mainNavigation.module.css';
import Link from 'next/link';
import { Logo } from '../logo/logo';

export const MainNavigation = () => {
  return (
    <header>
      <Link href={'/'}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li>
            <Link href={'/contacts'}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
