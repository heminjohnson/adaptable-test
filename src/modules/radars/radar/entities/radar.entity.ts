export class Trend {
  change: string;
  item: {
    id: number;
    name: string;
    description: string;
    category: {
      id: number;
      name: string;
      description: string;
    };
  };
  value: string;
  timestamp: string;
}

export class Radar {
  name: string;
  trends: Trend[];
}
