// `app/recipes/page.tsx` is the UI for the `/recipes` URL
import Image from "next/image"
import jsonList from "@/recipes.json"

interface Recipe {
    id: string;
    name: string;
    ingredients: string[];
    instructions: string[];
    image: string;
}

export default async function Page() {

    return (
<main>
            <div >
                <h1 className="item-center">Lista de Receitas</h1>
                
                {jsonList.map((recipe: Recipe) => (
                    <div key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <Image className = "flex flex-col item-center" src={recipe.image} width={500} height={500} alt={recipe.name}/>
                        <h3>Ingredientes:</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h3>Instruções:</h3>
                        <ol>
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </main>
    );
}
