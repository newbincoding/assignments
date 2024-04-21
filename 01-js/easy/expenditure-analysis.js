/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to store the total spent for each category
  const categoryTotals = {};

  // Iterate over each transaction
  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If the category already exists, add the price to the total
      if (categoryTotals.hasOwnProperty(category)) {
          categoryTotals[category] += price;
      } else {
          // If the category doesn't exist, initialize it with the price
          categoryTotals[category] = price;
      }
  });

  // Convert the category totals object into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
      category,
      totalSpent: categoryTotals[category]
  }));

  return result;
}

// console.log(calculateTotalSpentByCategory(transactions))

// // Example transaction object
// const transaction = {
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// };

// // Destructuring assignment
// const { category, price } = transaction;

// console.log(category); // Output: 'Food'
// console.log(price);    // Output: 10

module.exports = calculateTotalSpentByCategory;
