export const parseFoodData = (rawInput) => {
  const foods = rawInput.trim().split("\n");

  const allergenMap = new Map();
  const allIngredients = new Map();
  const allergenRegex = /\(contains\s([\w,\s]+)\)/;
  const ingredientRegex = /^([\w\s]+)\s\(/;

  foods.forEach((food) => {
    const [, allergensStr] = food.match(allergenRegex) || [];
    const [, ingredientStr] = food.match(ingredientRegex) || [];

    const allergens = allergensStr.split(", ");
    const ingredients = ingredientStr.split(" ");

    ingredients.forEach((ingredient) => {
      let exists = allIngredients.get(ingredient);
      allIngredients.set(ingredient, exists ? exists + 1 : 1);
    });

    allergens.forEach((allergen) => {
      const existing = allergenMap.get(allergen);
      if (existing) {
        existing.push(ingredients);
        allergenMap.set(allergen, existing);
      } else {
        allergenMap.set(allergen, [ingredients]);
      }
    });
  });

  return [allergenMap, allIngredients];
};

export const findIngredientsWithoutAllergens = (
  allergenMap,
  allIngredients
) => {
  const ingredientsWithoutAllergens = new Map(allIngredients);
  const ingredientsWithAllergens = new Map();

  allergenMap.forEach((ingredients, allergen) => {
    const ingredientMap = new Map();
    ingredients.forEach((ingredientList) => {
      ingredientList.forEach((ingredient) => {
        let exists = ingredientMap.get(ingredient);
        ingredientMap.set(ingredient, exists ? exists + 1 : 1);
      });
    });

    ingredientMap.forEach((occurances, ingredient) => {
      if (occurances === ingredients.length) {
        // Ingredient has known allergen
        ingredientsWithoutAllergens.delete(ingredient);

        const exists = ingredientsWithAllergens.get(allergen);

        ingredientsWithAllergens.set(
          allergen,
          exists ? [...exists, ingredient] : [ingredient]
        );
      }
    });
  });

  return [ingredientsWithoutAllergens, ingredientsWithAllergens];
};

export const part1 = (rawInput) => {
  const [foodMap, ingredientSet] = parseFoodData(rawInput);

  const [ingredientsWithoutAllergens] = findIngredientsWithoutAllergens(
    foodMap,
    ingredientSet
  );

  let occurances = 0;
  ingredientsWithoutAllergens.forEach((value) => {
    occurances += value;
  });
  return occurances;
};

export const part2 = (rawInput) => {
  const [foodMap, ingredientSet] = parseFoodData(rawInput);

  const [, ingredientsWithAllergens] = findIngredientsWithoutAllergens(
    foodMap,
    ingredientSet
  );

  let sieving = true;

  // Similar to Day 16, sieve through solutions, matching allergens to ingredients 1 to 1
  while (sieving) {
    let stillSieving = false;
    ingredientsWithAllergens.forEach((ingredients, allergen) => {
      if (typeof ingredients === "object" && ingredients.length === 1) {
        stillSieving = true;
        ingredientsWithAllergens.set(allergen, ingredients[0]);

        ingredientsWithAllergens.forEach((ing, all) => {
          if (typeof ing === "object") {
            const ingredientIndex = ing?.indexOf(ingredients[0]);
            if (ingredientIndex >= 0) {
              ing.splice(ingredientIndex, 1);
              ingredientsWithAllergens.set(all, ing);
            }
          }
        });
      }
    });
    sieving = stillSieving;
  }

  // sort allergens alphabetically
  const allergens = [...ingredientsWithAllergens.keys()].sort();
  let ingredientList = [];

  allergens.forEach((allergen) => {
    ingredientList.push(ingredientsWithAllergens.get(allergen));
  });

  return ingredientList.join(",");
};
