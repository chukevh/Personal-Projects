#!/usr/bin/env node
import inquirer from 'inquirer'
import axios from 'axios'

function convertDate(date) {
    const dateYear = date.getFullYear()
    const dateMonth = date.getMonth()
    const dateDay = date.getDate()
    return `${dateYear}-${dateMonth+1}-${dateDay}`
}

async function getMostStarredDate(date1, date2) {
    try {
        const res = await axios.get(`https://api.github.com/search/repositories?q=cat&per_page=1&sort=stars&order=desc` + encodeURIComponent(`created:${date1}..${date2}`))
        const githubName = res.data.items[0].full_name
        const githubStars = res.data.items[0].stargazers_count
        console.log(`Most starred GitHub repo in date range is ${githubName} with ${githubStars} stars`)
    } catch (err) {
        console.log(err)
    }
}

let date1 = new Date()
date1.setFullYear(date1.getFullYear()-1)
let date2 = new Date()
inquirer
    .prompt([
        {
        type: "question",
        name: "date1",
        message: "Select a date range starting with first date YYYY-MM-DD",
        default: convertDate(date1)
        },
        {
        type: "question",
        name: "date2",
        message: "Select end date YYYY-MM-DD",
        default: convertDate(date2)
        }
    ])
    .then(async (answers) => {
        try {
            getMostStarredDate(answers.date1,answers.date2)
        } catch (err)  {
            console.log(`${err} invalid date`)
        }
    })