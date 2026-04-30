import Link from 'next/link';
import React from 'react';

const Navbar = () => {
   return (
      <div>
         <Link href={"/"}>Home</Link>
         <Link href={"/all-books"}>All Books</Link>
         <Link href={"/my-profile"}>My Profile</Link>
      </div>
   );
};

export default Navbar;