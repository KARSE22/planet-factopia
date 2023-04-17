import Navbar from './Navbar';
import Image from 'next/image';

export default function Layout( { children } ) {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>{children}</main>
    </>
  )
}