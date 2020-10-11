const baseUrl = 'https://api.spacexdata.com/v4';
const topic = {
  CAPSULES: 'capsules',
  COMPANY: 'company',
  CORES: 'cores',
  CREW: 'crew',
  DRAGONS: 'dragons',
  LANDPADS: 'landpads',
  LAUNCHES: 'launches',
  LAUNCHPADS: 'launchpads',
  PAYLOADS: 'payloads',
  ROCKETS: 'rockets',
  SHIPS: 'ships',
  STARLINK: 'starling'
}
const launchTime = {
  PAST: 'past',
  UPCOMING: 'upcoming',
  LATEST: 'latest',
  NEXT: 'next'
}
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

/**
 * Initializes the "next launch" page related scripts.
 * 
 * @param {string} target 
 */
function nextInit(target = 'output') {
  // console.log('on the "index" page');
  const obj = getNextLaunch();
  obj.then(
    r => printSingleLaunchAsHtml(target, r),
    e => console.log('error', e)
  )
}

/**
 * Initializes the "past launches" page related scripts.
 * 
 * @param {string} target Where to print the mission list.
 */
function pastInit(target = 'output') {
  // console.log('on the "past" page');
  const obj = getPastLaunch();
  obj.then(
    r => {
      printArrayAsHtml(target, r);
    },
    e => console.log('error', e)
  )
}

/**
 * Initializes the "contact" page related scripts.
 */
function contactInit() {
  element = document.querySelector("#email");
  element.addEventListener('change', (e) => {
    e.preventDefault;
    validateEmail(element);
  })
}

/*
=====================
Async fetch functions
=====================
*/

async function getNextLaunch() {
  return getSpaceXApiResponse(topic.LAUNCHES+'/'+launchTime.NEXT);
}
async function getPastLaunch() {
  return getSpaceXApiResponse(topic.LAUNCHES+'/'+launchTime.PAST);
}

/**
 * Takes a topic and an id, and returns an object.
 * 
 * @param {topic} topic 
 * @param {string} id
 * @return {Promise}
 */
async function getTopicById(topic, id) {
  return getSpaceXApiResponse(topic + '/' + id);
}

async function getSpaceXApiResponse(topic) {
  return fetch(baseUrl + '/' + topic, requestOptions)
    .then(r => r.json())
    .catch(e => console.log('error', e))
}

// postTopicQuery(topic, query)

if (document.getElementById('next')) {
  nextInit();  
}

if (document.getElementById('past')) {
  pastInit();  
}

if (document.getElementById('contact')) {
  contactInit();  
}