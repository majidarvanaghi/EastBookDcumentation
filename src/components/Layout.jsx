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
    <svg aria-hidden="true" viewBox="0 0 24 13.58" {...props}>
    <path class="cls-1" d="m21.24,6.37c.74-.67,1.2-1.63,1.2-2.71,0-2.02-1.64-3.66-3.66-3.66H.54C.24,0,0,.24,0,.54s.24.54.54.54h.03v5.15h-.03c-.3,0-.54.24-.54.54,0,0,0,0,0,0,0,0,0,0,0,0,0,.3.24.54.54.54h0v5.15h0c-.3,0-.54.24-.54.54s.24.54.54.54h19.79c2.02,0,3.66-1.64,3.66-3.66,0-1.71-1.18-3.14-2.76-3.55Zm-2.46-.13H1.66V1.09h17.12c1.42,0,2.58,1.16,2.58,2.58s-1.16,2.58-2.58,2.58Z"/>
    </svg>  )
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
          <GitHubIcon className=" h-6 w-8 fill-neutral-400 group-hover:fill-neutral-500 dark:group-hover:fill-neutral-300" />
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
