/**const recipe = {
  title: "Pates Carbonara",
  imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
  duration : 20 ,
  difficulty: "Facile"
} ;**/

interface RecipeCardProps {
  title : string ;
  imageUrl : string ;
  duration : number ;
  difficulty : number ;
  description? : string ;
}

const RecipeCard = ({title , imageUrl , duration , difficulty , description } : RecipeCardProps) => {
    return(
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <img src={imageUrl}  alt={title}/>
        <p> Durée : {duration} minutes</p>
        <br />
        <p> Difficulté {difficulty} / 5</p>
      </div>
    )
} ;

export default RecipeCard ;