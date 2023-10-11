import { Item } from '../../items/entities/item.entity';

export class Vote {
  id: number;
  value: string;
  timestamp: string;
  item: Item;
  employeeId: string;
}
