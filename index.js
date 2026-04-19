// Fetch data from the API
//function fetchPosts() {
 // fetch("https://jsonplaceholder.typicode.com/posts")
   // .then((response) => {
     // if (!response.ok) throw new Error("Network error");
      //return response.json();
    //})
    //.then((posts) => displayPosts(posts))
    //.catch((error) => console.error("Fetch error:", error));
//}


//create async/await function
async function fetchAPI() {
  try{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("There was an error fetching the data");
  }
  const posts = await response.json();
  postDisplay(posts);
} catch(error){
  console.error("There was an error:", error);
}
}

//create function
function postDisplay(posts) {
  const postContainer = document.getElementById("post-list");

  postContainer.innerHTML = "";

  posts.forEach((item) => {
    const post = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");

    title.textContent = item.title;
    body.textContent = item.body;

    post.appendChild(title);
    post.appendChild(body);

    postContainer.appendChild(post);
  });
}

fetchAPI();


