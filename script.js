
let allpost;
function loadData(){
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then((datas) => {
        displayCountries(datas)
        allpost = datas;
    });
}
loadData();

function displayCountries(countries){
    let first9Posts = countries?.slice(0, 9);

    let len = countries.length;
    let pages = Math.ceil(len / 9)

    let pageArr = [...Array(pages)].map((page, indx) => indx + 1) 
    console.log(pageArr);
    for (const page of pageArr){

        const btnContainer = document.getElementById("btn_container");    
        const btnDiv = document.createElement("div");
        btnDiv.classList.add('btn');
        btnDiv.innerHTML = `
        <button onclick="pageFunction(${page})">${page}</button>
        `;
        btnContainer.appendChild(btnDiv);
    }

    for(const post of first9Posts){
    const {name, capital, population, region, area, flags} = post
    const countryContainer = document.getElementById("card");
    let postDIV = document.createElement('div');
    postDIV.classList.add("post");
    
        postDIV.innerHTML = `
        <img class="images" src=${flags.png} alt="">
        <h4 class = 'post_id'>Country Name : <span class = "pid">${name.official}</span> </h4>
        ${(capital?.[0]) !== undefined ?`<h5 class = "p_title">Capital : <span class = "ptt">${(capital?.[0]) !== undefined ? capital?.[0] : "Nothing"}</span></h5>` : ""}
        <h5 class = "para"><span class = "pd">Population :</span> ${population}</h5>
        <h5 class = "para"><span class = "pd">Area :</span> ${area}</h5>
        <h5 class = "para"><span class = "pd">Region :</span> ${region}</h5>
                `;

        countryContainer.appendChild(postDIV);
    }
}

function pageFunction(btn){
    let pageCountry = allpost.slice((9 * (btn -1)), (9 * (btn -1 )) + 9);

    const countryContainer = document.getElementById("card");
    countryContainer.innerHTML = "";
    for(const post of pageCountry){
        const {name, capital, population, region, area, flags} = post
        let postDIV = document.createElement('div');
        postDIV.classList.add("post");
            postDIV.innerHTML =`
            <img class="images" src=${flags.png} alt="">
            <h4 class = 'post_id'>Country Name : <span class = "pid">${name.official}</span> </h4>
            <h5 class = "p_title">Capital : <span class = "ptt">${capital}</span></h5>
            <h5 class = "para"><span class = "pd">Population :</span> ${population}</h5>
            <h5 class = "para"><span class = "pd">Area :</span> ${area}</h5>
            <h5 class = "para"><span class = "pd">Region :</span> ${region}</h5>
                    `;
    
            countryContainer.appendChild(postDIV);
        }
}


