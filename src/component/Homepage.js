import React, { useEffect, useState } from "react";
import './Homepage.css'
// import pic1 from "./img/color-background-stage-cinema-curtain-with-spotlights-and-billboard-JJ5X2N.jpg";

export default function Homepage() {
  const [list, setList] = useState([]);


  const Getdata = () => {

    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=abdca3eea1b7fb0c1f10423e2fc33135")
    
      .then(response => {
        return response.json()
      })
      .then(data => {
        
        setList(data.results)
      })
  };
  useEffect(() => {
    Getdata()
  }, []);

  return (
    <>
      <div className="container2">
        <h1>Upcoming Movies </h1>
        <div className="container3">


        {

          list.map(function (curElem, key) {

            console.log(curElem)
            const picapi="https://image.tmdb.org/t/p/w500";
            return (
              <div className="container3">
                <div className="card card2" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={picapi + curElem.poster_path} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{curElem.title}</h5>
                    <p className="card-text">{curElem.overview}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Popularity: {curElem.popularity}</li>
                    <li className="list-group-item">Release date: {curElem.release_date}</li>
                    <li className="list-group-item">Vote average: {curElem.vote_average}</li>
                    <li className="list-group-item">Vote count: {curElem.vote_count}</li>
                    <li className="list-group-item">Original language: {curElem.original_language}</li>
                  </ul>
                </div>
              </div>

            )
          })

        }
      </div>



      {/* <div className="container3">
          <div className="card card2" style={{ width: '18rem' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
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

          <div className="card card2" style={{ width: '18rem' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
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


          <div className="card card2" style={{ width: '18rem' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
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
          <div className="card card2" style={{ width: '18rem' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body ">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group card3 list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>









        </div> */}
    </div>
    </>
  );
}
