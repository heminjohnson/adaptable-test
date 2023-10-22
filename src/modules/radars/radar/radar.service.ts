import { Injectable } from "@nestjs/common";
import { Radar } from "./entities/radar.entity";

@Injectable()
export class RadarService {
  findAll(): Radar {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Month is zero-based (0-11)

    // Calculate the current quarter and year
    const currentQuarter = Math.floor(currentMonth / 3) + 1; // Quarters are 1-based (1-4)
    const currentYear = currentDate.getFullYear();

    const trends = [
      {
        change: 'neutral',
        item: {
          id: 18,
          name: 'YAML',
          description:
            'Yet another modeling language, popular for configurations or specifications',
          category: {
            id: 3,
            name: 'Methods, Standards and Architectures',
            description:
              'How are we achieving an objective? (e.g. SAFe Framwork, Sustainable architecture, agile software development, continuous delivery, continuous testing, Mikroservices)',
          },
        },
        value: 'assess',
        timestamp: '2023-08-31T10:15:30.123Z',
      },
    ];

    return {
      name: `Radar Q${currentQuarter}/${currentYear}`,
      trends,
    };
  }
}
