function getGrade() {
    let marks = prompt("Enter student marks (between 0 and 100):");
    marks = parseInt(marks);
  
    if (marks > 100 || marks < 0 || isNaN(marks)) {
      return "Invalid input! Please enter a number between 0 and 100.";
    } else if (marks >79) {
      return "Grade: A";
    } else if (marks >= 60 && marks <=79) {
      return "Grade: B";
    } else if (marks >= 49 && marks <=59) {
      return "Grade: C";
    } else if (marks >= 40 && marks <=49) {
      return "Grade: D";
    } else if (marks <40){
      return "Grade: E";
    }
  }