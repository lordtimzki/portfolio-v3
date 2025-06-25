import Link from 'next/link'
import { ModeToggle } from './ui/themetoggle'

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
    'https://drive.google.com/file/d/1rU5XwFIH4-AJsbPFcGL4TD7oq85e6Yqk/view?usp=sharing': {
      name: 'resume'
    }
  ,
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-between"
          id="nav"
        >
          <div className="flex flex-row space-x-0 ">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}
