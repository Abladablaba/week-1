const profileimage = document.querySelector("#profileimage");
const firstnamespan = document.querySelector("#firstname");
const agespan = document.querySelector("#age")
const statusspan = document.querySelector("#status")
const btnupdateprofile = document.querySelector("#updatebtn");

const isCeVIO = confirm("Are you from CeVIO?");


if(isCeVIO === true){
    console.log("Welcome to Maximizer");
}
else {
    profileimage.src = "images/89356180_p0.png";
    firstnamespan.innerHTML = "Make one up!";
    agespan.innerHTML = "Guess";
    statusspan.innerHTML = "Thinking, probably?";


}

btnupdateprofile.addEventListener("click", () => {
    profileimage.src = "images/128126974_p0_master1200.jpg";
    firstnamespan.innerHTML = "Hatsune Miku";
    agespan.innerHTML = "16";
    statusspan.innerHTML = "Singin'!";
})