import { APP_NAME } from '@redact/constants';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">{APP_NAME}</h1>
        <nav className="space-x-4 text-sm font-medium text-neutral-500">
          <Link href="https://github.com/hieudoanm/redact" target="_blank" className="hover:text-black">
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
};
