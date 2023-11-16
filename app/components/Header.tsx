import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
      <Link href="/">
          <img src="/images/logo.png" alt="Logo" style={{ height: '50px' }} />
          <p>こんにちは</p>
      </Link>
    </header>
  );
};

export default Header;
