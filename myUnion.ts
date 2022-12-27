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