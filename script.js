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
        /**
         * Error Catching
         */

        // CourseInfo
        if (typeof course.id !== "number"){
            throw `Course ID must be a number.`
        }
        if (typeof course.name !== "string"){
            throw `Course Name must be a string.`
        }

        // AssignmentGroup
        if (typeof ag.id !== "number"){
            throw `AssignmentGroup ID must be a number.`
        }
        if (typeof ag.name !== "string"){
            throw `AssignmentGroup Name must be a string.`
        }
        if (typeof ag.course_id !== "number"){
            throw `AssignmentGroup course ID must be a number.`
        }
        if (typeof ag.group_weight !== "number"){
            throw `AssignmentGroup group weight must be a number.`
        }
        if (typeof ag.assignments !== "object"){
            throw `AssignmentGroup assignments must be an object.`
        }

        // Generate results array with students results
        let results = []

        let obj1 = { // student 1 object
            id: 5150,
        }
        let obj2 = { // student 2 object
            id: 5322,
        }

        let sum = 0;
        let sum2 = 0;

        let count = 0;
        let count2 = 0;

        let j = 0;

        for( let i = 0; i < submissions.length; i++){
            // console.log(submissions.learner_id)
            if(submissions[i].learner_id === 5150){
                // console.log(submissions[i].assignment_id)
                if(submissions[i].assignment_id === 1){
                    obj1.first = (submissions[i].submission.score / ag.assignments[j].points_possible) * 100; // 95
                    sum += obj1.first;
                    // console.log(sum)
                    count++;
                    j++;
                } else if(submissions[i].assignment_id === 2){
                    obj1.second = (submissions[i].submission.score / ag.assignments[j].points_possible) * 100; // 96
                    sum += obj1.second;
                    // console.log(sum)
                    count++;
                    j++
                } else if(submissions[i].assignment_id === 3){
                    obj1.third = (submissions[i].submission.score / ag.assignments[j].points_possible) * 100; // 97.8
                    sum += obj1.third;
                    // console.log(sum) 
                    count++;
                    j = 0;
                }
                obj1.avg = sum / count;
            } else if (submissions[i].learner_id === 5322){
                if(submissions[i].assignment_id === 1){
                    obj2.first = (submissions[i].submission.score / ag.assignments[j].points_possible) * 100;
                    sum2 += obj2.first;
                    count2++;
                    j++;
                } else if(submissions[i].assignment_id === 2){
                    obj2.second = (submissions[i].submission.score / ag.assignments[j].points_possible) * 100;
                    sum2 += obj2.second;
                    count2++;
                    j++;
                } else if(submissions[i].assignment_id === 3){
                    obj2.third = (submissions[i].submission.score / ag.assignments[j].points_possible) * 100;
                    sum2 += obj2.third;
                    count2++;
                    j = 0;
                }
                obj2.avg = sum2 / count2;
            }
        }
        // console.log(obj)
        results.push(obj1);
        results.push(obj2);

        return results;
    } catch (err) {
        console.log(err)
    }
}

// Testing
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result)