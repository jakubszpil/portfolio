import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { collapseNavbar, toggleNavbar } from '../../features/navbar';
import { links, routes } from '../../lib/routes';
import classNames from 'classnames';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { expanded } = useAppSelector((state) => state.navbar);
  const { scrolled, attached } = useAppSelector((state) => state.scrollbar);

  const handleNavbarToggle = () => {
    dispatch(toggleNavbar());
  };
  const handleNavbarCollapse = () => {
    dispatch(collapseNavbar());
  };

  return (
    <nav
      className={classNames(
        'w-full fixed top-0 left-0 bg-white md:py-9',
        scrolled && !attached && '',
        !attached && ''
      )}
    >
      <div className="container flex justify-between items-center">
        <Link href={routes.HOME.path} passHref>
          <a
            onClick={handleNavbarCollapse}
            className="font-bold uppercase tracking-wider text-xs md:text-sm"
          >
            jakubszpil.
          </a>
        </Link>
        <div className="flex items-center justify-end">
          <button
            onClick={handleNavbarToggle}
            className="md:hidden relative z-50"
          >
            <>
              {!expanded ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
            </>
          </button>
          <ul
            className={classNames(
              'flex fixed w-full h-[100vh] top-0 left-0 bg-gray-800 text-gray-400 flex-col justify-center items-center gap-3 text-lg opacity-0 invisible transition-all motion-reduce:transition-none md:static md:bg-transparent md:h-auto md:flex-row md:w-max md:text-base  md:visible md:opacity-100 md:transition-none md:gap-4',
              expanded && '!opacity-100 !visible'
            )}
          >
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.path} passHref>
                  <a onClick={handleNavbarCollapse}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
