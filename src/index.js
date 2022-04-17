

$(document).ready(function () {
    // full-scope variables
const mainImg = document.getElementById("main-img")
const pkmnType = document.getElementById("pkmn-type")
const userId = document.getElementById("user-id")
const postList = document.getElementById("post-list")
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
        .then(setImage)
}
//end fetch of feat mon//
function setImage(){
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(dog=> mainImg.src=dog.message)
}
function renderUser(u){
    removeAllChildNodes(userList)
    userId.innerHTML=`Posts from User: ${u.username}`
     fetch(`https://jsonplaceholder.typicode.com/users/${u.id}/posts`)
        .then(r=>r.json())
        .then(posts => {
            posts.map((p)=>{
                let postLi = document.createElement('li')
                let postBody= document.createElement('p')
                postLi.innerHTML = `${p.title}`
                postBody.innerHTML = `${p.body}`
                postList.appendChild(postLi, postBody)
            })
        })
}

                            

//end of doc ready//
  }  )
