const express = require("express");
const { faker, simpleFaker } = require("@faker-js/faker");

const app = express();
const PORT = 3001;

// Generate advisors route
app.get("/api/advisors", (req, res) => {
  const count = req.query.count || 5; // default count to 5 if not provided
  const filters = {
    language: req.query.language || "All",
    status: req.query.status || "All",
    sortBy: req.query.sortBy || "rating", // default sortBy to 'rating' if not provided
  };

  const advisors = generateAdvisors(count, filters);

  res.json(advisors);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateAdvisors(count, filters) {
  const advisors = [];
  for (let i = 0; i < count; i++) {
    advisors.push({
      id: simpleFaker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
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
          ? simpleFaker.datatype.number({ min: 4, max: 5 })
          : simpleFaker.datatype.number({ min: 0, max: 5 }),
      reviews:
        filters.sortBy === "reviews"
          ? simpleFaker.datatype.number({ min: 90, max: 100 })
          : simpleFaker.datatype.number({ min: 0, max: 100 }),
      price: simpleFaker.datatype.number({ min: 0, max: 200 }),
      description: faker.lorem.paragraph({ min: 1, max: 3 }),
    });
  }
  return advisors;
}
