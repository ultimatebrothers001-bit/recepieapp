let language = "ne"; // default Nepali

// Fetch recipes
fetch("http://127.0.0.1:5000/recipes")
    .then(res => res.json())
    .then(data => {
        window.recipesData = data; // save globally
        renderRecipes();
    });

// Toggle language
function toggleLanguage() {
    language = (language === "ne") ? "en" : "ne";
    renderRecipes();
}

// Render recipes
function renderRecipes() {
    const list = document.getElementById("recipe-list");
    list.innerHTML = "";

    window.recipesData.forEach(recipe => {
        const div = document.createElement("div");
        div.className = "recipe";

        div.innerHTML = `
            <h2>${language === "ne" ? recipe.name_ne : recipe.name_en}</h2>
            <p><strong>समय / Time:</strong> ${language === "ne" ? recipe.time_ne : recipe.time}</p>
            <p><strong>वर्णन / Description:</strong> ${language === "ne" ? recipe.description_ne : recipe.description_en}</p>
            <pre>${language === "ne" ? recipe.steps_ne : recipe.steps_en}</pre>
        `;
        list.appendChild(div);
    });
}
