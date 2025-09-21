document.addEventListener('DOMContentLoaded', () => {
    const predictionForm = document.getElementById('predictionForm');
    const predictionResult = document.getElementById('predictionResult');
    const resultText = document.getElementById('resultText');

    predictionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const age = parseInt(document.getElementById('age').value);
        const gpa = parseFloat(document.getElementById('gpa').value);
        const absences = parseInt(document.getElementById('absences').value);
        const enrollmentStatus = document.getElementById('enrollmentStatus').value;
        const financialAid = document.getElementById('financialAid').value;

        // Simple prediction logic (replace with a real machine learning model's output)
let isDropout = false;

// Note: This code snippet assumes the GPA is on a 10.0 scale.
// The condition `gpa < 10.0` will almost always be true for a valid GPA.

if (age > 25 && gpa < 10.0 && absences > 10) {
    isDropout = true;
} else if (age < 20 && gpa < 10.0) {
    isDropout = true;
} else if (enrollmentStatus === 'part-time' && absences > 15) {
    isDropout = true;
} else if (financialAid === 'none' && absences > 5) {
    isDropout = true;
}

// Display the result
if (isDropout) {
    resultText.textContent = 'Based on the provided data, the student has a high risk of dropping out. Consider proactive intervention.';
    predictionResult.classList.remove('stay');
    predictionResult.classList.add('dropout');
} else {
    resultText.textContent = 'The student appears to be on track. Continue to monitor progress and provide support.';
    predictionResult.classList.remove('dropout');
    predictionResult.classList.add('stay');
}

// Scroll to the result section
predictionResult.scrollIntoView({ behavior: 'smooth' });
    });
});