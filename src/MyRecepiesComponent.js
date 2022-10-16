function MyRecepiesComponent({label, image, calories, ingredients}){
    return(<div>
        <div className="list">
        <h2>{label}</h2>
        <img className="image" src={image}/>
        <p>{calories.toFixed()} calories</p>
        </div>
        <ul className="list">
            {ingredients.map(ingredient =>(
                <li>
                    <img className ="icon" src="https://img.icons8.com/flat-round/344/checkmark.png"/>
                    {ingredient}</li>
            ))}
        </ul>
</div>
    )
    

    
}

export default MyRecepiesComponent;