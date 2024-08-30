'use server';

import { cookies } from 'next/headers';

import instance from '@/utils/instance';

export async function handleLogin(session) {
  cookies().set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
}

export async function getSearchData(query, page = 1) {
  const res = await instance.get('/search', {
    params: { query, page },
  });
  return res.data;
}
