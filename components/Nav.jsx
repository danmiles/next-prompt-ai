'use client';

import React from 'react'
import Link  from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, useProviders } from 'next-auth/react'

function Nav() {
  return (
    <nav className='flex-between w-full pt-3 mb-16'>
      <Link href='/' className='flex gap-2 flex-center'> 
        <Image src='/assets/images/logo.svg' width={40} height={40} alt='logo' />
        <p className="logo_text second-font">Promt-AI</p>
      </Link>
    </nav>
  )
}

export default Nav