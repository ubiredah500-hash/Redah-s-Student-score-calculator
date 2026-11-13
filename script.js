// Select all student rows
const students = document.querySelectorAll("tbody tr");

// Loop through each student
students.forEach(function(student) {

    // Select all score input fields in the current row
    const scores = student.querySelectorAll(".score");

    // Select the Total and Grade columns
    const totalDisplay = student.querySelector(".total");
    const gradeDisplay = student.querySelector(".grade");

    // Listen for changes in each input field
    scores.forEach(function(input) {

        input.addEventListener("input", function() {

            // Calculate the student's total score
            let total = 0;
            let hasInput = false;

            scores.forEach(function(score) {

                let value = Number(score.value);

                if (score.value !== "") {
                    hasInput = true;
                }

                total += value;

            });

            // Display the total score
            totalDisplay.textContent = total;

            // Calculate the student's grade
            if (!hasInput) {
                gradeDisplay.textContent = "-";
            }
            else if (total >= 70) {
                gradeDisplay.textContent = "A";
            }
            else if (total >= 60) {
                gradeDisplay.textContent = "B";
            }
            else if (total >= 50) {
                gradeDisplay.textContent = "C";
            }
            else if (total >= 45) {
                gradeDisplay.textContent = "D";
            }
            else if (total >= 40) {
                gradeDisplay.textContent = "E";
            }
            else {
                gradeDisplay.textContent = "F";
            }

        });

    });

});