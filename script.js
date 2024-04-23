let CourseInfo = {
    id: 1443,
    name: "Intro to Game Design and Development",
}

// Template for array of assignment objects
// let AssignmentInfo = {
//     id: number, 
//     name: string,
//     // The due date for the assignment
//     due_at: Date,
//     // The maximum points possible for the assignment
//     points_possible: number,
// }

let AssignmentGroup = {
    id: 657483, 
    name: "GameMaker Basics",
    // The ID of the course that the assignment group belongs to (above)
    course_id: 1443, 
    // The percentage weight of the entire assignment group
    group_weight: 25,
    // Array of AssignmentInfo objects
    assignments: [
        {
            id: 1,
            name: "Prototype 1",
            due_date: "2024-01-14",
            points_possible: 100
        },
        {
            id: 2,
            name: "Midterm Project",
            due_date: "2024-04-26",
            points_possible: 250
        },
        {
            id: 3,
            name: "Final Project",
            due_date: "2024-06-06",
            points_possible: 500
        },
    ]
}

// Template for Learner Submissions
// let LearnerSubmission = {
//     learner_id: number,
//     assignment_id: number,
//     submission: {
//         submitted_at: Date,
//         score: number,
//     }
// }

// Array of Learner Submission objects
const LearnerSubmissions = [
    // Student 1 - Better student to test if stuff works properly
    {
        learner_id: 5150,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-01-12",
            score: 95
        }
    },
    {
        learner_id: 5150,
        assignment_id: 2,
        submission: {
            submitted_at: "2024-04-21",
            score: 240
        }
    },
    {
        learner_id: 5150,
        assignment_id: 3,
        submission: {
            submitted_at: "2024-06-05",
            score: 489
        }
    },
///////////////////////////////////////////////////////////////////////
// Student 2 - Lesser student to test errors
    {
        learner_id: 5322,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-01-15",
            score: 75
        }
    },
    {
        learner_id: 5322,
        assignment_id: 2,
        submission: {
            submitted_at: "2024-04-26",
            score: 179
        }
    },
    {
        learner_id: 5322,
        assignment_id: 3,
        submission: {
            submitted_at: "2024-06-05",
            score: 365
        }
    },
]

function getLearnerData(course, ag, submissions){
    try{
        // Generate results array with students results
        let results = []
        submissions.forEach((n, i) => {
            switch(submissions.learner_id){
                case 5150:
                    // Sum of all scores
                    let sum = 0;
                    // Counts assignments added
                    let count = 0;
                    // Object for student
                    let obj = {
                        id: 5150 // student ID
                    }
                    // Goes through submissions array, gets the score for each assignment under specific student ID, and stores score in new key 
                    for (let i = 1; i <= submissions.length; i++){
                        obj.i = submissions.submission.score / ag.assignments.points_possible;

                        // Keeps track of sum of scores
                        sum += (submissions.submission.score / ag.assignments.points_possible);

                        // Counts assignments added
                        count++;
                    }
                    obj.avg = sum / count;
                    results.push(obj)
                    break;
                case 5322:
                    // Sum of all scores
                    let sum2 = 0;
                    // Counts assignments added
                    let count2 = 0;
                    // Object for student
                    let obj2 = {
                        id: 5150 // student ID
                    }
                    // Goes through submissions array, gets the score for each assignment under specific student ID, and stores score in new key 
                    for (let i = 1; i <= submissions.length; i++){
                        obj.i = submissions.submission.score / ag.assignments.points_possible;

                        // Keeps track of sum of scores
                        sum2 += (submissions.submission.score / ag.assignments.points_possible);

                        // Counts assignments added
                        count2++;
                    }
                    obj.avg2 = sum2 / count2;
                    results.push(obj2)
                    break;
                default:
                    throw `Student ID does not match any submissions.`
            }
        })

        // Assignment Group does not belong to Course
        if(ag.course_id !== course.course_id){
            throw `Assignment and Course ID's do not match. Assignments do not belong to this course.`
        }

        // Makes sure point_possible isn't 0
        ag.assignments.forEach(points_possible => {
            if (points_possible <= 0){
                throw `Points for assignments cannot be 0.`
            }
        });

        // Makes sure that values have the correct data type
        if(typeof course.id !== number){
            throw `Course ID must be a number`
        }

        if(typeof course.name !== string){
            throw `Course Name must be a String`
        }

        // If assignment submitted late, do not include it in results or average

    } catch (err) {
        console.log(err)
    }
}


// Testing
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result)