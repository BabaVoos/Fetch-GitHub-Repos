// Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

// Get Repos Function
function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Please Write GitHub Username</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((res) => res.json())
      .then((repos) => {
        // Empty The Container
        reposData.innerHTML = "";

        // Loop On Repos
        repos.forEach((repo) => {
          // Create The Main Dev Element
          let mainDiv = document.createElement("div");
          // create repo name text
          let repoName = document.createTextNode(repo.name);
          // Append The Text To Main Div
          mainDiv.appendChild(repoName);

          // Create Repo URL
          let theURL = document.createElement("a");

          // Create Repo URL Text
          let theURLText = document.createTextNode("Visit");

          // Append The URL Text To Anchor Tag
          theURL.appendChild(theURLText);

          // Add The Hypertext Refrence "href"
          theURL.href = `https://github.com/${theInput.value}/${repo.name}`;

          // Set Attribute Blank
          theURL.setAttribute("target", "_blank");

          // Append URL Anchor To Main Div
          mainDiv.appendChild(theURL);

          // Create Stars Count Span
          let starsSpan = document.createElement("span");

          // Create The Stars Count Text
          let starsText = document.createTextNode(`ID: ${repo.id}`);

          // Add Stars Count Text To Stars Span
          starsSpan.appendChild(starsText);

          // Append Stars Count Span To Main Div
          mainDiv.appendChild(starsSpan);

          // Add Class On Main Div
          mainDiv.className = "repo-box";

          // Append The Main Div To Container
          reposData.appendChild(mainDiv);
        });
      });
  }
}
