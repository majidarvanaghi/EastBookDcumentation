import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-neutral-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
  secondary:
    'rounded-full bg-neutral-700 py-2 px-4 text-sm font-medium text-neutral-400 hover:bg-neutral-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-neutral-400',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(variantStyles[variant], className)

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
