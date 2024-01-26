interface RequestService {
  fromHotelId: number;
  toHotelId: number;
  destinationCode?: string;
  access_token?: string;
  pax?: number;
}

export type { RequestService };
