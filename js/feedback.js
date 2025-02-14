document.addEventListener("DOMContentLoaded", () => {
    loadFeedback();
    document.getElementById("submit-feedback").addEventListener("click", submitFeedback);
});

const getFeedback = () => JSON.parse(localStorage.getItem("feedback")) || [];
const saveFeedback = (comments) => localStorage.setItem("feedback", JSON.stringify(comments));

function submitFeedback() {
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (!name || !comment) {
        alert("Please enter your name and feedback.");
        return;
    }

    const newFeedback = { name, comment, date: new Date().toLocaleString() };
    const feedbackList = getFeedback();
    feedbackList.unshift(newFeedback);
    saveFeedback(feedbackList);

    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
    loadFeedback();
}

function loadFeedback() {
    const feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = "";
    const feedbackData = getFeedback();

    if (feedbackData.length === 0) {
        feedbackList.innerHTML = "<p>No feedback yet. Be the first to leave a comment!</p>";
        return;
    }

    feedbackData.forEach(feedback => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${feedback.name}</strong> (${feedback.date}):<br>${feedback.comment}`;
        feedbackList.appendChild(listItem);
    });
}
