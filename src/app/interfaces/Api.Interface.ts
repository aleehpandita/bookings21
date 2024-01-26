interface ResponseInterface {
  meta: any;
  payload: any;
  error?: any;
}

interface TokenInterface {
  access_token: string;
  expireDate: string;
  type: string;
}
export type { ResponseInterface, TokenInterface };
