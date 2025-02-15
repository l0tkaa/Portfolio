document.addEventListener("DOMContentLoaded", loadProjects);

function loadProjects() {
    const projects = [
        {   title: "Snake Game",
            description: "Classic Snake game built with Python and Pygame. The player controls a snake that moves around the screen, eats food to grow, and avoids crashing into itself.",
            tech: "Python, Pygame",
            github: "https://github.com/l0tkaa/Snake_Game",
            demo: "<img src="https://github.com/user-attachments/assets/816ecac9-2867-4a53-9c88-b6cd9d2a2c13" width="350">"
        },
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
