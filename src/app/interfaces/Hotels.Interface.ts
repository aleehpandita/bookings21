interface Hotel {
  id: number;
  name: string;
}

interface SearchHotels {
  destinationCode?: string;
  access_token?: string;
  search: string;
}

export type { Hotel, SearchHotels };
