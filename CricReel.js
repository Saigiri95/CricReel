let liked = false;
let likes = 2400000;

/* Progress bar */
let progress = 0;
setInterval(() => {
    progress += 1;
    if (progress > 100) progress = 0;
    document.getElementById("progressFill").style.width = progress + "%";
}, 100);

/* Like button */
function likeVideo() {
    const icon = document.getElementById("likeIcon");
    const count = document.getElementById("likeCount");

    liked = !liked;
    likes += liked ? 1 : -1;

    icon.className = liked
        ? "fa-solid fa-heart text-red-500"
        : "fa-regular fa-heart";

    count.innerText = (likes / 1000000).toFixed(1) + "M";
}

/* Comments panel */
function showComments() {
    document.getElementById("commentPanel").classList.add("show");
}

function hideComments() {
    document.getElementById("commentPanel").classList.remove("show");
}
