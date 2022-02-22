import React, { useEffect, useState } from 'react'
import './navbar.css'





export default function Navbar() {
    const [same, setSame] = useState([])

    const HandlonChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const text = e.target.value
        // const arr=[]
        // arr.push(text);


        // useEffect(() => {
        //     fetch(` https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query=${text}`)
        //         .then(response => {
        //             return response.json()
        //         })
        //         .then(data => {
        //             setSame(data)
        //         })
        // }, []);

        fetch(` https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query=${text}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setSame([data.results])
            })


    }

    // const search=()=>{
    //    fetch(` https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query=${text}`)
    //     .then(response=>{
    //         return response.json()
    //     })
    //     .then(data=>{
    //         setSame(data)
    //     })


    // const fetchData = () =>{
    //     // console.log(text)
    //     fetch("https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query=${avenger}")
    //         .then(response => response.json())
    //         .then(data => setSame(data))


    // }



    // }

    //    useEffect(()=>{
    //         HandlonChange()
    //     },[]); 
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <h1><a className="navbar-brand" href="/">Movies Gyan</a></h1>
                

                <div className="collapse1 navbar-collapse1 d-flex" id="navbarSupportedContent1">

                    <form className="form  my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" size="80" onChange={HandlonChange}/>
                        {/* <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={fetchData} >Search</button> */}
                    </form>
                    <button className="btn btn2 btn-outline-danger my-2 my-sm-0 text-white" type="submit">Sign-in</button>
                </div>
            </nav>
            <div className="container3">

                {



                    same.map((curElem, index) => {
                        console.log(curElem)

                        return (

                            <div className="card" style={{ width: '18rem' }} key={curElem.id}>
                                <img className="card-img-top" src={curElem.poster_path} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{curElem.title}</h5>
                                    <p className="card-text">{curElem.overview}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Original language:{curElem.original_language}</li>
                                    <li className="list-group-item">Popularity:{curElem.popularity}</li>
                                    <li className="list-group-item">Release date:{curElem.release_date}</li>
                                    <li className="list-group-item">Vote Average:{curElem.vote_average}</li>
                                </ul>

                            </div>
                        )
                    })


                }

            </div>
        </>
    )
}
// mr-sm-2