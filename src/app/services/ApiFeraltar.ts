import axios from 'axios';
import { format, parseISO } from 'date-fns';

import * as config from '../config';
import { ResponseInterface, TokenInterface } from '../interfaces/Api.Interface';
import { SearchHotels } from '../interfaces/Hotels.Interface';
import { RequestService } from '../interfaces/Service.Interface';
import { unWrapAxiosData } from '../utils/api-helpers';

const fs = require('fs');
const path = require('path');

class ApiFeraltar {
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
      baseURL: 'https://apiv1.feraltar.com',
      headers: {
        Accept: 'applications/json',
        'Content-Type': 'application/json',
      },
    });
  }

  public validToken = (token: TokenInterface) => {
    const expireDate = new Date(token.expireDate);
    const now = new Date();
    return now <= expireDate;
  };

  public getToken = async () => {
    let data;
    if (fs.existsSync('api/token.json')) {
      data = fs.readFileSync('api/token.json', 'utf8');
      // var data = fs.readFileSync('static/token.json', 'utf8');
      const currentToken = JSON.parse(data);
      if (Object.keys(currentToken).length > 0) {
        if (this.validToken(currentToken)) {
          return currentToken;
        }
        const token = await this.setToken();
        return token;
      }
      const token = await this.setToken();
      return token;
    }
    const token = await this.setToken();
    return token;
  };

  private setToken = async () => {
    // const getTokenUrl = `oauth2/get-token/`;
    const newToken = await this.clientHttp
      .post(this.authUrl, {
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
      })
      .then((response: any) => response.data);
    const now = new Date();
    newToken.requestDate = now.toISOString();
    newToken.expireDate = now.setHours(11);
    const tokenString = JSON.stringify(newToken);
    fs.writeFile(`${path.resolve()}/src/services/api/token.json`, tokenString, (err: any) => {
      if (err) {
        return newToken;
      }
      return newToken;
    });
    return newToken;
  };

  public searchHotels = async (data: SearchHotels) => {
    const formData = { ...data };
    const token = await this.getToken();
    formData.access_token = token.access_token;
    formData.destinationCode = this.destinationCode;
    return this.clientHttp
      .get(this.searchHoltesUrl, {
        params: formData,
        /* headers : {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token.access_token
      } */
      })
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => {
        // eslint-disable-next-line no-console
        console.error(error);
        return error;
      });
  };

  public quoteServices = async (data: RequestService) => {
    const formData = {
      ...data,
    };
    const token = await this.getToken();
    formData.access_token = token.access_token ?? '';
    formData.destinationCode = this.destinationCode;
    return this.clientHttp
      .get(this.quoteServicesUrl, {
        params: formData,
      })
      .then((response: any) => {
        //
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public quoteSingleService = async (data: any) => {
    const formData = { ...data };
    const token = await this.getToken();
    //
    formData.access_token = token.access_token;
    formData.destinationCode = this.destinationCode;
    return this.clientHttp
      .get(this.quoteSingleUrl, {
        params: data,
        /* headers : {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token.access_token
      } */
      })
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public quoteDestinationsServices = async (data: any) => {
    const formData = { ...data };
    const token = await this.getToken();
    //
    formData.access_token = token.access_token;
    formData.destinationCode = this.destinationCode;
    return this.clientHttp
      .get(this.quoteDestinationsServicesUrl, {
        params: formData,
        /* headers : {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token.access_token
      } */
      })
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public bookService = async (data: any) => {
    const request = { ...data };
    const token = await this.getToken();
    request.access_token = token.access_token;
    request.destinationCode = this.destinationCode;
    if (config.SEVICES_THAT_NEEDS_TO_AND_FOM_INFORMATION.includes(request.serviceType)) {
      request.arrivalDateTime = format(parseISO(request.arrivalDateTime), 'yyyy-MM-dd HH:mm');
      request.departureDateTime = format(parseISO(request.departureDateTime), 'yyyy-MM-dd HH:mm');
    } else if (config.SEVICES_THAT_NEEDS_TO_INFORMATION.includes(request.serviceType)) {
      request.departureDateTime = format(parseISO(request.departureDateTime), 'yyyy-MM-dd HH:mm');
    } else {
      request.arrivalDateTime = format(parseISO(request.arrivalDateTime), 'yyyy-MM-dd HH:mm');
    }
    return this.clientHttp
      .post(this.bookUrl, request)
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public bookVipLounge = async (data: any) => {
    const formData = { ...data };
    const token = await this.getToken();
    formData.access_token = token.access_token;
    formData.destinationCode = this.destinationCode;
    // Mandar Correo en el webhook o IPN
    // const {ReservationVip} = require('../api/mails/ReservationVip');
    try {
      return this.clientHttp.post(this.bookVipLoungeUrl, data).then(async (response: any) => {
        if (data.data.meta && data.data.data) {
          return {
            meta: response.data.meta,
            payload: response.data.data,
          };
        }
        throw new Error(`failed${data.data}`);
      });
    } catch (e) {
      return e;
    }
  };

  public bookFerry = async (data: any) => {
    const formData = { ...data };
    const token = await this.getToken();
    formData.access_token = token.access_token;
    formData.destinationCode = this.destinationCode;
    // Mandar Correo en el webhook o IPN
    // const {ReservationFerry} = require('../api/mails/ReservationFerry')
    return this.clientHttp
      .post(this.bookFerryUrl, data)
      .then(async (response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        // const email = new ReservationFerry(rs.payload)
        // await email.send()
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public getRatesFerryByRutaId = async (id: string) => {
    const token = await this.getToken();
    const data: object = {
      id,
      access_token: token.access_token,
      destinationCode: this.destinationCode,
    };
    return this.clientHttp
      .post(this.ratesFerryUrl, data)
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public getReservation = async (id: string) => {
    const token = await this.getToken();
    const data = {
      access_token: token.access_token,
      destinationCode: this.destinationCode,
    };
    const reservationUrl = this.reservationUrl.replace(':id:', id);
    return this.clientHttp
      .get(reservationUrl, {
        params: data,
        /* headers : {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token.access_token
      } */
      })
      .then((response: any) => unWrapAxiosData(response))
      .catch((error: any) => this.handleHttpError(error));
  };

  public getReservationFerry = async (id: string) => {
    const token = await this.getToken();
    const data = {
      access_token: token.access_token,
      destinationCode: this.destinationCode,
    };
    const reservationUrl = this.reservationFerryUrl.replace(':id:', id);
    return this.clientHttp
      .get(reservationUrl, {
        params: data,
        /* headers : {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token.access_token
      } */
      })
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public confirmReservationFerry = async (id: string) => {
    const token = await this.getToken();
    const data = {
      access_token: token.access_token,
      id,
      destinationCode: this.destinationCode,
    };
    return this.clientHttp
      .post(this.confirmReservationFerryUrl, data)
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public confirmReservationViplounge = async (id: string) => {
    const token = await this.getToken();
    const data = {
      access_token: token.access_token,
      id,
      destinationCode: this.destinationCode,
    };
    return this.clientHttp
      .post(this.confirmReservationViploungeUrl, data)
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
  };

  public async getReservationVipLounge(id: string) {
    const token = await this.getToken();
    const data = {
      access_token: token.access_token,
      destinationCode: this.destinationCode,
      reservation_id: id,
    };
    const reservationUrl = this.reservationVipLoungeUrl.replace(':id:', id);
    return this.clientHttp
      .get(reservationUrl, {
        params: data,
        /* headers : {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token.access_token
      } */
      })
      .then((response: any) => {
        const rs: ResponseInterface = {
          meta: response.data.meta,
          payload: response.data.data,
        };
        return rs;
      })
      .catch((error: any) => this.handleHttpError(error));
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

export { ApiFeraltar };
