import { faker } from "@faker-js/faker";

export interface Advisor {
  id: string;
  name: string;
  avatar: string;
}

export const generateAdvisors = (count: number) => {
  const advisors: Advisor[] = [];
  for (let i = 0; i < count; i++) {
    advisors.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatarLegacy(),
    });
  }
  return advisors;
};
