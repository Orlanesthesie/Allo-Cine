async function films(){
    const response = await fetch("./data/moovies.json");
    const data = await response.json();

    console.log(data);

    data.forEach(film => {
        let sectionFilm = document.querySelector(".filmcard")
        sectionFilm.innerHTML += `
      
        <div class="container mb-5">
        <div class="row align-items-center">
        <div class="col"> <img src="${film.Poster}" height="400px" > </div>
        <div class="col">
         <h2>${film.Title}</h2>

        <div class="card">
            
             <ul class="col"> 
            <li> Sortie: ${film.Year} </li>
            <li> Genre: ${film.Genre} </li>
            <li> Realisateur: ${film.Director} </li>
            <li> Acteurs: ${film.Actors} </li>
            <li> Résumé: ${film.Plot} </li>
             </ul>
            
        </div>     
         <br>  
         <div>
        `
    })
}

films();