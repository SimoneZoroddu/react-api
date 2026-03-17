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
        <>

            {
                actresses?.map(actress => (
                    <div key={actress.id}>
                        <img src={actress.image} alt={actress.name} />
                        <div>
                            {actress.name}
                        </div >
                        <div>
                            {actress.nationality}
                        </div>
                    </div>
                ))
            }

        </>
    )
}