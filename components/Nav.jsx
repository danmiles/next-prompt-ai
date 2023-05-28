'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

function Nav() {
  const isUserLoggedIn = false;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const reponse = await getProviders();
      setProviders(reponse);
    };
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full pt-3 mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={40}
          height={40}
          alt="logo"
        />
        <p className="logo_text second-font">Promt-AI</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-promt" className="black_btn">
              Create post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              {' '}
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  onClick={() => signIn(provider.id)}
                  className="outline_btn"
                >
                  {' '}
                  Sign In with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
