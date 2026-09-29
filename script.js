const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch(
            "https://jeykfz2qdj.execute-api.ap-south-1.amazonaws.com/prod/contact",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const resultData = await response.json();

        result.textContent = resultData.message;
        form.reset();

    } catch (error) {
        result.textContent = "Something went wrong.";
        console.error(error);
    }
});