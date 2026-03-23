import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'

export const Egy = () => {
    const params = useParams();
    const id = params.hangszerId;
    const [hangszer, setHangszer] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        axios.get('http://localhost:3001/instruments/' + id)
            .then(res => {
                setHangszer(res.data);
            })
            .catch(console.log)
            .finally(() => setPending(false));
    }, [id]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
        {isPending || !hangszer.id ? (
            <div className="spinner-border"></div>
        ) : (
            <div className="container">

  <h2 className="mb-4"> 
    Han gszer
  </h2>
  <div className="row g-4 justify-content-center"> 
      <div className="col-12 col-sm-10 col-md-8 col-lg-6">
        <div className="card shadow-lg">
        
           <div className="card-body text-center">
            <h5 className="card-title mb-3">
              {hangszer.name}
            </h5>
            <p className="card-text fs-5">
              Márka: <b>{hangszer.brand}</b>
            </p>   
            <p className="card-text fs-5">
              Ár: <b>{hangszer.price} Ft</b>
            </p>
            <p className="card-text fs-5">
              Darabszám: {hangszer.quantity}
            </p>
            <NavLink to={"/"}>
          <img
            src={hangszer.imageURL}
            className="card-img-top p-4"
            alt="hangszer"
            style={{ height: "400px", objectFit: "contain" }}
          /></NavLink>
          </div>
        </div>
      </div>
  </div>

</div>)}
</div>  )};