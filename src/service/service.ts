import { faker } from "@faker-js/faker";
import { getRandomItemFromArray } from "../utils/utils";
import { Filters } from "../stores/AdvisorsStore";

export interface Advisor {
  id: string;
  name: string;
  avatar: string;
  language: string;
  status: string;
  rating: number;
  reviews: number;
  price: number;
}

export const generateAdvisors = (count: number) => {
  const advisors: Advisor[] = [];
  for (let i = 0; i < count; i++) {
    advisors.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatarLegacy(),
      language: getRandomItemFromArray(["English", "German", "Russian"]),
      status: getRandomItemFromArray(["online", "offline"]),
      rating: faker.number.int({ min: 0, max: 5 }),
      reviews: faker.number.int({ min: 0, max: 100 }),
      price: faker.number.int({ min: 0, max: 200 }),
    });
  }
  return advisors;
};
