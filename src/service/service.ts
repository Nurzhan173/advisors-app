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

export const generateAdvisors = (count: number, filters: Filters) => {
  const advisors: Advisor[] = [];
  for (let i = 0; i < count; i++) {
    advisors.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatarLegacy(),
      language:
        filters.language !== "All"
          ? filters.language
          : getRandomItemFromArray(["English", "German", "Russian"]),
      status:
        filters.status !== "All"
          ? filters.status
          : getRandomItemFromArray(["online", "offline"]),
      rating:
        filters.sortBy === "rating"
          ? faker.number.int({ min: 4, max: 5 })
          : faker.number.int({ min: 0, max: 5 }),
      reviews:
        filters.sortBy === "reviews"
          ? faker.number.int({ min: 90, max: 100 })
          : faker.number.int({ min: 0, max: 100 }),
      price: faker.number.int({ min: 0, max: 200 }),
    });
  }
  return advisors;
};
