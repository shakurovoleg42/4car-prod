import { redirect } from 'next/navigation';
import fetchCart from '@/utils/fetchCart';
import CheckoutOrder from '@/components/CheckoutOrder/CheckoutOrder';
import { cookies } from 'next/headers';
import instance from '@/utils/instance';

export default async function CheckoutOrderPage({ searchParams }) {
  const data = await fetchCart();
  const isOneClick = searchParams.product;
  const session = cookies().get('session')?.value;

  const getSession = async (session) => {
    try {
      const response = await instance.get('/user', {
        headers: {
          Authorization: `Bearer ${session}`,
        },
      });

      // Возвращаем данные из ответа сервера
      return response.data;
    } catch (error) {
      console.error('Ошибка при запросе:', error);
      return null; // Возвращаем null в случае ошибки
    }
  };

  // Получаем данные пользователя
  const userData = await getSession(session);

  if (!userData) {
    console.log('Не удалось получить данные пользователя.');
  } else {
    console.log('Данные пользователя:', userData);
  }

  // Логика редиректа
  if (data.items.length === 0 && !isOneClick) {
    redirect('/cart');
  } else if (data.items.length !== 0 && isOneClick) {
    redirect('/checkout-order');
  }

  return <CheckoutOrder  name={userData.first_name} last_name={userData.last_name}/>;
}
