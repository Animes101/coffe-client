import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const CoffeCard = ({coffe,remove}) => {

    const {coffeeName,coffeeTitle,prices,coffeeDescription,_id}=coffe;

    const handleDelete=(id)=>{


      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

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
    });


    }

    

  return (
    <div>
        <div className="card bg-base-100 card-xs shadow-sm border border-green-300">
            <div className="card-body">
                <h2 className="card-title">X{coffeeName}</h2>
                <p>{coffeeTitle}</p>
                <p>{coffeeDescription}</p>
                <button className="btn btn-primary">{prices} tk</button>
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