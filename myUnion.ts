let score: number | string = 33

score = 44

score = "55"

type Acct = {
  name: string;
  id: number
}

type Admin = {
  username: string;
  id: number
}

let joey: Acct | Admin = {
  name: "joey",
  id: 133
}

joey = {username: "jm", id: 334}

// accepts or returns multiple values

function getDbId(id:number | string) {
  // pretend make some API calls
  console.log(`DB id is ${id}`));
}

getDbId(3)
getDbId("3")