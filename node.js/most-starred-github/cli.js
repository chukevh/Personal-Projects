let date1 = new Date()
date1.setFullYear(date1.getFullYear()-1)
let date2 = new Date()

const qstring = 'q=' + encodeURIComponent(`cat sort:stars order:desc created:2002-01-01..2003-01-01`)

console.log(qstring)

const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
console.log(queryString)