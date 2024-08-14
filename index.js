const menu = [
  {
    id: 301,
    name: "Pasta",
    category: "Main Course",
    price: 12.99,
    ingredients: ["Penne", "Tomato Sauce", "Parmesan", "Basil"],
  },
  {
    id: 302,
    name: "Caesar Salad",
    category: "Salad",
    price: 8.99,
    ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
  },
  {
    id: 303,
    name: "Burger",
    category: "Main Course",
    price: 10.99,
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun"],
  },
  {
    id: 304,
    name: "French Fries",
    category: "Side Dish",
    price: 4.99,
    ingredients: ["Potatoes", "Salt", "Oil"],
  },
  {
    id: 305,
    name: "Cheesecake",
    category: "Dessert",
    price: 6.99,
    ingredients: ["Cream Cheese", "Graham Cracker Crust", "Strawberries"],
  },
];
/**********
      Question 1:
      You have a function getMenuItemName(menuItem) that:
      - receives a menu item object
      - returns the name of the menu item
      Don't forget to uncomment the console.log
      ===
      ANSWER: Pasta
**********/

function getMenuItemName(menuItem) {
  return menuItem.name;
}
console.log(getMenuItemName(menu[0]));

/**********
      Question 2:
      You have a function isMenuItemInCategory(menuItem, category) that:
      - receives a menu item object
      - receives a category name
      - returns true if the menu item's category matches the provided category name, otherwise returns false
      ===
      ANSWER: true
**********/
// {
//   id: 302,
//   name: "Caesar Salad",
//   category: "Salad",
//   price: 8.99,
//   ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
// },
function isMenuItemInCategory(menuItem, categoryName) {
  if (menuItem["category"] == categoryName) {
    return true;
  } else {
    return false;
  }
}
console.log(isMenuItemInCategory(menu[1], "Salad"));

// Question 3:
// addMenuItem(menu, menuItem):
// - receives an array of menu item objects
// - receives a new menu item object (with id, name, category, price, and ingredients)
// - adds the new menu item to the array
// - returns the updated array

function addMenuItem(menu, newMenuItem) {
  menu.push(newMenuItem);
  return menu; // we need to return the whole updated array after doing changes because push returns number of elements.
}
const newMenuItem = {
  id: 306,
  name: "Pizza",
  category: "Main Course",
  price: 14.99,
  ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
};

console.log(addMenuItem(menu, newMenuItem));

/**********
      Question 4:
      countMainCourseItems(menu):
      - receives an array of menu item objects
      - returns the number of items in the "Main Course" category
      ===
      ANSWER: 3
**********/

function countMainCourseItems(menu) {
  let items = 0;
  menu.forEach((menuObject) => {
    if (menuObject.category == "Main Course") {
      items = items + 1;
    }
  });
  return items;
}
console.log(countMainCourseItems(menu));

/**********
      Question 5: 🌶️
      listMenuItemNamesByCategory(menu, category):
      - receives an array of menu item objects
      - receives a category name
      - returns an array of menu item names that belong to the specified category
      ===
      ANSWER: ["Pasta", "Burger", "Pizza"]
**********/

function listMenuItemNamesByCategory(menu, categoryName) {
  const array = [];
  menu.forEach((menuItem) => {
    if (menuItem.category == categoryName) {
      array.push(menuItem.name);
    }
  });
  return array;
}
console.log(" array of menu item names that belong to the specified category:");
console.log(listMenuItemNamesByCategory(menu, "Main Course"));
// brainstorming Q6:---------------------------------
// function createPricesArray(menu) {
//   let priceArray = [];
//   menu.filter((menuItem) => {
//     return priceArray.push(menuItem.price);
//   });
//   return priceArray;
// }
// console.log("price filter:");
// console.log(createPricesArray(menu));
// ANSWER:
// {
//   "id": 304,
//   "name": "French Fries",
//   "category": "Side Dish",
//   "price": 4.99,
//   "ingredients": ["Potatoes", "Salt", "Oil"]
// }
/**********
    Question 6: 🌶️🌶️
    You have a function getCheapestMenuItem(menu) that:
    - receives an array of menu item objects
    - returns the menu item object with the lowest price
    ===
 
**********/

function getCheapestMenuItem(menu) {
  let cheapestPrice = menu[0];
  menu.filter((menuItems) => {
    if (menuItems.price < cheapestPrice.price) {
      cheapestPrice = menuItems;
    } else {
      return false;
    }
  });
  return cheapestPrice;
}
console.log("here");
console.log(getCheapestMenuItem(menu));
/**********
      Question 7: 🌶️🌶️🌶️
      getMenuItemsByIngredient(menu, ingredient):
      - receives an array of menu item objects
      - receives an ingredient name (string)
      - returns an array of menu item objects that contain the provided ingredient
      ===
      
  **********/

function getMenuItemsByIngredient(menu, ProvidedIngredient) {
  return menu.filter((menuItem) => {
    if (menuItem.ingredients.includes(ProvidedIngredient)) {
      //iwant something includes the ingredient
      return true;
    } else {
      return false;
    }
  });
}
console.log(
  " an array of menu item objects that contain the provided ingredient:"
);
console.log(getMenuItemsByIngredient(menu, "Parmesan"));

// another way of solving:
// function getMenuItemsByIngredient(menu, ProvidedIngredient) {
//   const array2 = [];
//   menu.filter((menuItem) => {
//     if (menuItem.ingredients.includes(ProvidedIngredient)) {
//       array2.push(menuItem);
//     } else {
//       return false;
//     }
//   });
//   return array2;
// }
// console.log("here");
// console.log(getMenuItemsByIngredient(menu, "Parmesan"));

//------

/**********
      Question 8:
      You have a function removeMenuItemById(menu, menuItemId) that:
      - receives an array of menu objects
      - receives a menu item id (number)
      - removes the product with the matching id from the array
      - returns the updated array
     
 **********/

function removeMenuItemById(menu, menuItemId) {
  return menu.filter((menuItems) => {
    if (menuItems.id == menuItemId) {
      return false;
    } else {
      return true;
    }
  });
}
console.log("the updated array:");
console.log(removeMenuItemById(menu, 302));
