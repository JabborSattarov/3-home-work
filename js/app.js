const form = document.getElementById("form");

const btn = document.querySelector("#button");

const box = document.querySelector("#box");

let select = document.querySelector("#select");

let inpSearch = document.querySelector("#inpSearch");
inpSearch.addEventListener("input", searching);

function searching() {
    box.innerHTML = "";
    let filmsName = films.filter(name => {
        let lower = name.title.toLocaleLowerCase();
        if (lower.includes(inpSearch.value)) return name;
    })
    renderMovi(filmsName, box)
}


function renderMovi(film, list) {
    list.innerHTML = "";
    let Count = document.querySelector("#count");
    Count.textContent = `Filtered (${film.length})`
    film.forEach(movi => {
        let card = document.createElement("div");
        card.setAttribute("class", "bg-light w-25 m-3   border p-4");
        list.appendChild(card);

        let img = document.createElement("img");
        img.setAttribute("src", movi.poster);
        img.setAttribute("class", "w-100 mb-4");
        card.appendChild(img);

        let title = document.createElement("h5");
        title.textContent = movi.title;
        title.setAttribute("class", "h4 fst-italic");
        card.appendChild(title);

        let p = document.createElement("p");
        p.setAttribute("class", "p fst-normal");
        p.textContent = movi.overview.split(" ").splice(0, 15).join(" ") +" "+" ...";
        card.appendChild(p);

        let time = document.createElement("time");
        time.textContent = format(movi.release_date);
        time.setAttribute("class", "fw-bold");
        card.appendChild(time);

        let ul = document.createElement("ul")
        card.append(ul)
        movi.genres.forEach(j => {
            let li = document.createElement("li")
            li.textContent = j;
            ul.appendChild(li)
        })

    })
}
renderMovi(films, box)


let selecting = films.reduce((PV, CV) => {
    CV.genres.filter(g => {
        if (!PV.includes(g)) {
            PV.push(g)
        }
    })
    return PV
}, []);

let sel = selecting.forEach(opt => {
    let option = document.createElement("option");
    option.textContent = opt;
    option.value = opt
    select.appendChild(option)
});

form.addEventListener("submit", (event) => {
    event.preventDefault()


    btn.addEventListener("click", () => {

        let filtered = films.filter(mov => {

            if (mov.genres.includes(select.value)) {
                return mov
            }
        })
        renderMovi(filtered, box)

        let inpSearch = document.querySelector("#inpSearch");
        inpSearch.addEventListener("input", searching);

        function searching() {
           
            renderMovi(filmsName, box)
        }
    })

});