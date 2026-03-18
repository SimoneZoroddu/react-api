import { useEffect, useState } from 'react'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

function App() {
  const apiActros_url = 'https://lanciweb.github.io/demo/api/actors/'
  const apiActresses_url = 'https://lanciweb.github.io/demo/api/actresses/'
  const [actros, setActros] = useState([])
  const [actresses, setActresses] = useState([])

  const allActors = [...actros, ...actresses]
  
  allActors.sort((a, b) => a.name.localeCompare(b.name));

 /*  allActors.sort(function (a, b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  }) */

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
      <AppHeader />
      <AppMain allActors={allActors} />
    </>
  )
}

export default App