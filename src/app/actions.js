'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function handleLogin(session) {
  cookies().set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  redirect('/account');
}
