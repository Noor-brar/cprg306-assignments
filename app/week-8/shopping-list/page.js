"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

function Page() {
  const [items, setItems] = useState(itemsData);
  // New state variable for the selected item name
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // New event handler for item selection
  const handleItemSelect = (item) => {
    const cleanedName = item.name.trim().toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-[#2a628f] flex ">
      <div>
        <h1 className="text-3xl font-bold mb-2 ml-16 p-4 text-white">
          Shopping List
        </h1>
        <h2 className="text-xl font-bold ml-8 text-white">Add a new Item</h2>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}

export default Page;
