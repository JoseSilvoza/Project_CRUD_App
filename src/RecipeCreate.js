import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    addRecipe({ name, cuisine, photo, ingredients, preparation });
  };

  const nameChangeHandler = (event) => setName(event.target.value);
  const cuisineChangeHandler = (event) => setCuisine(event.target.value);
  const photoChangeHandler = (event) => setPhoto(event.target.value);
  const ingredientsChangeHandler = (event) => setIngredients(event.target.value);
  const preparationChangeHandler = (event) => setPreparation(event.target.value);

  return (
    <form name="create" onSubmit={onSubmitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              {(
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  size="9"
                  required={true}
                  value={name}
                  onChange={nameChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <input
                  id="cuisine"
                  name="cuisine"
                  type="text"
                  placeholder="Cuisine"
                  size="9"
                  required={true}
                  value={cuisine}
                  onChange={cuisineChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <input
                  id="photo"
                  name="photo"
                  type="url"
                  placeholder="URL"
                  size="9"
                  required={true}
                  value={photo}
                  onChange={photoChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <textarea
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  size="9"
                  required={true}
                  value={ingredients}
                  onChange={ingredientsChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <textarea
                  id="preparation"
                  name="preparation"
                  type="text"
                  placeholder="Preparation"
                  size="9"
                  required={true}
                  value={preparation}
                  onChange={preparationChangeHandler}
                />
              )}
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
