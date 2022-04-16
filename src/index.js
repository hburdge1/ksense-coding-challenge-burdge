

$(document).ready(function () {
    // full-scope variables
const mainImg = document.getElementById("main-img")
const pkmnType = document.getElementById("pkmn-type")
const userId = document.getElementById("user-id")
const abilities = document.getElementById("abilities")
const userList = document.getElementById("user-list")
let teamDiv = document.createElement('div')



function toTitleCase(upper) {
  return upper.charAt(0).toUpperCase() + upper.slice(1);
}
//remove children//
function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                    
                }
            }

//main code start//
//initial data fetch//
function openingFetch(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            data.map((d)=> {
              let nameLi = document.createElement("li")
              nameLi.innerHTML = d.username
              nameLi.addEventListener('click', () => fetchPosts(d))
              userList.appendChild(nameLi)
              $('<hr />').insertBefore(nameLi)
            } )
            
        });
    }
    
//closure: initial data fetch//
openingFetch()
function fetchPosts(d) {
    fetch(`https://jsonplaceholder.typicode.com/users/${d.id}`)
        .then(r=>r.json())
        .then(user=> renderUser(user))

//end fetch of feat mon//

function renderUser(u){
    userId.innerHTML=`Posts from User: ${u.username}`
    mainImg.src="https://api.thecatapi.com/v1/images/search"
     fetch(`https://jsonplaceholder.typicode.com/users/${u.id}/posts`)
        .then(r=>r.json())
        .then(posts => {
            posts.map((p)=>{

            })
        })
}
//**event listener set on search bar//
document.getElementById('monLookup').addEventListener('submit', (e) =>{
        e.preventDefault()
        fetch(monsUrl + (document.getElementById('mon').value) + '/')
        .then(data => data.json())
        .then(mon => renderMon(mon))

})
                            

//end of doc ready//
  }}  )
