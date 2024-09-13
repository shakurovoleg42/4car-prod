import axios from 'axios';

const generateInvoiceId = () => {
  const timestamp = Date.now().toString(); // Временная метка
  const uniquePart = Math.floor(100000 + Math.random() * 900000).toString(); // 6-значное случайное число

  return timestamp.slice(-4) + uniquePart; // Общая длина будет 10 цифр
};

const handlePayment = async (orderDetails, amount) => {
  try {
    // Запрос на создание платежа
    const res = await axios.post('/api/orders/oauth', { amount });
    const { invoiceId, ...auth } = res.data;
    const backUrl = process.env.NEXT_PUBLIC_URL + '/checkout-order';

    const paymentObject = {
      invoiceId,
      invoiceIdAlt: invoiceId,
      backLink: backUrl,
      failureBackLink: backUrl,
      language: 'RUS',
      description: 'Оплата в интернет магазине',
      accountId: process.env.NEXT_PUBLIC_EPAY_CLIENT_ID,
      terminal: process.env.NEXT_PUBLIC_EPAY_CLIENT_TERMINAL,
      amount,
      name: orderDetails.name,
      currency: 'KZT',
      auth,
    };

    // Возвращаем новый Promise, чтобы дождаться завершения платёжного процесса
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://epay.homebank.kz/payform/payment-api.js';
      script.onload = () => {
        window.halyk.showPaymentWidget(paymentObject, (callbackObject) => {
          if (callbackObject.success) {
            resolve(true); // Платеж успешен
          } else {
            resolve(false); // Платеж не удался
          }
        });
      };
      document.body.appendChild(script);
    });
  } catch (error) {
    // Ловим ошибки и возвращаем false для handleSubmit
    return false; // Не удалось создать платеж
  }
};

export { generateInvoiceId, handlePayment };
