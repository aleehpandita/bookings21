import axios from 'axios';

import { ResponseInterface, TokenInterface } from '../interfaces/Api.Interface';
import { SearchAirlines } from '../interfaces/Hotels.Interface';
import { RequestService } from '../interfaces/Service.Interface';

const fs = require('fs');

class ApiFlight {
  private clientHttp: any;

  private clientId: string;

  private clientSecret: string;

  private destinationCode: string;

  private authUrl: string = 'oauth2/get-token/';

  private quoteSingleUrl: string = 'services/quote-single-service/';

  private quoteServicesUrl: string = 'services/quote/';

  private quoteDestinationsServicesUrl: string = 'services/quote-destinations/';

  private bookUrl: string = 'reservations/store/';

  private reservationUrl: string = 'reservations/:id:/show/';

  private reservationFerryUrl: string = 'reservations/ferry/:id:/';

  private confirmReservationFerryUrl: string = 'reservations/ferry/confirm/';

  private reservationVipLoungeUrl: string = 'reservations/vip-lounge/:id:/';

  private confirmReservationViploungeUrl: string = 'reservations/vip-lounge/confirm/';

  private bookFerryUrl: string = 'reservations/ferry/';

  private ratesFerryUrl: string = 'services/quote-ferry/';

  private searchHoltesUrl: string = 'hotels/search/';

  private bookVipLoungeUrl: string = 'reservations/vip-lounge/';

  constructor(clientId: string, secret: string, destinationCode: string) {
    this.clientId = clientId;
    this.clientSecret = secret;
    this.destinationCode = destinationCode;
    this.clientHttp = axios.create({
      baseURL: 'http://apiv1.feraltar.com/',
      headers: {
        Accept: 'applications/json',
        'Content-Type': 'application/json',
      },
    });
  }

  

  public searchHotels = async (data: SearchHotels) => {
    const formData = { ...data };
    // const token = await this.getToken();
    // formData.access_token = token.access_token;
    // formData.destinationCode = this.destinationCode;
    // return this.clientHttp
    //   .get(this.searchHoltesUrl, {
    //     params: formData,
    //     /* headers : {
    //     'Content-Type': 'application/json',
    //     'Authorization': "Bearer "+token.access_token
    //   } */
    //   })
    //   .then((response: any) => {
    //     const rs: ResponseInterface = {
    //       meta: response.data.meta,
    //       payload: response.data.data,
    //     };
    //     return rs;
    //   })
    //   .catch((error: any) => this.handleHttpError(error));
  };

  public quoteServices = async (data: RequestService) => {
    const formData = {
      ...data,
    };
    // const token = await this.getToken();
    // formData.access_token = token.access_token ?? '';
    // formData.destinationCode = this.destinationCode;
    // return this.clientHttp
    //   .get(this.quoteServicesUrl, {
    //     params: formData,
    //   })
    //   .then((response: any) => {
    //     //
    //     const rs: ResponseInterface = {
    //       meta: response.data.meta,
    //       payload: response.data.data,
    //     };
    //     return rs;
    //   })
    //   .catch((error: any) => this.handleHttpError(error));
  };

 
  public async getReservationVipLounge(id: string) {
    // const token = await this.getToken();
    // const data = {
    //   access_token: token.access_token,
    //   destinationCode: this.destinationCode,
    //   reservation_id: id,
    // };
    // const reservationUrl = this.reservationVipLoungeUrl.replace(':id:', id);
    // return this.clientHttp
    //   .get(reservationUrl, {
    //     params: data,
    //     /* headers : {
    //     'Content-Type': 'application/json',
    //     'Authorization': "Bearer "+token.access_token
    //   } */
    //   })
    //   .then((response: any) => {
    //     const rs: ResponseInterface = {
    //       meta: response.data.meta,
    //       payload: response.data.data,
    //     };
    //     return rs;
    //   })
    //   .catch((error: any) => this.handleHttpError(error));
  }

  private handleHttpError = (error: any) => {
    let rs: ResponseInterface;
    if (error.response) {
      rs = {
        meta: error.response.data.meta,
        payload: error.response.data.data,
        error: {
          message: error.message,
          status: error.response.status,
          headers: error.response.headers,
        },
      };
    } else {
      rs = {
        meta: {},
        payload: {},
        error: {
          message: error.message,
          status: '',
          headers: '',
        },
      };
    }
    // eslint-disable-next-line no-empty
    if (process.env.env === 'dev') {
    }
    return rs;
  };
}

export { ApiFlight };
