import { useEffect, useState } from "react";



export default function AppMain() {
    const apiActresses_url = 'https://lanciweb.github.io/demo/api/actors/'
    const [actresses, setActresses] = useState([])



    function getActresses() {


        fetch(apiActresses_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setActresses(data)
            })
    }

    useEffect(() => { getActresses() }, [])


    return (

        <div className="container">
            <div className="row">
                {
                    actresses?.map(actress => (
                        <div key={actress.id} className="col my-3" >
                            <div id="bg_cards" className="card text-center h-100 text-white" style={{ width: "18rem" }}>
                                <div className="card-title fs-2">{actress.name}</div>
                                <img src={actress.image} className="card-img-top px-4" alt="..." />
                                <div className="card-title fst-italic">{actress.birth_year}    {actress.nationality}</div>
                                <div className="card-body">
                                    <div className="card-text">{actress.biography}
                                        <div className="text-danger fst-italic py-2">
                                            <div className="fw-bolder">Know for:</div>
                                            {actress.known_for}
                                        </div>
                                        <div className="text-warning fst-italic">
                                            <div className="fw-bolder">Awards:</div>
                                            {actress.awards}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}