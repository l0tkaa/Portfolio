document.addEventListener("DOMContentLoaded", () => {
    loadPosts();
    document.getElementById("publish-btn").addEventListener("click", publishPost);
});

const getStoredPosts = () => JSON.parse(localStorage.getItem("blogPosts")) || [];
const savePosts = (posts) => localStorage.setItem("blogPosts", JSON.stringify(posts));

function publishPost() {
    const title = document.getElementById("post-title").value.trim();
    const content = document.getElementById("post-content").value.trim();
    if (!title || !content) {
        alert("Title and content cannot be empty!");
        return;
    }

    const newPost = {
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString().split("T")[0]
    };

    const blogPosts = getStoredPosts();
    blogPosts.unshift(newPost);
    savePosts(blogPosts);

    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";

    loadPosts();
}

function loadPosts() {
    const blogPosts = getStoredPosts();
    const latestContent = document.getElementById("latest-content");
    const blogList = document.getElementById("blog-list");

    blogList.innerHTML = "";
    latestContent.innerHTML = blogPosts.length
        ? `<h3><a href="post.html?id=${blogPosts[0].id}">${blogPosts[0].title}</a></h3><p>${blogPosts[0].date}</p>`
        : "<p>No posts yet.</p>";

    blogPosts.forEach(post => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="post.html?id=${post.id}">${post.title}</a> - ${post.date}`;
        blogList.appendChild(listItem);
    });
}
