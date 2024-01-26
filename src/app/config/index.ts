import { services } from '../utils/mocks/services';

export const Config = {
  algoliaConfig: {
    appId: process.env.ALGOLIA_APP_ID || '',
    apiKey: process.env.ALGOLIA_API_KEY || '',
    searchKey: process.env.ALGOLIA_API_KEY || '',
    indexName: '',
  },
  site_name: 'CancunTransfersVip',
  title: 'Cancun Index VIP in Cancun and Riviera Maya',
  description: 'Luxury and VIP Index in Cancun and Riviera Maya',
  locale: 'en',
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.DOMAIN_NAME}`
      : `http://localhost:${process.env.PORT ?? 8080}`,
};
export const CURRENCY = 'USD';
// Set your amount limits: Use float for decimal currencies and
// Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
export const MIN_AMOUNT = 10.0;
export const MAX_AMOUNT = 5000.0;
export const AMOUNT_STEP = 5.0;
export const API_URL = process.env.API_URL ?? 'http://localhost:3000';
export const API_VERSION = process.env.API_VERSION ?? '/api/v1';
export const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY
  ?? 'pk_test_51H6SoZHwksdYo6Tsr1wmcZj71drbdy7VARLW21J9zneKHcX811jLZACwGRnWTVFBWB1iD9bCFxskQ7od5VTJINcj00r95qdgMH';
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
  ?? 'sk_test_51H6SoZHwksdYo6TsskTIaAsR7kBsIagKU9WDzBVgrBAeqXN27XS27DUWS4plhCa1rz5lPxLcBqpCJcLjuQgCgcTP00ikR4IAe1';
export const STRIPE_PAYMENT_DESCRIPTION = 'Shopping cart in handicraft shop';
export const SEVICES_THAT_NEEDS_TO_AND_FOM_INFORMATION = ['round trip', 'open_service'];
export const SEVICES_THAT_NEEDS_TO_INFORMATION = ['departure'];
export const SEVICES_THAT_NEEDS_FROM_INFORMATION = ['arrival'];

const airportServicesList = [...services];
const transportationServiceConfig = {
  airportServices: airportServicesList,
};
export { transportationServiceConfig };
