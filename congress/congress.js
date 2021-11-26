import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const members = [...senators, ...representatives] // this line is the modern and right way to combine arrays for future reference
const senatorDiv = document.querySelector('.senators')
const loyaltyHeading = document.querySelector('.mostLoyal')
const seniorityHeading = document.querySelector('.seniority')

// const header = document.createElement('header')

//const senatorsButton = document.createElement('button')
//senatorsButton.textContent = 'Senators'
//senatorsButton.addEventListener('click', () => populateSenatorDiv(justSenators))
//header.appendChild(senatorsButton) I need help hahahaha

populateSenatorDiv(SimplifiedMembers())

function SimplifiedMembers(chamberFilter) {
    const filteredArray = members.filter(member => chamberFilter ? member.short_title === chamberFilter : member)

    return filteredArray.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} `: ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            party: senator.party,
            gender: senator.gender,
            seniority: +senator.seniority,
            state: senator.state,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct,
        }
    })
}

function populateSenatorDiv(simpleSenators) {
    simpleSenators.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    })
}

const filterSenators = (prop, value) => {
    return SimplifiedMembers().filter(senator => senator[prop] === value)
}

const mostSeniorMember = SimplifiedMembers().reduce((acc, senator) => {
    return acc.seniority > senator.seniority ? acc : senator
})

seniorityHeading.textContent = `-The most senior member of Congress is ${mostSeniorMember.name} whoe has been in Congress for ${mostSeniorMember.seniority} years-`

const mostLoyal = SimplifiedMembers().reduce((acc, senator) => {
    if (senator.loyaltyPct === 100) {
        acc.push(senator)
    }
    return acc
}, [])

const naughtyList = document.createElement('ol')

const unwavering = mostLoyal.map(naughty => {
    let listItem = document.createElement('li')
    listItem.textContent = naughty.name
    naughtyList.appendChild(listItem)
})

loyaltyHeading.appendChild(naughtyList)



