let input = document.getElementById("input")
let content = document.getElementById("content")
let findBtn = document.getElementById("find").addEventListener("click",()=>{
    fetchData()


})
let url = "https://www.omdbapi.com/?apikey=d65c3079&"


async function fetchData (){
try {
let response = await (await fetch(url+"t="+input.value)).json()
console.log(response)
let movies =`
<h1>${response.Title}</h1>
<img src="${response.Poster}" alt
<p>${response.Year}</p>
<p>${response.Genre}</p>
`
content.innerHTML += movies
} catch (error) {
    console.log("error")
}

}