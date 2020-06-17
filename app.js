const git = new github();
const ui = new UI();
const input = document.getElementById("suser");
input.addEventListener("keyup", e => {
  e.preventDefault();
  const uinput = e.target.value;
  if (uinput != "") {
    git.getuser(uinput).then(data => {
      if (data.profile.message === "Not Found") {
        // display error
        ui.alertmessage();
      } else {
        ui.showprofiledet(data.profile);
        //show profile
      }
    });
  } else {
    //got empty string
    ui.clearprofile();
  }
});
