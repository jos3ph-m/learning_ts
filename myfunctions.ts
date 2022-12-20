function addTwo(num: number):number{
  return num + 2
  // this would not be allowed: return "hello"
}

function getUpper(val: string) {
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

let myValue = addTwo(5)
getUpper("joey")
signUpUser("joey", "joey@joey.com", false)
loginUser("j", "j@j.com")


// function getValue(myVal: number) {
//   if (myValue > 5) {
//     return true
//   }
//   return "200 ok"
// }

const getHello = (s: string):string => {
  return ""
}

const heroes = ["thor", "wolverine", "storm"]

heroes.map((hero): string => {
  return `hero is ${hero}`
})

function consoleError(errmsg) {
  console.log(errmsg);
  
}

export {}