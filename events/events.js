const URL = "https://bits-oasis.org/registrations/events_details/";

let ALL_EVENTS;

const eventsNames = [
    'Mr and Ms Taarangana',
    'Rangmanch',
    'Aaghaz',
    'Rap Battle',
    'Group Singing-Antra',
    'Urban Thump',
    'Solo Singing-Anhad',
    'Lilac Dreams',
    'Slam Poetry',
    'Knight of the fall'
];

function fetchEvents() {
    fetch(URL).then(resp => resp.json())
    .then(function(response) {
        console.log(response);
        ALL_EVENTS = response
    });
}

fetchEvents();

const eventsImgUrl = [
    'images/events/dance.svg',
    'images/events/drama.svg',
    'images/events/fine arts.svg',
    'images/events/music.svg',
    'images/events/photography.svg',
    'images/events/fashion.svg',
    'images/events/oratory.svg',
    'images/events/quizzing.svg',
    'images/events/humour.svg',
    'images/events/film fest.svg',
    'images/events/misc.svg'
];

const eventDesc = {
    'Mr and Ms Taarangana':'dfcghjk',
    'Rangmanch':'dfcghjk',
    'Aaghaz':'ertyui',
    'Rap Battle':'fgvbhnjmk',
    'Group Singing-Antra':'vbhnjxmk',
    'Urban Thump':'wsdcvbhuj',
    'Solo Singing-Anhad':'njkmlm k',
    'Lilac Dreams': 'edrftgbhnj',
    'Slam Poetry':'sedrftg',
    'Knight of the fall':'drfgh'
};


const eventsContainer = document.getElementsByClassName("events-container")[0];

const numberOfEvents = eventsNames.length;
let eventIndex = 1;

const createEvent = (parentAppend) => {
    for (j = 0; j < numberOfEvents; j++) {
        let eventsCard = document.createElement('div');
        eventsCard.className = "events-card";
        if (j == 1) {
            eventsCard.classList.add('active');
        }

        let eventsCardFront = document.createElement('div');
        eventsCardFront.className = "events-card-front";

        let eventsNameContainer = document.createElement('div');
        eventsNameContainer.className = "event-name";
        let eventsName = document.createTextNode(eventsNames[j]);
        eventsNameContainer.appendChild(eventsName);
        eventsCardFront.appendChild(eventsNameContainer);

        // let eventsCardFrontImg = document.createElement('div');
        // eventsCardFrontImg.className = "event-img"
        // eventsCardFrontImg.setAttribute('style', "background-image: url('" + eventsImgUrl[j] + "')");
        // eventsCardFront.appendChild(eventsCardFrontImg);

        // let seperator = document.createElement('hr');
        // seperator.align = 'center';
        // seperator.width = '35%';
        // seperator.size = '5px';
        // seperator.color = '#9A6D9A';
        // eventsCardFront.appendChild(seperator);

        let eventsCardFrontLink = document.createElement('div');
        eventsCardFrontLink.className = "event-link";
        eventsCardFrontLink.innerHTML = "View Details >";
        eventsCardFront.appendChild(eventsCardFrontLink);

        eventsCard.appendChild(eventsCardFront);

        parentAppend.appendChild(eventsCard);
        const eventType = eventsNames[j];
        eventsCardFrontLink.addEventListener('click', () => {
            openAllEvents(eventType)
        });
    }
}

const createEventDots = () => {
    const dotsContainer = document.getElementsByClassName('events-nav-dots')[0];
    for (i = 0; i < ((window.innerWidth > 600) ? (numberOfEvents - 2) : numberOfEvents); i++) {
        let dot = document.createElement('div');
        dot.className = "event-nav-dot";
        dot.id = (i + 1);
        dot.setAttribute('onclick', 'navigateEvent(this.id)');
        if (i === 0) {
            dot.classList.add('active-dot');
        }
        dotsContainer.appendChild(dot);
    }
}

createEventDots();
createEvent(eventsContainer);
createEvent(document.getElementsByClassName('all-events-type-container')[0]);




const changeEventSet = () => {
    const limit = numberOfEvents;
    if (eventIndex < limit) {
        eventIndex++;
        if (window.innerWidth > 600) {
            eventsContainer.style.transform = "translate(" + (-27.15 * (eventIndex - 1)) + "%)";
        } else {
            eventsContainer.style.transform = "translate(" + (-100 * (eventIndex - 1)) + "%)";
        }
        (eventIndex == numberOfEvents) ? null : document.getElementsByClassName('events-card')[eventIndex].classList.add('active');
        for (dot of document.getElementsByClassName('event-nav-dot')) {
            dot.classList.remove('active-dot');
        }
        document.querySelectorAll('.events-nav-dots > .event-nav-dot')[eventIndex - 1].classList.add('active-dot')
    } else {
        eventIndex = 0;
        changeEventSet();
    }
}

const navigateEvent = (dotIndex) => {
    if(dotIndex <= 0) {
        eventIndex = ((window.innerWidth > 600) ? (numberOfEvents - 3) : (numberOfEvents - 1));;
        changeEventSet();
        return;
    }
    if(dotIndex > ((window.innerWidth > 600) ? (numberOfEvents - 2) : numberOfEvents)) {
        eventIndex = 0;
        changeEventSet();
        return;
    }
    if (eventIndex != dotIndex) {
        (eventIndex == numberOfEvents) ? null : document.getElementsByClassName('events-card')[eventIndex].classList.remove('active');
        eventIndex = dotIndex - 1;
        changeEventSet();
    }
}


if (window.innerWidth < 500) {
    let initialXContact = null;
    let initialYContact = null;

    function startTouchContact(e) {
        initialXContact = e.touches[0].clientX;
        initialYContact = e.touches[0].clientY;
    };

    function moveTouchContact(e) {

        if (initialXContact === null) {
            return;
        }

        if (initialYContact === null) {
            return;
        }

        let currentX = e.touches[0].clientX;
        let currentY = e.touches[0].clientY;

        let diffX = initialXContact - currentX;
        let diffY = initialYContact - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped leftevent.events.splice(i, 1);
                navigateEvent(eventIndex + 1);
            } else {
                // swiped right
                navigateEvent(eventIndex - 1);
            }
        }
        initialXContact = null;
        initialYContact = null;

        e.preventDefault();

    };

    document.getElementsByClassName('events')[0].addEventListener("touchstart", startTouchContact, false);
    document.getElementsByClassName('events')[0].addEventListener("touchmove", moveTouchContact, false);
}


function openAllEvents(type) {
    document.getElementById('event-details').style.display = 'flex';
    document.getElementsByClassName('event-type')[0].innerHTML = type;
    document.getElementById("event-desc").innerHTML = eventDesc[type]
    setTimeout(() => {
        document.getElementById('event-details').style.opacity = 1;
    }, 10);

    document.getElementsByClassName('all-events')[0].innerHTML = '';

    const eventNames = [];
    
    ALL_EVENTS.map(event => {
        if (event.category_name == type) {
            event.events.map(eve => {
                eventNames.push(eve.name);
            });
        }
        if (type == 'Miscellaneous') {
            if (event.category_name == 'Entertainment') {
                event.events.map(eve => {
                    eventNames.push(eve.name);
                });
            }
            if (event.category_name == 'Writing') {
                event.events.map(eve => {
                    eventNames.push(eve.name);
                });
            }
        }
    });
    
    let expSet = false;
    let tripSet  = false;
    eventNames.map(eventName => {
        if (!eventName.includes('Exposure') && !eventName.includes('TRIPPED: A VR Gaming Event')) {
            const event = document.createElement('div');
            const eventText = document.createElement('span');
            eventText.innerHTML = eventName;
            event.className = 'event';
            event.appendChild(eventText);
            document.getElementsByClassName('all-events')[0].appendChild(event);
            eventText.addEventListener('click', () => viewEventDetails(eventName, type));
        } else {
            console.log(eventName, expSet)
            if (eventName.includes('Exposure')) {
                if (!expSet) {
                    expSet = true;
                    const event = document.createElement('div');
                    const eventText = document.createElement('span');
                    eventText.innerHTML = eventName;
                    event.className = 'event';
                    event.appendChild(eventText);
                    document.getElementsByClassName('all-events')[0].appendChild(event);
                    eventText.addEventListener('click', () => viewEventDetails(eventName, type));
                }
            }
            if (eventName.includes('TRIPPED: A VR Gaming Event')) {
                if (!tripSet) {
                    tripSet = true;
                    const event = document.createElement('div');
                    const eventText = document.createElement('span');
                    eventText.innerHTML = eventName;
                    event.className = 'event';
                    event.appendChild(eventText);
                    document.getElementsByClassName('all-events')[0].appendChild(event);
                    eventText.addEventListener('click', () => viewEventDetails(eventName, type));
                }
            }
        }
    });
}

function closeEventDetails() {
    document.getElementById('event-details').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('all-events-tab').style.opacity = 1;
        document.getElementById('event-details-tab').style.opacity = 0;
        document.getElementById('all-events-tab').style.display = 'flex';
        document.getElementById('event-details-tab').style.display = 'none';
        document.getElementById('event-details').style.display = 'none';
    }, 500);
}

function viewEventDetails(eventName, eventType) {
    document.getElementById('all-events-tab').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('all-events-tab').style.display = 'none';
        document.getElementById('event-details-tab').style.display = 'flex';

        document.getElementsByClassName('event-detail-name')[0].innerHTML = eventName;
        ALL_EVENTS.map(event => {
            if (event.category_name == eventType) {
                event.events.map(eve => {
                    if (eve.name == eventName) {
                        if (eventName.includes('Exposure') || eventName.includes('TRIPPED: A VR Gaming Event'))
                            changeEventData({ ...eve, date_time: '2019-10-19' })
                        else
                            changeEventData(eve);
                    }
                });
            }
            if (eventType == 'Miscellaneous') {
                if (event.category_name == 'Entertainment') {
                    event.events.map(eve => {
                        if (eve.name == eventName) {
                            changeEventData(eve);
                        }
                    });
                }
                if (event.category_name == 'Prereg') {
                    event.events.map(eve => {
                        if (eve.name == eventName) {
                            changeEventData(eve);
                        }
                    });
                }
                if (event.category_name == 'Writing') {
                    event.events.map(eve => {
                        if (eve.name == eventName) {
                            changeEventData(eve);
                        }
                    });
                }
            }
        });
        
        setTimeout(() => {
            document.getElementById('event-details-tab').style.opacity = 1;
        }, 10);
    }, 250);
}

function backEventDetails() {
    document.getElementById('event-details-tab').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('event-details-tab').style.display = 'none';
        document.getElementById('all-events-tab').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('all-events-tab').style.opacity = 1;
        }, 10);
    }, 250);
}

function changeEventData(event) {
    document.querySelector('.event-day > span').innerHTML = event.date_time.substr(0, 10);
    document.querySelector('.event-time > span').innerHTML = event.time;
    document.querySelector('.event-venue > span').innerHTML = event.venue;
    
    document.querySelectorAll('.event-description')[0].innerHTML = event.details;
    const descSpan = document.querySelectorAll('.event-description span');
    for(i = 0; i < descSpan.length; i++) {
        descSpan[i].style.backgroundColor = 'transparent';
        descSpan[i].style.color = '#ffffff';
        descSpan[i].style.fontWeight = 'initial';
    }
    const parent = document.querySelectorAll('.event-contact > div')[1];
    // parent.innerHTML = event.contact
    parent.innerHTML = (event.contact) ? event.contact : 'NA';
}


function showAllEvents() {
    document.getElementsByClassName('all-events-type')[0].style.display = 'inline-block	';
    setTimeout(() => {
        document.getElementsByClassName('all-events-type')[0].style.opacity = 1;
    }, 10)
}

function backAllEvents() {
    document.getElementsByClassName('all-events-type')[0].style.opacity = 0;
    setTimeout(() => {
        document.getElementsByClassName('all-events-type')[0].style.display = 'none';
    }, 500)
}