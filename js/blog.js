document.addEventListener("DOMContentLoaded", () => {
    checkAuth();
    loadPosts();
    document.getElementById("publish-btn").addEventListener("click", publishPost);
});




// 🔒 Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem("isAdmin");
    const authButtons = document.getElementById("auth-buttons");


    if (isLoggedIn) {
        authButtons.innerHTML = `
            <span id="admin-status">Logged in as Admin</span>
            <button id="logout-btn">Logout</button>
        `;
        document.getElementById("post-editor").style.display = "block";
        document.getElementById("logout-btn").addEventListener("click", logout);
    } else {
        authButtons.innerHTML = `<button id="login-btn">Login</button>`;
        document.getElementById("login-btn").addEventListener("click", login);
    }
}





// 🔐 Simulated Login (Replace with real authentication)
function login() {
    const password = prompt("Enter admin password:");
    if (password === "yourpassword") {  // Replace with a real authentication method!
        localStorage.setItem("isAdmin", "true");
        location.reload();
    } else {
        alert("Incorrect password!");
    }
}

// 🔓 Logout function
function logout() {
    localStorage.removeItem("isAdmin");
    location.reload();
}

// Function to Publish a New Post (Private)
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

    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    blogPosts.unshift(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";

    loadPosts();
}

// Function to Load Blog Posts (Public)
function loadPosts() {
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const latestContent = document.getElementById("latest-content");
    const blogList = document.getElementById("blog-list");

    blogList.innerHTML = "";

    if (blogPosts.length === 0) {
        latestContent.innerHTML = "<p>No posts yet.</p>";
        return;
    }

    // Display full latest post
    const latestPost = blogPosts[0];
    latestContent.innerHTML = `
        <h3>${latestPost.title}</h3>
        <p><i>Posted on ${latestPost.date}</i></p>
        <p>${latestPost.content}</p>
    `;

    // Display all posts list
    blogPosts.forEach(post => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="post.html?id=${post.id}">${post.title}</a> - ${post.date}`;
        blogList.appendChild(listItem);
    });
}
