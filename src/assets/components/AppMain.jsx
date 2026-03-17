import { useEffect, useState } from "react";



export default function AppMain() {
    const apiActros_url = 'https://lanciweb.github.io/demo/api/actors/'
    const apiActresses_url = 'https://lanciweb.github.io/demo/api/actresses/'
    const [actros, setActros] = useState([])
    const [actresses, setActresses] = useState([])

    const allActors = [...actros, ...actresses]

    function getActors() {

        fetch(apiActros_url)
            .then(res => res.json())
            .then(actor => {
                //console.log(actor);
                setActros(actor)
            })

        fetch(apiActresses_url)
            .then(res => res.json())
            .then(actresse => {
                //console.log(actresse);
                setActresses(actresse)
            })

    }



    useEffect(() => { getActors() }, [])


    return (
        <>
            <h1 className="text-center mb-0 pt-5">Actors</h1>
            <p className="text-center mb-0">List of actors fetched from an API</p>
            <div className="container">
                <div className="row row-cols-3">
                    {
                        allActors?.map((actor, index) => (
                            <div key={index} className="col my-3" >
                                <div id="bg_cards" className="card text-center h-100 text-white">
                                    <div className="card-title fs-2 mb-0 fw-bolder">{actor.name}</div>
                                    <img src={actor.image} className="card-img-top px-4" alt="..." />
                                    <div className="card-title fst-italic">{actor.birth_year}    {actor.nationality}</div>
                                    <div className="card-body">
                                        <div className="card-text">{actor.biography}
                                            {
                                            actor.known_for 
                                            ? 
                                            <div className="text-danger fst-italic py-2">
                                                <div className="fw-bolder">Know for:</div>
                                                {actor.known_for.join(', ')}
                                            </div> 
                                            :
                                            <div className="text-warning fst-italic">
                                                <div className="fw-bolder">Awards:</div>
                                                {actor.most_famous_movies.join(', ')}
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}











/* import { useEffect, useState } from "react";



export default function AppMain() {
    const apiActros_url = 'https://lanciweb.github.io/demo/api/actors/'
    const apiActresses_url = 'https://lanciweb.github.io/demo/api/actresses/'
    const [actros, setActros] = useState([])
    const [actresses, setActresses] = useState([])


    function getActors() {

        fetch(apiActros_url)
            .then(res => res.json())
            .then(actor => {
                //console.log(actor);
                setActros(actor)
            })

        fetch(apiActresses_url)
            .then(res => res.json())
            .then(actresse => {
                //console.log(actresse);
                setActresses(actresse)
            })

    }



    useEffect(() => { getActors() }, [])


    return (
        <>
            <h1 className="text-center mb-0 pt-5">Actors</h1>
            <p className="text-center mb-0">List of actors fetched from an API</p>
            <div className="container">
                <div className="row row-cols-3">
                    {
                        actros?.map(actor => (
                            <div key={actor.id} className="col my-3" >
                                <div id="bg_cards" className="card text-center h-100 text-white">
                                    <div className="card-title fs-2 mb-0 fw-bolder">{actor.name}</div>
                                    <img src={actor.image} className="card-img-top px-5" alt="..." />
                                    <div className="card-title fst-italic">{actor.birth_year}    {actor.nationality}</div>
                                    <div className="card-body">
                                        <div className="card-text">{actor.biography}
                                            <div className="text-danger fst-italic py-2">
                                                <div className="fw-bolder">Know for:</div>
                                                {actor.known_for.join(', ')}
                                            </div>
                                            <div className="text-warning fst-italic">
                                                <div className="fw-bolder">Awards:</div>
                                                {actor.awards.join(', ')}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        actresses?.map(actress => (
                            <div key={actress.id} className="col my-3" >
                                <div id="bg_cards" className="card text-center h-100 text-white">
                                    <div className="card-title fs-2 mb-0 fw-bolder">{actress.name}</div>
                                    <img src={actress.image} className="card-img-top px-5" alt="..." />
                                    <div className="card-title fst-italic">{actress.birth_year}    {actress.nationality}</div>
                                    <div className="card-body">
                                        <div className="card-text">{actress.biography}
                                            <div className="text-danger fst-italic py-2">
                                                <div className="fw-bolder">Know for:</div>
                                                {actress.most_famous_movies.join(', ')}
                                            </div>
                                            <div className="text-warning fst-italic">
                                                <div className="fw-bolder">Awards:</div>
                                                {actress.awards.join(', ')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
} */