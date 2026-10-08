import RecipeCard from "./components/RecipeCard";

const RecipeList = () => {

    return(
         <div>
            <RecipeCard
              title="Pancakes moelleux"
              imageUrl="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800"
              duration={20}
              difficulty={4}
              description="Des pancakes épais et aérés pour un brunch réussi."
            />
            <br />
            <RecipeCard 
                title="Spaghetti carbonara"
                imageUrl="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800"
                duration={45}
                difficulty={2}
                description="La vraie carbonara : guanciale, pecorino, oeufs et poivre. Pas de crème !"
            />
            <br />
            <RecipeCard 
               title="Soupe de potiron"
               imageUrl="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800"
               duration={55}
               difficulty={5}
            />
         </div>
    )
} ;

export default RecipeList ;