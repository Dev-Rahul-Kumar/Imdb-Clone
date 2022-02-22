import React, { useEffect, useState } from "react";
import './Homepage.css'
// import pic1 from "./img/color-background-stage-cinema-curtain-with-spotlights-and-billboard-JJ5X2N.jpg";

export default function Homepage() {
  const [list, setList] = useState([]);


  // const Getdata = () => {

  //   fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=abdca3eea1b7fb0c1f10423e2fc33135")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       // console.log(data)
  //       setList(data.results)
  //     })
  // };
  // useEffect(() => {
  //   Getdata()
  // }, []);

  return (
    <>
      <div className="container2">
        <h1>Upcoming Movies </h1>


        {

          list.map(function (curElem, index) {

            console.log(curElem)

            return (
              <div className="card " style={{ width: '18rem' }} key={curElem.id}>

                <img className="card-img-top" src={"/"}alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{curElem.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>

              </div>

            )
          })

        }

        

        <div className="container2">
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              
          </div>

        </div>







      </div>
    </>
  );
}
