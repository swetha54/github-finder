class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showprofiledet(user) {
    this.profile.innerHTML = `
        <div class=" container row">
          <div class="col s3">
            <img class="responsive-img" src="${user.avatar_url}"><br>
           
            <a href="${user.html_url}" target="_blank">View Profile</a>
         
           
          </div>
          <div class="col s9">
               <span class="btn small">Public Repos: ${user.public_repos}</span>
            <span class="btn green small">Public Gists: ${user.public_gists}</span>
            <span class="btn red small">Followers: ${user.followers}</span>
            <span class="btn black small">Following: ${user.following}</span>
         
            <br><br>
            <ul class="collection">
            <li class="collection-item">User Name: ${user.name}</li>
              <li class="collection-item">Company: ${user.company}</li>
              <li class="collection-item">Website/Blog: ${user.blog}</li>
              <li class="collection-item">Location: ${user.location}</li>
              <li class="collection-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    
    `;
  }
  clearprofile() {
    this.profile.innerHTML = "";
  }

  alertmessage() {
    this.profile.innerHTML = `
    <div class="container"><h1>OOPS! No result found!! Try other names</h1>
    <img class="responsive-img" src="404.jpg"></div>`;
  }
}
