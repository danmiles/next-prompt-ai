'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

function Nav() {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // useEffect(() => {
  //   const setProviders = async () => {
  //     const reponse = await getProviders();
  //     setProviders(reponse);
  //   };
  //   setProviders();
  // }, []);
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
      {/* Descktop nav start */}
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
      {/* Descktop nav end */}
      {/* Mobile nav start */}
      <div className="sm:hidden flex relative gap-3">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
              alt="profile"
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  className="dropdown_link"
                  href={`/profile`}
                  onClick={() => setToggleDropdown(false)}
                >
                  My profile
                </Link>
                <Link
                  className="dropdown_link"
                  href={`/create-promt`}
                  onClick={() => setToggleDropdown(false)}
                >
                  Create prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  onClick={() => setToggleDropdown((prev) => !prev)}
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
