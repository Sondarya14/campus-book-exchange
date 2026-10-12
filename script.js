// Function-safe execution depending on which page is loaded
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // PAGE 1: index.html Interactions
    // ==========================================
    const changeHeadingBtn = document.getElementById("changeHeadingBtn");
    if (changeHeadingBtn) {
        changeHeadingBtn.addEventListener("click", () => {
            const headerTitle = document.querySelector("#mainHeader h1");
            headerTitle.textContent = "Welcome to the Updated Campus Book Exchange!";
        });
    }

    const toggleSectionBtn = document.getElementById("toggleSectionBtn");
    if (toggleSectionBtn) {
        toggleSectionBtn.addEventListener("click", () => {
            const featuredSection = document.getElementById("featuredSection");
            if (featuredSection.style.display === "none") {
                featuredSection.style.display = "block";
                toggleSectionBtn.textContent = "Hide Featured Books";
            } else {
                featuredSection.style.display = "none";
                toggleSectionBtn.textContent = "Show Featured Books";
            }
        });
    }

    // Change background color of a featured card using .style and loop
    const colorChangeBtns = document.querySelectorAll(".colorChangeBtn");
    colorChangeBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".card");
            // Toggles background color between white and a soft light blue
            if (card.style.backgroundColor === "rgb(230, 242, 255)") {
                card.style.backgroundColor = "white";
            } else {
                card.style.backgroundColor = "#e6f2ff";
            }
        });
    });


    // ==========================================
    // PAGE 2: books.html Interactions
    // ==========================================
    const requestBtns = document.querySelectorAll(".requestBtn");
    requestBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".card");
            e.target.textContent = "Request Sent";
            e.target.style.backgroundColor = "#27ae60"; // Green confirmation color
            
            // Display a confirmation message inside that specific card
            let msg = card.querySelector(".confirmation-msg");
            if (!msg) {
                msg = document.createElement("p");
                msg.className = "confirmation-msg message";
                card.appendChild(msg);
            }
            msg.textContent = "Success! Request registered.";
        });
    });

    const showBookBtn = document.getElementById("showBookBtn");
    if (showBookBtn) {
        showBookBtn.addEventListener("click", () => {
            const inputVal = document.getElementById("searchInput").value.trim();
            const resultArea = document.getElementById("searchResultArea");
            
            if (inputVal !== "") {
                resultArea.textContent = `Displaying entered book title: "${inputVal}"`;
                resultArea.style.color = "#27ae60";
            } else {
                resultArea.textContent = "Please enter a valid book title first!";
                resultArea.style.color = "#c0392b";
            }
        });
    }

    const modifyCardBtn = document.getElementById("modifyCardBtn");
    if (modifyCardBtn) {
        modifyCardBtn.addEventListener("click", () => {
            const cardToModify = document.getElementById("cardToModify");
            const heading = cardToModify.querySelector("h3");
            heading.textContent = "Advanced Java Programming (Updated)";
            cardToModify.style.border = "2px dashed #3498db";
        });
    }


    // ==========================================
    // PAGE 3: list-book.html Interactions
    // ==========================================
    const changeFontSizeBtn = document.getElementById("changeFontSizeBtn");
    if (changeFontSizeBtn) {
        changeFontSizeBtn.addEventListener("click", () => {
            const formHeading = document.getElementById("formHeading");
            formHeading.style.fontSize = "2.5rem";
            formHeading.style.color = "#e67e22";
        });
    }

    const toggleFormBtn = document.getElementById("toggleFormBtn");
    if (toggleFormBtn) {
        toggleFormBtn.addEventListener("click", () => {
            const bookForm = document.getElementById("bookForm");
            if (bookForm.style.display === "none") {
                bookForm.style.display = "block";
                toggleFormBtn.textContent = "Hide Form";
            } else {
                bookForm.style.display = "none";
                toggleFormBtn.textContent = "Show Form";
            }
        });
    }

    const bookForm = document.getElementById("bookForm");
    if (bookForm) {
        bookForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page reload

            const studentName = document.getElementById("studentName").value.trim();
            const bookTitle = document.getElementById("bookTitle").value.trim();
            const author = document.getElementById("bookAuthor").value.trim();
            const subject = document.getElementById("subjectCategory").value.trim();
            const condition = document.getElementById("bookCondition").value;
            const formMessage = document.getElementById("formMessage");

            // Conditional validation check
            if (!studentName || !bookTitle || !author || !subject || !condition) {
                formMessage.textContent = "Error: All fields are required to list a book!";
                formMessage.className = "message error";
            } else {
                formMessage.textContent = `Thank you, ${studentName}! Your book "${bookTitle}" has been successfully listed.`;
                formMessage.className = "message";
                bookForm.reset(); // Reset fields
            }
        });
    }

});