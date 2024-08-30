import Link from 'next/link';

import Layout from '@/components/layout';
import ProfileSidebar from '@/components/ProfileSidebar';

export default function CustomerLayout({ children }) {
  return (
    <Layout>
      <div className='flex flex-row font-body mb-5 mt-10'>
        <Link href='/' className='mr-1 underline cursor-pointer'>
          Главная
        </Link>
        <p className='ml-1'>/ Личный кабинет</p>
      </div>
      <section className='mt-20 mb-20 font-body flex justify-between accountContent px-4'>
        <ProfileSidebar />
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
