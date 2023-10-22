import { Item } from "../../items/entities/item.entity";

export class Trend {
  change: string;
  item: Item;
  value: string;
  timestamp: string;
}

export class Radar {
  name: string;
  trends: Trend[];
}
