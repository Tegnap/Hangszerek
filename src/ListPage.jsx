
import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"


export const ListPage = () => {
    const [hangszer, setHangszer] = useState([])
    const [isFetchPending, setFetchPending] = useState(false)
    useEffect(() => {
        setFetchPending(true)
        axios.get('http://localhost:3001/instruments')
        .then(res => {
            setHangszer(res.data)
        })
        .catch(console.log)
            .finally(() => setFetchPending(false));
    }, [])

     return (
     <div className="p-5 m-auto text-center content bg-ivory">
        {isFetchPending ? (
            <div className="spinner-border"></div>
        ) : (
            <div className="container">
  <h2 className="mb-4">
    Hangszerek
  </h2>
  <div className="row g-4"> 
    {hangszer.map((hangszer, index) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
        <div className="card h-100 shadow-lg">
        <div className="card-body">
            <h6 className="card-title">
              {hangszer.name}
            </h6>
            <p className="card-text">
              Márka: <b>{hangszer.brand}</b>
            </p>
            <p className="card-text">
              <b>{hangszer.price} Ft</b>
            </p>
            <p className="card-text">
              Készleten: {hangszer.quantity}
            </p>
          </div>
        <NavLink to={"/single/" + hangszer.id}>
          <img
            src={hangszer.imageURL}
            className="card-img-top p-3"
            alt="hangszer"
            style={{ height: "200px", objectFit: "contain" }}
          /></NavLink>

          
        </div>
      </div>
    ))}
        </div>
        </div>
                )
            }
</div>)};