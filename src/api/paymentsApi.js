import client from './axiosClient';

const paymentsApi = {
  createHotelCheckout: (payload) =>
    client.post('/payments/create-checkout-session', payload),
};

export default paymentsApi;
