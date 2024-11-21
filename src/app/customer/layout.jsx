import { cookies } from 'next/headers';
import Link from 'next/link';

import instance from '@/utils/instance';
import Layout from '@/components/layout';
import ProfileSidebar from '@/components/ProfileSidebar';
import { passSession } from '@/utils/passLaravelSession';

async function getData() {
  const res = await instance.get(
    '/user',
    passSession(cookies().get('session')?.value)
  );
  return res.data;
}

export default async function CustomerLayout({ children }) {
  const data = await getData();

  return (
    <Layout>
      <div className='flex flex-row font-forms mb-5 mt-10'>
        <Link href='/' className='mr-1 underline cursor-pointer'>
          Главная
        </Link>
        <p className='ml-1'>/ Личный кабинет</p>
      </div>
      <section className='mt-20 mb-20 font-forms flex justify-between accountContent px-4'>
        <ProfileSidebar data={data} />
        <div
          data-aos='fade-left'
          className='border max-w-[1100px] w-full flex-col flex justify-center items-center pb-8'
        >
          {children}
        </div>
      </section>
    </Layout>
  );
}
