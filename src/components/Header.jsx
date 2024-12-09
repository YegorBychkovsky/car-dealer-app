import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-blue-600 text-white p-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='text-lg font-bold'>
          <Link href='/' className='hover:text-gray-300'>
            Car Dealer
          </Link>
        </div>
        <nav className='space-x-6'>
          <Link href='/' className='hover:text-gray-300'>
            Home
          </Link>
          <Link href='/about' className='hover:text-gray-300'>
            About
          </Link>
          <Link href='/contact' className='hover:text-gray-300'>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
