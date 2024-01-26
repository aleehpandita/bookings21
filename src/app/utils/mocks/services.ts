enum RateTypes {
  OW = 'One Way',
  RT = 'Round Trip',
}
interface ServiceInterface {
  id: number;
  slug: string;
  description: string;
  isAirport?: boolean;
  rateType: RateTypes;
}
const services: ServiceInterface[] = [
  {
    id: 1,
    slug: 'round trip',
    description: 'Redondo - Aeropuerto ↔ Hotel',
    isAirport: true,
    rateType: RateTypes.OW,
  },
  {
    id: 2,
    slug: 'arrival',
    description: 'Llegada - Aeropuerto → Hotel',
    isAirport: true,
    rateType: RateTypes.OW,
  },
  {
    id: 3,
    slug: 'departure',
    description: 'Salida - Hotel → Aeropuerto',
    isAirport: true,
    rateType: RateTypes.OW,
  },
  {
    id: 4,
    slug: 'transfer_one_way',
    description: 'Transportación Ida - Hotel → Hotel',
    isAirport: false,
    rateType: RateTypes.OW,
  },
  {
    id: 5,
    slug: 'transfer_round_trip',
    description: 'Round Trip Index - Hotel ↔ Hotel',
    isAirport: false,
    rateType: RateTypes.RT,
  },
];

export { services };
