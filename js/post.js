document.addEventListener("DOMContentLoaded", loadPost);

function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const post = blogPosts.find(p => p.id == postId);

    if (!post) {
        document.getElementById("post-content").innerHTML = "<h1>Post not found.</h1>";
        return;
    }

    document.getElementById("post-content").innerHTML = `
        <h1>${post.title}</h1>
        <p><i>Posted on ${post.date}</i></p>
        <p>${post.content}</p>
    `;
}
