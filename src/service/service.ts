import { faker } from "@faker-js/faker";
import { getRandomItemFromArray } from "../utils/utils";

export interface Advisor {
  id: string;
  name: string;
  avatar: string;
  language: string;
  status: string;
  rating: number;
  reviews: number;
}

export const generateAdvisors = (count: number) => {
  const advisors: Advisor[] = [];
  for (let i = 0; i < count; i++) {
    advisors.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatarLegacy(),
      rating: faker.number.int({ min: 0, max: 5 }),
      language: getRandomItemFromArray(["English", "German", "Russian"]),
      status: getRandomItemFromArray(["online", "offline"]),
      reviews: faker.number.int({ min: 0, max: 100 }),
    });
  }
  return advisors;
};
