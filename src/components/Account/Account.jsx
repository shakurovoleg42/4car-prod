'use client';

import './Account.css';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import History from '../templates/History';
import Cart from '../templates/Cart';
import EditAccount from '../templates/EditAccount';

const Account = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState('/user.jpg');

  const pathname = usePathname();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  switch (pathname) {
    case '/customer/cart':
      return <Cart data={data} />;
    case '/customer/settings':
      return (
        <EditAccount myFunc={handleImageChange} imgSelect={selectedImage} />
      );
    default:
      return <History data={data} />;
  }
};

export default Account;
