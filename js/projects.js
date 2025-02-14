document.addEventListener("DOMContentLoaded", loadProjects);

function loadProjects() {
    const projects = [
        {
            title: "AI Stock Predictor",
            description: "A machine learning model that predicts stock prices based on historical data.",
            tech: "Python, TensorFlow, Flask",
            github: "https://github.com/yourusername/ai-stock-predictor",
            demo: "#"
        },
        {
            title: "Expense Tracker",
            description: "A web app that helps users track their daily expenses and visualize spending patterns.",
            tech: "React, Node.js, MongoDB",
            github: "https://github.com/yourusername/expense-tracker",
            demo: "#"
        }
    ];

    const projectsList = document.getElementById("projects-list");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Tech:</strong> ${project.tech}</p>
            <a href="${project.github}" target="_blank">GitHub</a> |
            <a href="${project.demo}" target="_blank">Live Demo</a>
        `;

        projectsList.appendChild(projectCard);
    });
}
