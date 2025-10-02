import React from "react";
import Recipe from "./Recipe";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getRecipe() {
      const response = await axios("https://dummyjson.com/recipes");
      const data = response["data"];
      console.log(data);
      setRecipes(data["recipes"]);
    }
    getRecipe();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe}></Recipe>;
      })}
    </div>
  );
}
