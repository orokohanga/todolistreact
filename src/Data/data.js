

let myTasks = [
    {
        "id" : 1,
        "name" : "Luc",
    },

    {
        "id" : 2,
        "name" : "Balmont",
    },

    {
        "id" : 3,
        "name" : "Messi",
    },
    {
        "id" : 4,
        "name" : "Faire le TD",
    },
];

export default function addTask(name) {
let newTask = {"id": myTasks.length ,"name": name}
myTasks.push(newTask)
console.log(myTasks)
}

export {myTasks};
