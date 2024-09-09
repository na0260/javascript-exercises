/*
Create an object student with a method addScore to add scores to an
array and a method getAverageScore to calculate the average score.
*/

const student = {
    scores: [],
    addScore: function(score){
        this.scores.push(score);
    },
    getAvgScore: function (){
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }
};

student.addScore(70);
student.addScore(80);
student.addScore(90);
student.addScore(100);
console.log(student.getAvgScore());
