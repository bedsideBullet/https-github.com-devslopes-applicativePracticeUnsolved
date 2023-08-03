/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  const yearCounts = {};

  const discoveryYears = data.asteroids.map(
    (asteroid) => asteroid.discoveryYear
  );

  for (const year of discoveryYears) {
    yearCounts[year] = (yearCounts[year] || 0) + 1;
  }

  const greatestYear = maxBy(
    Object.entries(yearCounts),
    ([year, count]) => count
  );

  return parseInt(greatestYear[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
