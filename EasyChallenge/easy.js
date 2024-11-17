//Easy Mode//
//Function is a closure//
//Closure is when a function returns another function//

function todayExercise (workout) {
    let exerciseOfTheDay = workout;
    return function(){
        console.log(`Today's exercise: ${exerciseOfTheDay}`)
    }
}
let exercise = todayExercise('dancing');
exercise()


