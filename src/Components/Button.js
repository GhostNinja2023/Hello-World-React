

function Button({name , description}){

    // props = {name: "Apple", description: "Its an Apple"  }
    // {name , description} = props

    //  props is an object => read only object 
    // console.log("Props",props.name) 
    // props.name = "Mango"
     
    return(
        <div>
          <button className="btn">{name}</button>
          <p>{description}</p>
        </div>
    )
}

export default Button