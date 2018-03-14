function filtercards(){
    var cards = Array.from(document.getElementsByClassName('card'));

    //setting display none before filtering
    cards.forEach(function(card){
        if (card.style.display == "none"){
            card.style.display = "";
        }
    })
    //get checked boxes under causes heading
    var causeChecks = Array.from(document.getElementsByClassName('causecheck')).filter(function(check){
        return check.checked;
    })
    //get checked boxes under skillsheading
    var skillChecks = Array.from(document.getElementsByClassName('skillcheck')).filter(function(check){
        return check.checked;
    })

    var timeChecks = Array.from(document.getElementsByClassName('timecheck')).filter(function(check){
        return check.checked;
    })

    causeChecks = causeChecks.map(function(check){
        return check.nextSibling.innerHTML
    })

    skillChecks = skillChecks.map(function(check){
        return check.nextSibling.innerHTML
    })

    timeChecks = timeChecks.map(function(check){
        return check.nextSibling.innerHTML
    })

    //empty search returns all cards
    if (skillChecks.length + causeChecks.length + timeChecks.length== 0){
        return;
    }

    var filteredByCause = [];
    var filteredBySkill = [];
    var filteredByTime = [];

    //filter by causes
    for (let i = 0; i<cards.length; i++) {
        var mycardblock = cards[i].querySelector('.card-block')
        var myCauseTags = Array.from(mycardblock.querySelectorAll('.causetag'))
        myCauseTags = myCauseTags.map(function(tag){
            return tag.innerHTML;
        })

        var notRemove = myCauseTags.some(function(tag){
            return causeChecks.includes(tag)
        })

        if (notRemove){
            filteredByCause.push(cards[i]);
        }
    }

    //filter by skills
    for (let i = 0; i<cards.length; i++) {
        var mycardblock = cards[i].querySelector('.card-block')
        var mySkillTags = Array.from(mycardblock.querySelectorAll('.skilltag'));
        mySkillTags = mySkillTags.map(function(tag){
            return tag.innerHTML;
        })
        notRemove = mySkillTags.some(function(tag){
            return skillChecks.includes(tag)
        })
        if (notRemove){
            filteredBySkill.push(cards[i]);
        }
    }

    for (let i = 0; i<cards.length; i++) {
        var mycardblock = cards[i].querySelector('.card-block')
        var myTimeTags = Array.from(mycardblock.querySelectorAll('.timetag'));
        myTimeTags = myTimeTags.map(function(tag){
            return tag.innerHTML;
        })
        notRemove = myTimeTags.some(function(tag){
            return timeChecks.includes(tag)
        })
        if (notRemove){
            filteredByTime.push(cards[i]);
        }
    }

    //concatenate separate filters and filter out overlaps
    var filteredByAll = filteredBySkill.concat(filteredByCause)
    filteredByAll = filteredByAll.concat(filteredByTime)
    filteredByAll = Array.from(new Set(filteredByAll));

    //get set difference from cards
    var removedCards = cards.filter(function(card){
        return filteredByAll.indexOf(card) < 0
    })

    //set display none for remaining items
    for(var k= 0; k<removedCards.length; k++){
        removedCards[k].style.display = "none";
    }
}
