import React from "react";
import imgMenu from "../assets/recipe_page/images/image-omelette.jpeg";

function Recipe_Page() {
  return (
    <>
      <div className="bg-eggshell h-full flex justify-center items-center font-youngserif">
        <div className="flex flex-col w-[700px] bg-white p-8 rounded-2xl my-8 max-[400px]:rounded-none max-[400px]:my-0">
          <img src={imgMenu} alt="imgMenu" className="rounded-xl object-contain" />
          <div className="py-4">
            <h1 className="text-4xl pb-4 ">
              Simple Omelette Recipe
            </h1>
            <p className="font-outfit">
              An easy and quick dish Perfect for any meal. This classic omelette
              combines beaten eggs cooked to perfection, optionally filled with
              your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg font-outfit">
            <h1 className="text-xl text-rose-800 font-bold pb-2">
              Preparation time
            </h1>
            <ul className="list-disc pl-4">
              <li className="pl-4 ">Total: Approximately 10 minutes</li>
              <li className="pl-4">Preparation: 5 minutes</li>
              <li className="pl-4">Cooking: 5 minutes</li>
            </ul>
          </div>
          <div className="py-4">
            <h1 className="text-3xl pb-4 font-bold text-brown-800">
              Ingredients
            </h1>
            <ul className="list-disc pl-4 font-outfit">
              <li className="pl-4">2-3 large eggs</li>
              <li className="pl-4">Salt, to taste</li>
              <li className="pl-4">Pepper, to taste</li>
              <li className="pl-4">1 tablespoon of butter or oil</li>
              <li className="pl-4">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <hr />
          <div className="py-4">
            <h1 className="text-3xl pb-4 font-bold text-brown-800">
              Instructions
            </h1>
            <ul className="list-decimal pl-4 marker:text-brown-800 marker:font-bold font-outfit">
              <li className="mb-2 pl-4">
                <strong>Beat the eggs:</strong> with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className="mb-2 pl-4">
              <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and
                add butter or oil.
              </li>
              <li className="mb-2 pl-4">
              <strong>Heat the pan:</strong> Once the butter is melted and bubbling, pour
                in the eggs. Tilt the pan to ensure the eggs evenly coat the
                surface.
              </li>
              <li className="mb-2 pl-4">
              <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges
                but are still slightly runny in the middle, sprinkle your chosen
                fillings over one half of the omelette.
              </li>
              <li className="mb-2 pl-4">
              <strong>Fold and serve:</strong> As the omelette continues to cook, carefully
                lift one edge and fold it over the fillings. Let it cook for
                another minute, then slide it onto a plate.
              </li>
              <li className="mb-2 pl-4">
              <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
              </li>
            </ul>
          </div>
          <hr />
          <div className="py-4 font-outfit">
            <h1 className="text-3xl pb-4 font-bold text-brown-800 font-youngserif">
              Nutrition
            </h1>
            <p className="text-base">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="flex flex-row py-2">
              <p className="px-5 w-1/2 text-base">Calories</p>
              <p className="px-5 font-bold text-brown-800">277kcal</p>
            </div>
            <hr />
            <div className="flex flex-row py-2">
              <p className="px-5 w-1/2 text-base ">Carbs</p>
              <p className="px-5 font-bold text-brown-800">0g</p>
            </div>
            <hr />
            <div className="flex flex-row py-2">
              <p className="px-5 w-1/2 text-base">Protein</p>
              <p className="px-5 font-bold text-brown-800">20g</p>
            </div>
            <hr />
            <div className="flex flex-row pt-2">
              <p className="px-5 w-1/2 text-base">Fat</p>
              <p className="px-5 font-bold text-brown-800">22g</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe_Page;
