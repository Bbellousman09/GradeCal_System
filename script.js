function calculateGrade() {     
    const score =  document.getElementById('score').value;
    let grade;  
    let message;  

    if (score.trim() === '') {  
        grade = 'Null';  
        message = 'Please enter a score.';  
    } else if (isNaN(score) || score < 0 || score > 100) {  
        grade = '';  
        message = 'Invalid score. Please enter a score between 0 and 100.';  
    } else if (score >= 90) {  
        grade = 'A';  
        message = 'Excellent, well done!';  
    } else if (score >= 80) {  
        grade = 'B';  
        message = 'Good job!';  
    } else if (score >= 70) {  
        grade = 'C';  
        message = 'You did okay!';  
    } else if (score >= 60) {  
        grade = 'D';  
        message = 'Please try harder next time.';  
    } else {  
        grade = 'Fail';  
        message = 'Don’t be discouraged, keep trying!';  
    }  

    document.getElementById('result').innerText = `Grade: ${grade}. ${message}`;  
}