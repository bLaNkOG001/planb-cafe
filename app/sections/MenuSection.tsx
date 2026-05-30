"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search, Filter, X, Leaf, Drumstick } from "lucide-react";

const categories = [
  "All",
  "Plan B Signatures",
  "Burgers",
  "Stuffed Burgers",
  "Sandwiches",
  "Pizza",
  "Pasta",
  "Korean Specials",
  "Chinese Starters",
  "Momos",
  "Fries",
  "Rolls",
  "Fried Rice",
  "Noodles",
  "Biryanis",
  "Beverages",
  "Waffles",
  "Pancakes",
  "Soups",
  "Salads",
  "Add Ons",
];

const menuItems = [
  // Plan B Signatures
  { name: "Chinese Sizzler", category: "Plan B Signatures", price: "₹260", veg: true, nonveg: true, desc: "Sizzling platter with veggies and protein" },
  { name: "Big Daddy's Burger", category: "Plan B Signatures", price: "₹260", veg: true, nonveg: true, desc: "Double patty with caramelized onions" },
  { name: "Cheese Volcano Burger", category: "Plan B Signatures", price: "₹240", veg: true, nonveg: true, desc: "Exploding with molten cheese" },
  { name: "Cheese Lava Burger", category: "Plan B Signatures", price: "₹230", veg: true, nonveg: true, desc: "Cheese oozing from the center" },
  { name: "Atlantic Burger", category: "Plan B Signatures", price: "₹200", veg: false, nonveg: true, desc: "Crispy fish fillet with tartar sauce" },
  { name: "Mister Burger", category: "Plan B Signatures", price: "₹260", veg: true, nonveg: true, desc: "Classic premium burger" },
  { name: "Hangry Burger", category: "Plan B Signatures", price: "₹260", veg: true, nonveg: true, desc: "For when you are really hungry" },
  { name: "Tower Burger", category: "Plan B Signatures", price: "₹220", veg: true, nonveg: true, desc: "Stacked tall with layers" },
  { name: "Tasken Chicken", category: "Plan B Signatures", price: "₹250", veg: false, nonveg: true, desc: "Signature chicken preparation" },
  { name: "Graveyard Burger", category: "Plan B Signatures", price: "₹260", veg: true, nonveg: true, desc: "Triple layered monster" },
  { name: "Indiana Burger", category: "Plan B Signatures", price: "₹270", veg: true, nonveg: true, desc: "Classic American style" },
  { name: "Texas Burger", category: "Plan B Signatures", price: "₹300", veg: true, nonveg: true, desc: "Smoky BBQ with onion rings" },
  { name: "Pineapple Burger", category: "Plan B Signatures", price: "₹160", veg: true, nonveg: true, desc: "Sweet and savory combo" },
  { name: "Egg in a Hole Burger", category: "Plan B Signatures", price: "₹200", veg: false, nonveg: true, desc: "Fried egg nestled in the patty" },
  { name: "Broasted Chicken", category: "Plan B Signatures", price: "₹250", veg: false, nonveg: true, desc: "Pressure-fried crispy chicken" },

  // Burgers
  { name: "Alu Tikki Burger", category: "Burgers", price: "₹100", veg: true, nonveg: false, desc: "Spiced potato patty" },
  { name: "Mix Veg Burger", category: "Burgers", price: "₹110", veg: true, nonveg: false, desc: "Fresh vegetable patty" },
  { name: "Spicy Paneer Burger", category: "Burgers", price: "₹130", veg: true, nonveg: false, desc: "Grilled paneer with spices" },
  { name: "Paneer Crispy Burger", category: "Burgers", price: "₹140", veg: true, nonveg: false, desc: "Crispy fried paneer" },
  { name: "Junglee Chicken Burger", category: "Burgers", price: "₹120", veg: false, nonveg: true, desc: "Wild spicy chicken" },
  { name: "Double Decker Burger", category: "Burgers", price: "₹150", veg: true, nonveg: true, desc: "Two stories of flavor" },
  { name: "Classic Crispy Burger", category: "Burgers", price: "₹160", veg: false, nonveg: true, desc: "Crunchy chicken classic" },
  { name: "Chilli Burger with Pepper Relish", category: "Burgers", price: "₹170", veg: false, nonveg: true, desc: "Spicy pepper kick" },
  { name: "No Bun Burger", category: "Burgers", price: "₹180", veg: false, nonveg: true, desc: "Protein-style lettuce wrap" },
  { name: "Fish Burger", category: "Burgers", price: "₹170", veg: false, nonveg: true, desc: "Crispy fish fillet" },
  { name: "Barbeque Smoked Burger", category: "Burgers", price: "₹170", veg: false, nonveg: true, desc: "Smoky BBQ flavor" },

  // Stuffed Burgers
  { name: "Mix Veg Stuffed Burger", category: "Stuffed Burgers", price: "₹150", veg: true, nonveg: false, desc: "Stuffed with mixed veggies" },
  { name: "Paneer Cheese Stuffed Burger", category: "Stuffed Burgers", price: "₹160", veg: true, nonveg: false, desc: "Cheese-filled paneer patty" },
  { name: "Crispy Veg Stuffed Burger", category: "Stuffed Burgers", price: "₹160", veg: true, nonveg: false, desc: "Crispy exterior, soft interior" },
  { name: "Chilly Chicken Stuffed Burger", category: "Stuffed Burgers", price: "₹170", veg: false, nonveg: true, desc: "Spicy chicken filling" },
  { name: "Basil Pesto Stuffed Burger", category: "Stuffed Burgers", price: "₹170", veg: false, nonveg: true, desc: "Herb-infused delight" },
  { name: "Fish Stuffed Burger", category: "Stuffed Burgers", price: "₹180", veg: false, nonveg: true, desc: "Seafood stuffed patty" },

  // Sandwiches
  { name: "Mix Veg Sandwich", category: "Sandwiches", price: "₹130", veg: true, nonveg: false, desc: "Fresh vegetable layers" },
  { name: "Corn Cheese Sandwich", category: "Sandwiches", price: "₹110", veg: true, nonveg: false, desc: "Sweet corn and cheese" },
  { name: "Grill Cottage Sandwich", category: "Sandwiches", price: "₹120", veg: true, nonveg: false, desc: "Grilled paneer sandwich" },
  { name: "Ultimate Sandwich", category: "Sandwiches", price: "₹140", veg: true, nonveg: true, desc: "Fully loaded sandwich" },
  { name: "Peri Peri Chicken Sandwich", category: "Sandwiches", price: "₹150", veg: false, nonveg: true, desc: "Spicy peri-peri chicken" },
  { name: "Chilli Chicken Sandwich", category: "Sandwiches", price: "₹150", veg: false, nonveg: true, desc: "Chinese-style chicken" },
  { name: "Roasted Chicken Sandwich", category: "Sandwiches", price: "₹140", veg: false, nonveg: true, desc: "Slow-roasted chicken" },
  { name: "Egg Cheese Sandwich", category: "Sandwiches", price: "₹140", veg: false, nonveg: true, desc: "Egg and cheese combo" },

  // Pizza
  { name: "Margherita Pizza", category: "Pizza", price: "₹180", veg: true, nonveg: false, desc: "Classic tomato and cheese" },
  { name: "Golden Corn Pizza", category: "Pizza", price: "₹200", veg: true, nonveg: false, desc: "Sweet corn delight" },
  { name: "Paneer Tikka Pizza", category: "Pizza", price: "₹230", veg: true, nonveg: false, desc: "Tandoori paneer on pizza" },
  { name: "Farmhouse Pizza", category: "Pizza", price: "₹230", veg: true, nonveg: false, desc: "Fresh farm vegetables" },
  { name: "Spicy Triple Tango Pizza", category: "Pizza", price: "₹240", veg: true, nonveg: true, desc: "Triple cheese, triple spice" },
  { name: "Chilli Chicken Pizza", category: "Pizza", price: "₹270", veg: false, nonveg: true, desc: "Spicy chicken topping" },
  { name: "Chicken Tikka Pizza", category: "Pizza", price: "₹270", veg: false, nonveg: true, desc: "Tandoori chicken pizza" },
  { name: "Barbeque Chicken Pizza", category: "Pizza", price: "₹270", veg: false, nonveg: true, desc: "BBQ chicken with smoky flavor" },
  { name: "Chicken Peri Peri Pizza", category: "Pizza", price: "₹270", veg: false, nonveg: true, desc: "Peri-peri spiced chicken" },
  { name: "Prawn Pizza", category: "Pizza", price: "₹300", veg: false, nonveg: true, desc: "Premium prawn topping" },
  { name: "Mixed Pizza", category: "Pizza", price: "₹240", veg: true, nonveg: true, desc: "Best of both worlds" },
  { name: "Cheese Burst", category: "Pizza", price: "₹60", veg: true, nonveg: true, desc: "Extra cheese layer (Add-on)" },

  // Pasta
  { name: "Spaghetti Alfredo", category: "Pasta", price: "₹250", veg: true, nonveg: true, desc: "Creamy white sauce pasta" },
  { name: "Alfredo Pasta", category: "Pasta", price: "₹240", veg: true, nonveg: true, desc: "Classic creamy pasta" },
  { name: "Arrabiata Pasta", category: "Pasta", price: "₹230", veg: true, nonveg: true, desc: "Spicy tomato sauce" },
  { name: "Double Decker Pasta", category: "Pasta", price: "₹240", veg: true, nonveg: true, desc: "Two-layered pasta dish" },
  { name: "Fungi Pasta", category: "Pasta", price: "₹240", veg: true, nonveg: true, desc: "Mushroom lover's choice" },
  { name: "Masala Mafia", category: "Pasta", price: "₹250", veg: true, nonveg: true, desc: "Desi-style spicy pasta" },
  { name: "Creamy Basil Pesto", category: "Pasta", price: "₹250", veg: true, nonveg: true, desc: "Herb-infused creamy sauce" },
  { name: "Creamy Coriander", category: "Pasta", price: "₹240", veg: true, nonveg: true, desc: "Fresh coriander cream sauce" },

  // Korean Specials
  { name: "Ramen", category: "Korean Specials", price: "₹180", veg: true, nonveg: true, desc: "Authentic Korean noodle soup" },
  { name: "Korean Sandwich", category: "Korean Specials", price: "₹120", veg: true, nonveg: true, desc: "Korean-style stuffed sandwich" },
  { name: "Corn Dogs", category: "Korean Specials", price: "₹120", veg: true, nonveg: true, desc: "Crispy battered sausage" },
  { name: "Chicken Tenders", category: "Korean Specials", price: "₹180", veg: false, nonveg: true, desc: "Crispy chicken strips" },

  // Chinese Starters
  { name: "Chilli Paneer", category: "Chinese Starters", price: "₹200", veg: true, nonveg: false, desc: "Spicy Indo-Chinese paneer" },
  { name: "Chilli Mushroom", category: "Chinese Starters", price: "₹180", veg: true, nonveg: false, desc: "Crispy mushroom in chilli sauce" },
  { name: "Chilli Baby Corn", category: "Chinese Starters", price: "₹180", veg: true, nonveg: false, desc: "Tender baby corn, spicy coating" },
  { name: "Paneer Majestic", category: "Chinese Starters", price: "₹200", veg: true, nonveg: false, desc: "Royal paneer preparation" },
  { name: "Chilli Egg", category: "Chinese Starters", price: "₹180", veg: false, nonveg: true, desc: "Egg in spicy chilli sauce" },
  { name: "Chilli Chicken", category: "Chinese Starters", price: "₹210", veg: false, nonveg: true, desc: "Classic chilli chicken" },
  { name: "Dragon Chicken", category: "Chinese Starters", price: "₹210", veg: false, nonveg: true, desc: "Fiery spicy chicken" },
  { name: "Lemon Chicken", category: "Chinese Starters", price: "₹210", veg: false, nonveg: true, desc: "Tangy lemon flavor" },
  { name: "Chicken Lollipop", category: "Chinese Starters", price: "₹220", veg: false, nonveg: true, desc: "Frenched chicken wings" },

  // Momos
  { name: "Veg Momo", category: "Momos", price: "₹140", veg: true, nonveg: false, desc: "Steamed vegetable dumplings" },
  { name: "Veg Schezwan Momo", category: "Momos", price: "₹160", veg: true, nonveg: false, desc: "Spicy Schezwan veg momos" },
  { name: "Paneer Momo", category: "Momos", price: "₹150", veg: true, nonveg: false, desc: "Paneer-filled dumplings" },
  { name: "Paneer Schezwan Momo", category: "Momos", price: "₹170", veg: true, nonveg: false, desc: "Spicy paneer momos" },
  { name: "Chicken Momo", category: "Momos", price: "₹160", veg: false, nonveg: true, desc: "Chicken-filled dumplings" },
  { name: "Chicken Schezwan", category: "Momos", price: "₹180", veg: false, nonveg: true, desc: "Spicy chicken momos" },

  // Fries
  { name: "Cheese Balls", category: "Fries", price: "₹120", veg: true, nonveg: false, desc: "Crispy cheese bites" },
  { name: "Potato Wedges", category: "Fries", price: "₹150", veg: true, nonveg: false, desc: "Seasoned potato wedges" },
  { name: "Chicken Cheese Balls", category: "Fries", price: "₹150", veg: false, nonveg: true, desc: "Chicken and cheese combo" },
  { name: "Nuggets", category: "Fries", price: "₹150", veg: true, nonveg: true, desc: "Crispy bite-sized pieces" },
  { name: "Chicken Strips", category: "Fries", price: "₹160", veg: false, nonveg: true, desc: "Crispy chicken strips" },
  { name: "Original Fries", category: "Fries", price: "₹130", veg: true, nonveg: false, desc: "Classic salted fries" },
  { name: "Peri Peri Fries", category: "Fries", price: "₹140", veg: true, nonveg: false, desc: "Spicy peri-peri seasoning" },
  { name: "Masala Fries", category: "Fries", price: "₹150", veg: true, nonveg: false, desc: "Desi masala flavor" },
  { name: "Loaded Cheese Fries", category: "Fries", price: "₹180", veg: true, nonveg: false, desc: "Fully loaded with cheese" },

  // Rolls
  { name: "Mix Veg Roll", category: "Rolls", price: "₹100", veg: true, nonveg: false, desc: "Fresh vegetable roll" },
  { name: "Paneer Roll", category: "Rolls", price: "₹120", veg: true, nonveg: false, desc: "Paneer tikka roll" },
  { name: "Chilli Chicken Roll", category: "Rolls", price: "₹140", veg: false, nonveg: true, desc: "Spicy chicken roll" },
  { name: "Green Chicken Gyro Roll", category: "Rolls", price: "₹150", veg: false, nonveg: true, desc: "Herb-marinated chicken" },
  { name: "Shawarma", category: "Rolls", price: "₹150", veg: false, nonveg: true, desc: "Middle Eastern style wrap" },

  // Fried Rice
  { name: "Paneer Fried Rice", category: "Fried Rice", price: "₹200", veg: true, nonveg: false, desc: "Paneer with fried rice" },
  { name: "Cashew Fried Rice", category: "Fried Rice", price: "₹180", veg: true, nonveg: false, desc: "Cashew nut fried rice" },
  { name: "Mushroom Fried Rice", category: "Fried Rice", price: "₹180", veg: true, nonveg: true, desc: "Mushroom with fried rice" },
  { name: "Schezwan Fried Rice", category: "Fried Rice", price: "₹200", veg: true, nonveg: true, desc: "Spicy Schezwan style" },
  { name: "Mongolian Fried Rice", category: "Fried Rice", price: "₹210", veg: false, nonveg: true, desc: "Mongolian style rice" },
  { name: "Chilli Chicken Fried Rice", category: "Fried Rice", price: "₹200", veg: false, nonveg: true, desc: "Chicken fried rice" },
  { name: "Peking Fried Rice", category: "Fried Rice", price: "₹200", veg: false, nonveg: true, desc: "Peking style preparation" },

  // Noodles
  { name: "Soft Noodles", category: "Noodles", price: "₹160", veg: true, nonveg: true, desc: "Classic soft noodles" },
  { name: "Egg Schezwan Noodles", category: "Noodles", price: "₹180", veg: false, nonveg: true, desc: "Egg noodles with Schezwan" },
  { name: "Chilli Garlic Noodles", category: "Noodles", price: "₹180", veg: true, nonveg: true, desc: "Garlic-infused spicy noodles" },
  { name: "Hakka Noodles", category: "Noodles", price: "₹190", veg: true, nonveg: true, desc: "Indo-Chinese classic" },
  { name: "Thai Noodles", category: "Noodles", price: "₹200", veg: true, nonveg: true, desc: "Thai-style preparation" },
  { name: "Schezwan Noodles", category: "Noodles", price: "₹180", veg: true, nonveg: true, desc: "Spicy Schezwan noodles" },

  // Biryanis
  { name: "Mix Veg Biryani", category: "Biryanis", price: "₹220", veg: true, nonveg: false, desc: "Vegetable biryani" },
  { name: "Paneer Tikka Biryani", category: "Biryanis", price: "₹260", veg: true, nonveg: false, desc: "Paneer tikka with biryani rice" },
  { name: "Chilli Chicken Biryani", category: "Biryanis", price: "₹260", veg: false, nonveg: true, desc: "Chilli chicken biryani" },
  { name: "Chicken Dum Biryani", category: "Biryanis", price: "₹270", veg: false, nonveg: true, desc: "Slow-cooked dum biryani" },
  { name: "Chicken Lollipop Biryani", category: "Biryanis", price: "₹270", veg: false, nonveg: true, desc: "Lollipop with biryani" },

  // Beverages - Coffee Frio
  { name: "Original Coffee Frio", category: "Beverages", price: "₹130", veg: true, nonveg: false, desc: "Classic cold coffee" },
  { name: "Coffee on the Rocks", category: "Beverages", price: "₹140", veg: true, nonveg: false, desc: "Iced coffee premium" },
  { name: "Choco Cafe", category: "Beverages", price: "₹150", veg: true, nonveg: false, desc: "Chocolate coffee blend" },
  { name: "Strawberry Coffee Frio", category: "Beverages", price: "₹160", veg: true, nonveg: false, desc: "Strawberry flavored coffee" },
  { name: "Kitkat Coffee Frio", category: "Beverages", price: "₹170", veg: true, nonveg: false, desc: "Kitkat blended coffee" },
  { name: "Loaded Ice Cream Coffee Frio", category: "Beverages", price: "₹180", veg: true, nonveg: false, desc: "With ice cream scoop" },
  { name: "Nutella Coffee Frio", category: "Beverages", price: "₹190", veg: true, nonveg: false, desc: "Nutella coffee delight" },

  // Gym Freak / Smoothies
  { name: "Walnut Banana Smoothie", category: "Beverages", price: "₹170", veg: true, nonveg: false, desc: "Protein-rich smoothie" },
  { name: "Strawberry Cashew Smoothie", category: "Beverages", price: "₹170", veg: true, nonveg: false, desc: "Nutty strawberry blend" },
  { name: "The Champ", category: "Beverages", price: "₹180", veg: true, nonveg: false, desc: "Champion's energy drink" },
  { name: "Power Booster", category: "Beverages", price: "₹180", veg: true, nonveg: false, desc: "Energy boosting smoothie" },

  // Fresh Juices (No Sugar)
  { name: "ABC Juice", category: "Beverages", price: "₹140", veg: true, nonveg: false, desc: "Apple + Beetroot + Carrot" },
  { name: "COP Juice", category: "Beverages", price: "₹140", veg: true, nonveg: false, desc: "Carrot + Orange + Pineapple" },
  { name: "CAG Juice", category: "Beverages", price: "₹140", veg: true, nonveg: false, desc: "Carrot + Apple + Ginger" },
  { name: "CAP Juice", category: "Beverages", price: "₹150", veg: true, nonveg: false, desc: "Carrot + Apple + Pineapple" },

  // Waffles
  { name: "Oreo Waffle", category: "Waffles", price: "₹200", veg: true, nonveg: false, desc: "Oreo cookie waffle" },
  { name: "Snickers Waffle", category: "Waffles", price: "₹200", veg: true, nonveg: false, desc: "Snickers loaded waffle" },
  { name: "Kitkat Waffle", category: "Waffles", price: "₹200", veg: true, nonveg: false, desc: "Kitkat chocolate waffle" },
  { name: "Whipcream Waffle", category: "Waffles", price: "₹200", veg: true, nonveg: false, desc: "Cream topped waffle" },
  { name: "Chocolate Waffle", category: "Waffles", price: "₹220", veg: true, nonveg: false, desc: "Rich chocolate waffle" },
  { name: "Naked Nutella Waffle", category: "Waffles", price: "₹220", veg: true, nonveg: false, desc: "Nutella loaded waffle" },
  { name: "Choco Chip Waffle", category: "Waffles", price: "₹220", veg: true, nonveg: false, desc: "Chocolate chip waffle" },
  { name: "Brownie Waffle", category: "Waffles", price: "₹250", veg: true, nonveg: false, desc: "Brownie in waffle form" },

  // Pancakes
  { name: "Chocolate Pancake", category: "Pancakes", price: "₹150", veg: true, nonveg: false, desc: "Chocolate flavored pancake" },
  { name: "Pancake With Honey", category: "Pancakes", price: "₹150", veg: true, nonveg: false, desc: "Honey drizzled pancake" },
  { name: "Oreo Pancake", category: "Pancakes", price: "₹150", veg: true, nonveg: false, desc: "Oreo cookie pancake" },
  { name: "Kitkat Pancake", category: "Pancakes", price: "₹150", veg: true, nonveg: false, desc: "Kitkat loaded pancake" },

  // Soups
  { name: "Hot n Sour Soup", category: "Soups", price: "₹80", veg: true, nonveg: true, desc: "Classic hot and sour" },
  { name: "Manchow Soup", category: "Soups", price: "₹90", veg: true, nonveg: true, desc: "Crispy noodle topped soup" },
  { name: "Lemon Corriander Soup", category: "Soups", price: "₹90", veg: true, nonveg: true, desc: "Fresh lemon and coriander" },
  { name: "Sweet Corn Soup", category: "Soups", price: "₹90", veg: true, nonveg: true, desc: "Creamy sweet corn" },

  // Salads
  { name: "Veg Salad", category: "Salads", price: "₹100", veg: true, nonveg: false, desc: "Fresh vegetable salad" },
  { name: "Egg Salad", category: "Salads", price: "₹110", veg: false, nonveg: true, desc: "Egg and greens" },
  { name: "Chicken Salad", category: "Salads", price: "₹130", veg: false, nonveg: true, desc: "Grilled chicken salad" },
  { name: "Fruit Salad", category: "Salads", price: "₹100", veg: true, nonveg: false, desc: "Fresh fruit mix" },

  // Add Ons
  { name: "Water Bottle", category: "Add Ons", price: "₹10", veg: true, nonveg: false, desc: "Mineral water" },
  { name: "Slice Cheese", category: "Add Ons", price: "₹15", veg: true, nonveg: false, desc: "Extra cheese slice" },
  { name: "Mayonnaise Dip", category: "Add Ons", price: "₹25", veg: true, nonveg: false, desc: "Mayo dipping sauce" },
  { name: "Topping Omelette", category: "Add Ons", price: "₹20", veg: false, nonveg: true, desc: "Egg omelette topping" },
  { name: "Pizza Cheese", category: "Add Ons", price: "₹30", veg: true, nonveg: false, desc: "Extra pizza cheese" },
  { name: "Extra Chicken", category: "Add Ons", price: "₹30", veg: false, nonveg: true, desc: "Additional chicken" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryCounts = categories.map((cat) => ({
    name: cat,
    count: cat === "All" ? menuItems.length : menuItems.filter((i) => i.category === cat).length,
  }));

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-32 px-6"
      style={{ background: "#080808" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block"
          >
            Our Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6"
          >
            Culinary Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-ivory/60 max-w-2xl mx-auto text-lg"
          >
            Over 100 carefully crafted dishes, from gourmet burgers to authentic Korean specialties.
          </motion.p>
        </div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-4 mb-10"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/40" size={18} />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-matte border border-ivory/10 rounded-xl text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/40 hover:text-ivory"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-colors ${
                showFilters
                  ? "bg-gold/20 border-gold/50 text-gold"
                  : "border-ivory/10 text-ivory/70 hover:border-ivory/30"
              }`}
            >
              <Filter size={16} />
              <span className="text-sm">Categories</span>
            </button>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-ivory/10">
                  {categoryCounts.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        activeCategory === cat.name
                          ? "bg-gold text-matte font-medium"
                          : "bg-ivory/5 text-ivory/60 hover:bg-ivory/10 hover:text-ivory"
                      }`}
                    >
                      {cat.name}
                      <span className="ml-1 text-xs opacity-60">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Menu Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.name + item.category}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="group glass rounded-xl p-5 hover:bg-ivory/5 transition-all duration-300 hover:border-gold/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-ivory group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex gap-1">
                        {item.veg && (
                          <span className="w-3 h-3 rounded-sm bg-green-500/20 border border-green-500 flex items-center justify-center">
                            <Leaf size={8} className="text-green-400" />
                          </span>
                        )}
                        {item.nonveg && (
                          <span className="w-3 h-3 rounded-sm bg-red-500/20 border border-red-500 flex items-center justify-center">
                            <Drumstick size={8} className="text-red-400" />
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-ivory/40">{item.desc}</p>
                  </div>
                  <span className="text-lg font-bold text-gold ml-4">{item.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ivory/30 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ivory/40 text-lg">No dishes found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-4 text-gold hover:text-amber transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
