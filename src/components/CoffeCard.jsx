import React from 'react'
import { Link } from 'react-router-dom';

const CoffeCard = ({coffe,remove}) => {

    const {coffeeName,coffeeTitle,prices,coffeeDescription,_id}=coffe;

    const handleDelete=(id)=>{


         fetch(`http://localhost:3000/coffe/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((res) => res.json())
            .then((data) =>{

              if(data.success){
                remove(id);

                }
            });

    }

    

  return (
    <div>
        <div className="card bg-base-100 card-xs shadow-sm border border-green-300">
            <div className="card-body">
                <h2 className="card-title">X{coffeeName}</h2>
                <p>{coffeeTitle}</p>
                <p>{coffeeDescription}</p>
                <button className="btn btn-primary">{prices}</button>
                <div className="justify-end card-actions">
                <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Detete</button>
                <button className="btn btn-secondary"><Link to={`/coffeUpdate/${_id}`}>Update</Link></button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default CoffeCard