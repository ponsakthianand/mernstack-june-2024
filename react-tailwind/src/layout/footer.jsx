const Footer = () => {
  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800'>
      <nav className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'>
        <a
          className='flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white'
          href='#'
          aria-label='Brand'
        >
          Brand
        </a>
        <div className='flex flex-row text-[white] items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5'>
          &copy; 2024
        </div>
      </nav>
    </header>
  );
};

export default Footer;
