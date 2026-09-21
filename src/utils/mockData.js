export const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.5,
    deliveryTime: "25-30 min",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    menu: [
      {
        id: 101,
        name: "Butter Chicken",
        description: "Chicken cooked in creamy tomato and butter sauce",
        price: 15.99,
        category: "Main Course",
        isVeg: false
      },
      {
        id: 102,
        name: "Paneer Tikka",
        description: "Grilled cottage cheese with Indian spices",
        price: 12.99,
        category: "Starters",
        isVeg: true
      },
      {
        id: 103,
        name: "Garlic Naan",
        description: "Soft naan topped with garlic and coriander",
        price: 4.99,
        category: "Bread",
        isVeg: true
      },
      {
        id: 104,
        name: "Chicken Biryani",
        description: "Fragrant basmati rice cooked with spiced chicken",
        price: 16.99,
        category: "Rice",
        isVeg: false
      }
    ]
  },

  {
    id: 2,
    name: "Burger House",
    cuisine: "Burgers",
    rating: 4.3,
    deliveryTime: "20-25 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    menu: [
      {
        id: 201,
        name: "Classic Beef Burger",
        description: "Beef patty with lettuce, tomato and cheese",
        price: 14.99,
        category: "Burgers",
        isVeg: false
      },
      {
        id: 202,
        name: "Chicken Burger",
        description: "Crispy chicken with lettuce and special sauce",
        price: 13.99,
        category: "Burgers",
        isVeg: false
      },
      {
        id: 203,
        name: "Veggie Burger",
        description: "Plant-based patty with fresh vegetables",
        price: 11.99,
        category: "Burgers",
        isVeg: true
      },
      {
        id: 204,
        name: "French Fries",
        description: "Crispy golden fries with sea salt",
        price: 5.99,
        category: "Sides",
        isVeg: true
      }
    ]
  },

  {
    id: 3,
    name: "Pizza Corner",
    cuisine: "Italian",
    rating: 4.6,
    deliveryTime: "30-35 min",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    menu: [
      {
        id: 301,
        name: "Margherita Pizza",
        description: "Tomato, mozzarella and fresh basil",
        price: 16.99,
        category: "Pizza",
        isVeg: true
      },
      {
        id: 302,
        name: "Chicken Supreme",
        description: "Chicken, peppers, onions and mozzarella",
        price: 19.99,
        category: "Pizza",
        isVeg: false
      },
      {
        id: 303,
        name: "Pepperoni Pizza",
        description: "Pepperoni, mozzarella and tomato sauce",
        price: 18.99,
        category: "Pizza",
        isVeg: false
      },
      {
        id: 304,
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter",
        price: 6.99,
        category: "Sides",
        isVeg: true
      }
    ]
  },

  {
    id: 4,
    name: "Sushi World",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "35-40 min",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    menu: [
      {
        id: 401,
        name: "Salmon Sushi",
        description: "Fresh salmon served over seasoned sushi rice",
        price: 14.99,
        category: "Sushi",
        isVeg: false
      },
      {
        id: 402,
        name: "California Roll",
        description: "Crab, avocado and cucumber sushi roll",
        price: 12.99,
        category: "Sushi",
        isVeg: false
      },
      {
        id: 403,
        name: "Vegetable Sushi Roll",
        description: "Avocado, cucumber and carrot roll",
        price: 10.99,
        category: "Sushi",
        isVeg: true
      },
      {
        id: 404,
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu",
        price: 5.99,
        category: "Soup",
        isVeg: true
      }
    ]
  },

  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.4,
    deliveryTime: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
    menu: [
      {
        id: 501,
        name: "Chicken Tacos",
        description: "Soft tortillas filled with spicy grilled chicken",
        price: 11.99,
        category: "Tacos",
        isVeg: false
      },
      {
        id: 502,
        name: "Beef Burrito",
        description: "Beef, rice, beans, cheese and salsa",
        price: 14.99,
        category: "Burritos",
        isVeg: false
      },
      {
        id: 503,
        name: "Veggie Tacos",
        description: "Grilled vegetables, beans and fresh salsa",
        price: 10.99,
        category: "Tacos",
        isVeg: true
      },
      {
        id: 504,
        name: "Nachos",
        description: "Crispy tortilla chips with cheese and salsa",
        price: 8.99,
        category: "Sides",
        isVeg: true
      }
    ]
  },

  {
    id: 6,
    name: "Green Leaf Cafe",
    cuisine: "Healthy",
    rating: 4.2,
    deliveryTime: "20-25 min",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999",
    menu: [
      {
        id: 601,
        name: "Quinoa Salad",
        description: "Quinoa with cucumber, tomato and avocado",
        price: 12.99,
        category: "Salads",
        isVeg: true
      },
      {
        id: 602,
        name: "Chicken Salad",
        description: "Grilled chicken with mixed greens",
        price: 14.99,
        category: "Salads",
        isVeg: false
      },
      {
        id: 603,
        name: "Avocado Toast",
        description: "Sourdough toast topped with fresh avocado",
        price: 9.99,
        category: "Breakfast",
        isVeg: true
      },
      {
        id: 604,
        name: "Fresh Fruit Bowl",
        description: "Seasonal fruits served with yogurt",
        price: 8.99,
        category: "Dessert",
        isVeg: true
      }
    ]
  },

  {
    id: 7,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.5,
    deliveryTime: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d",
    menu: [
      {
        id: 701,
        name: "Chicken Fried Rice",
        description: "Fried rice with chicken, vegetables and egg",
        price: 13.99,
        category: "Rice",
        isVeg: false
      },
      {
        id: 702,
        name: "Vegetable Noodles",
        description: "Stir-fried noodles with fresh vegetables",
        price: 11.99,
        category: "Noodles",
        isVeg: true
      },
      {
        id: 703,
        name: "Sweet and Sour Chicken",
        description: "Crispy chicken with sweet and sour sauce",
        price: 15.99,
        category: "Main Course",
        isVeg: false
      },
      {
        id: 704,
        name: "Spring Rolls",
        description: "Crispy vegetable spring rolls",
        price: 7.99,
        category: "Starters",
        isVeg: true
      }
    ]
  },

  {
    id: 8,
    name: "The Pasta House",
    cuisine: "Italian",
    rating: 4.4,
    deliveryTime: "25-30 min",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    menu: [
      {
        id: 801,
        name: "Penne Arrabbiata",
        description: "Penne pasta in spicy tomato sauce",
        price: 13.99,
        category: "Pasta",
        isVeg: true
      },
      {
        id: 802,
        name: "Chicken Alfredo",
        description: "Creamy Alfredo pasta with grilled chicken",
        price: 16.99,
        category: "Pasta",
        isVeg: false
      },
      {
        id: 803,
        name: "Lasagna",
        description: "Layers of pasta, meat sauce and cheese",
        price: 17.99,
        category: "Pasta",
        isVeg: false
      },
      {
        id: 804,
        name: "Bruschetta",
        description: "Toasted bread with tomato and basil",
        price: 7.99,
        category: "Starters",
        isVeg: true
      }
    ]
  },

  {
    id: 9,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "30-35 min",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    menu: [
      {
        id: 901,
        name: "Lamb Rogan Josh",
        description: "Slow-cooked lamb in aromatic curry",
        price: 18.99,
        category: "Main Course",
        isVeg: false
      },
      {
        id: 902,
        name: "Palak Paneer",
        description: "Paneer cooked in creamy spinach gravy",
        price: 14.99,
        category: "Main Course",
        isVeg: true
      },
      {
        id: 903,
        name: "Dal Tadka",
        description: "Yellow lentils tempered with Indian spices",
        price: 11.99,
        category: "Main Course",
        isVeg: true
      },
      {
        id: 904,
        name: "Jeera Rice",
        description: "Basmati rice cooked with cumin",
        price: 7.99,
        category: "Rice",
        isVeg: true
      }
    ]
  },

  {
    id: 10,
    name: "Seoul Kitchen",
    cuisine: "Korean",
    rating: 4.5,
    deliveryTime: "30-40 min",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    menu: [
      {
        id: 1001,
        name: "Bibimbap",
        description: "Rice bowl with vegetables, egg and Korean sauce",
        price: 15.99,
        category: "Rice",
        isVeg: true
      },
      {
        id: 1002,
        name: "Korean Fried Chicken",
        description: "Crispy chicken with Korean spicy glaze",
        price: 17.99,
        category: "Chicken",
        isVeg: false
      },
      {
        id: 1003,
        name: "Kimchi Fried Rice",
        description: "Fried rice with Korean kimchi",
        price: 13.99,
        category: "Rice",
        isVeg: true
      },
      {
        id: 1004,
        name: "Korean Dumplings",
        description: "Steamed dumplings served with soy sauce",
        price: 9.99,
        category: "Starters",
        isVeg: false
      }
    ]
  },

  {
    id: 11,
    name: "Mediterranean Grill",
    cuisine: "Mediterranean",
    rating: 4.6,
    deliveryTime: "25-30 min",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554",
    menu: [
      {
        id: 1101,
        name: "Chicken Shawarma",
        description: "Grilled chicken with garlic sauce and salad",
        price: 13.99,
        category: "Wraps",
        isVeg: false
      },
      {
        id: 1102,
        name: "Falafel Wrap",
        description: "Crispy falafel with hummus and salad",
        price: 11.99,
        category: "Wraps",
        isVeg: true
      },
      {
        id: 1103,
        name: "Hummus Plate",
        description: "Creamy hummus served with warm pita",
        price: 8.99,
        category: "Starters",
        isVeg: true
      },
      {
        id: 1104,
        name: "Greek Salad",
        description: "Fresh vegetables, olives and feta cheese",
        price: 10.99,
        category: "Salads",
        isVeg: true
      }
    ]
  },

  {
    id: 12,
    name: "Ocean Seafood",
    cuisine: "Seafood",
    rating: 4.3,
    deliveryTime: "35-45 min",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    menu: [
      {
        id: 1201,
        name: "Grilled Salmon",
        description: "Fresh salmon fillet grilled with herbs",
        price: 22.99,
        category: "Seafood",
        isVeg: false
      },
      {
        id: 1202,
        name: "Fish and Chips",
        description: "Crispy battered fish with fries",
        price: 17.99,
        category: "Seafood",
        isVeg: false
      },
      {
        id: 1203,
        name: "Garlic Prawns",
        description: "Prawns cooked with garlic butter",
        price: 19.99,
        category: "Seafood",
        isVeg: false
      },
      {
        id: 1204,
        name: "Garden Salad",
        description: "Fresh mixed green salad",
        price: 8.99,
        category: "Salads",
        isVeg: true
      }
    ]
  },

  {
    id: 13,
    name: "Breakfast Club",
    cuisine: "Breakfast",
    rating: 4.4,
    deliveryTime: "15-20 min",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
    menu: [
      {
        id: 1301,
        name: "Pancakes",
        description: "Fluffy pancakes with maple syrup",
        price: 10.99,
        category: "Breakfast",
        isVeg: true
      },
      {
        id: 1302,
        name: "Egg Benedict",
        description: "Poached eggs with hollandaise sauce",
        price: 13.99,
        category: "Breakfast",
        isVeg: false
      },
      {
        id: 1303,
        name: "French Toast",
        description: "Golden toast with berries and maple syrup",
        price: 11.99,
        category: "Breakfast",
        isVeg: true
      },
      {
        id: 1304,
        name: "Fruit Smoothie",
        description: "Fresh seasonal fruit blended with yogurt",
        price: 7.99,
        category: "Drinks",
        isVeg: true
      }
    ]
  },

  {
    id: 14,
    name: "BBQ Nation",
    cuisine: "BBQ",
    rating: 4.5,
    deliveryTime: "35-40 min",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
    menu: [
      {
        id: 1401,
        name: "BBQ Chicken",
        description: "Grilled chicken with smoky BBQ sauce",
        price: 17.99,
        category: "BBQ",
        isVeg: false
      },
      {
        id: 1402,
        name: "BBQ Ribs",
        description: "Slow-cooked pork ribs with BBQ sauce",
        price: 21.99,
        category: "BBQ",
        isVeg: false
      },
      {
        id: 1403,
        name: "Grilled Corn",
        description: "Corn grilled with butter and herbs",
        price: 6.99,
        category: "Sides",
        isVeg: true
      },
      {
        id: 1404,
        name: "Coleslaw",
        description: "Fresh cabbage and carrot salad",
        price: 5.99,
        category: "Sides",
        isVeg: true
      }
    ]
  },

  {
    id: 15,
    name: "Thai Spice",
    cuisine: "Thai",
    rating: 4.7,
    deliveryTime: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    menu: [
      {
        id: 1501,
        name: "Pad Thai",
        description: "Thai noodles with vegetables and peanuts",
        price: 14.99,
        category: "Noodles",
        isVeg: true
      },
      {
        id: 1502,
        name: "Green Curry",
        description: "Thai green curry with vegetables",
        price: 15.99,
        category: "Curry",
        isVeg: true
      },
      {
        id: 1503,
        name: "Chicken Satay",
        description: "Grilled chicken skewers with peanut sauce",
        price: 12.99,
        category: "Starters",
        isVeg: false
      },
      {
        id: 1504,
        name: "Tom Yum Soup",
        description: "Spicy and sour Thai soup",
        price: 9.99,
        category: "Soup",
        isVeg: false
      }
    ]
  },

  {
    id: 16,
    name: "The Sandwich Co.",
    cuisine: "Sandwiches",
    rating: 4.2,
    deliveryTime: "15-25 min",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    menu: [
      {
        id: 1601,
        name: "Chicken Club Sandwich",
        description: "Chicken, bacon, lettuce, tomato and mayo",
        price: 12.99,
        category: "Sandwiches",
        isVeg: false
      },
      {
        id: 1602,
        name: "Grilled Cheese",
        description: "Toasted bread with melted cheese",
        price: 9.99,
        category: "Sandwiches",
        isVeg: true
      },
      {
        id: 1603,
        name: "Veggie Sandwich",
        description: "Fresh vegetables with cheese and hummus",
        price: 10.99,
        category: "Sandwiches",
        isVeg: true
      },
      {
        id: 1604,
        name: "Chicken Wrap",
        description: "Grilled chicken with lettuce and special sauce",
        price: 11.99,
        category: "Wraps",
        isVeg: false
      }
    ]
  },

  {
    id: 17,
    name: "Dessert Dreams",
    cuisine: "Desserts",
    rating: 4.8,
    deliveryTime: "15-20 min",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    menu: [
      {
        id: 1701,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with chocolate frosting",
        price: 8.99,
        category: "Cake",
        isVeg: true
      },
      {
        id: 1702,
        name: "Cheesecake",
        description: "Creamy cheesecake with berry sauce",
        price: 9.99,
        category: "Cake",
        isVeg: true
      },
      {
        id: 1703,
        name: "Chocolate Brownie",
        description: "Warm chocolate brownie with chocolate sauce",
        price: 7.99,
        category: "Dessert",
        isVeg: true
      },
      {
        id: 1704,
        name: "Ice Cream",
        description: "Three scoops of your choice",
        price: 6.99,
        category: "Ice Cream",
        isVeg: true
      }
    ]
  },

  {
    id: 18,
    name: "Street Food Hub",
    cuisine: "Street Food",
    rating: 4.3,
    deliveryTime: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
    menu: [
      {
        id: 1801,
        name: "Pani Puri",
        description: "Crispy puris filled with spicy flavored water",
        price: 7.99,
        category: "Street Food",
        isVeg: true
      },
      {
        id: 1802,
        name: "Samosa",
        description: "Crispy pastry filled with spiced potatoes",
        price: 5.99,
        category: "Snacks",
        isVeg: true
      },
      {
        id: 1803,
        name: "Chicken Kebab",
        description: "Spiced chicken grilled over charcoal",
        price: 12.99,
        category: "Kebab",
        isVeg: false
      },
      {
        id: 1804,
        name: "Masala Dosa",
        description: "Crispy dosa filled with spiced potatoes",
        price: 10.99,
        category: "South Indian",
        isVeg: true
      }
    ]
  },

  {
    id: 19,
    name: "Coffee & Co.",
    cuisine: "Cafe",
    rating: 4.5,
    deliveryTime: "10-20 min",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    menu: [
      {
        id: 1901,
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: 5.99,
        category: "Coffee",
        isVeg: true
      },
      {
        id: 1902,
        name: "Iced Latte",
        description: "Cold espresso with milk and ice",
        price: 6.49,
        category: "Coffee",
        isVeg: true
      },
      {
        id: 1903,
        name: "Blueberry Muffin",
        description: "Freshly baked muffin with blueberries",
        price: 4.99,
        category: "Bakery",
        isVeg: true
      },
      {
        id: 1904,
        name: "Chicken Croissant",
        description: "Buttery croissant filled with chicken",
        price: 8.99,
        category: "Bakery",
        isVeg: false
      }
    ]
  },

  {
    id: 20,
    name: "Express Biryani",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    menu: [
      {
        id: 2001,
        name: "Chicken Biryani",
        description: "Aromatic basmati rice with spicy chicken",
        price: 15.99,
        category: "Biryani",
        isVeg: false
      },
      {
        id: 2002,
        name: "Mutton Biryani",
        description: "Fragrant rice cooked with tender mutton",
        price: 18.99,
        category: "Biryani",
        isVeg: false
      },
      {
        id: 2003,
        name: "Vegetable Biryani",
        description: "Basmati rice cooked with fresh vegetables",
        price: 12.99,
        category: "Biryani",
        isVeg: true
      },
      {
        id: 2004,
        name: "Chicken 65",
        description: "Spicy deep-fried chicken pieces",
        price: 11.99,
        category: "Starters",
        isVeg: false
      }
    ]
  }
];