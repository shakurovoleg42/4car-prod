import axios from 'axios';

import { generateInvoiceId } from '@/utils/payment';

export async function POST(req) {
  const { amount } = await req.json();
  const invoiceId = generateInvoiceId();

  const data = {
    grant_type: 'client_credentials',
    scope:
      'webapi usermanagement email_send verification statement statistics payment',
    client_id: process.env.NEXT_PUBLIC_EPAY_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_EPAY_CLIENT_SECRET,
    invoiceID: invoiceId,
    amount,
    currency: 'KZT',
    terminal: process.env.NEXT_PUBLIC_EPAY_CLIENT_TERMINAL,
  };

  try {
    const res = await axios.postForm(
      'https://epay-oauth.homebank.kz/oauth2/token',
      data
    );
    return Response.json({ ...res.data, invoiceId });
  } catch (error) {
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
    });
  }
}
