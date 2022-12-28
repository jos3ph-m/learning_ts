var score = 33;
score = 44;
score = "55";
var joey = {
    name: "joey",
    id: 133
};
joey = { username: "jm", id: 334 };
// accepts or returns multiple values
// function getDbId(id:number | string) {
//   // pretend make some API calls
//   console.log(`DB id is ${id}`));
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // cant do this
    // id.toLowerCase()
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 2;
    }
}
// array
var data = [1, 2, 3];
// both types in array
var data3 = ["1", 2, "3"];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
