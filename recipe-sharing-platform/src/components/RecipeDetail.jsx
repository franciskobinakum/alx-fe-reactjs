import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mb-6">
          {recipe.summary}
        </p>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-700">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
};

export default RecipeDetail;