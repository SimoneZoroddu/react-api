
export default function MainCards({allActors}) {






    return (
        <>

            {
                allActors.map((actor, index) => (
                    <div key={index} className="col my-3" >
                        <div id="bg_cards" className="card text-center h-100 text-white">
                            <div className="card-title fs-2 mb-0 fw-bolder">{actor.name}</div>
                            <img src={actor.image} className="card-img-top px-4" alt="..." />
                            <div className="card-title fst-italic">{actor.birth_year}    {actor.nationality}</div>
                            <div className="card-body">
                                <div className="card-text">{actor.biography}
                                    <div className="text-danger fst-italic py-2">
                                        <div className="fw-bolder">Know for:</div>
                                        {(actor.known_for || actor.most_famous_movies).join(', ')}
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

        </>
    )
}