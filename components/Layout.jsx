import Navbar from './Navbar';
import Image from 'next/image';

export default function Layout( { children } ) {
  return (
    <>
      {/* <Image
        src="../assets/background-stars.svg"
        alt= "Stars background"
        fill
        priority
      /> */}
      <Navbar/>
      <main>{children}</main>
    </>
  )
}