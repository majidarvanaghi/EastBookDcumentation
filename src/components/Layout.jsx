'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import { Logo, Logomark } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'

import { DLogo, DLogomark } from '@/components/DLogo'

function GitHubIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
    <path class="cls-1" d="m378.1,113.42c13.12-11.94,21.41-29.09,21.41-48.19,0-35.97-29.26-65.24-65.24-65.24H9.67C4.33,0,0,4.33,0,9.67s4.33,9.67,9.67,9.67h.48v91.78h-.48c-5.34,0-9.67,4.33-9.67,9.67,0,.04.01.07.01.11,0,.04-.01.07-.01.11,0,5.34,4.33,9.67,9.67,9.67h0v91.78h0c-5.34,0-9.67,4.33-9.67,9.67s4.33,9.67,9.67,9.67h352.39c35.97,0,65.24-29.26,65.24-65.24,0-30.43-20.97-55.98-49.19-63.16Zm-43.82-2.3H29.51V19.35h304.78c25.3,0,45.89,20.59,45.89,45.89s-20.58,45.89-45.89,45.89Z"/>    </svg>
  )
}

function Header() {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-neutral-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none',
        isScrolled
          ? 'dark:bg-neutral-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-neutral-900/75'
          : 'dark:bg-transparent',
      )}
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation />
      </div>

      <div className="relative flex flex-grow basis-0">
        <div className=''>
        <Link href="/" aria-label="Home page">
          <Logomark className="h-9 w-24 fill-neutral-700  dark:fill-neutral-100 lg:hidden" />
          <Logo className="hidden h-9 w-auto fill-neutral-700 lg:block dark:fill-neutral-100" />
        </Link>
        </div>
        <div className=''>
        <Link href="/" aria-label="Home page">
          <DLogomark className=" ml-0 h-9 w-24 justify-center lg:hidden" />
          <DLogo className="hidden -ml-14 h-9 justify-center w-auto lg:block" />
        </Link>
        </div>
      </div>

      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div>
      
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <ThemeSelector className="relative z-10" />
        <Link href="#" className="group" aria-label="EastBook App">
          <GitHubIcon className=" h-8 w-8 fill-neutral-400 group-hover:fill-neutral-500 dark:group-hover:fill-neutral-300" />
        </Link>

      </div>

    </header>
  )
}

export function Layout({ children }) {
  let pathname = usePathname()
  let isHomePage = pathname === '/'

  return (
    <div className="flex w-full flex-col">
      <Header />

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-neutral-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-neutral-800 dark:block" />
          <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-neutral-800 dark:block" />
          <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
            <Navigation />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
