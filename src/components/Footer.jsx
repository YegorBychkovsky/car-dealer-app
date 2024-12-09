import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='max-w-7xl mx-auto text-center'>
        <p className='text-sm mb-2'>&copy; {new Date().getFullYear()} Car Dealer. All rights reserved.</p>
        <div className='space-x-6'>
          <Link href='#' className='hover:text-gray-300'>
            Privacy Policy
          </Link>
          <Link href='#' className='hover:text-gray-300'>
            Terms of Service
          </Link>
          <Link href='#' className='hover:text-gray-300'>
            Help
          </Link>
        </div>
      </div>
    </footer>
  )
}
