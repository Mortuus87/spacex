/**
 * This function clarifies some nested information in a missions.
 * 
 * @param {string} target HTMLElement id.
 * @param {Promise} obj Mission.
 */
async function printSingleLaunchAsHtml(target, obj) {
  const launchpad = getTopicId(topic.LAUNCHPADS, obj.launchpad);
  launchpad.then(r => {obj.launchpad = r}).catch(e => console.log('error', e));

  const rockets = getTopicId(topic.ROCKETS, obj.rocket);
  rockets.then(r => {obj.rocket = r}).catch(e => console.log('error', e));

  // Any further clarifications
  // Remember to add them to the Promise.all

  Promise.all([launchpad, rockets]).then(r => {
    console.log(obj);
    document.getElementById(target).innerHTML = getFeaturedCard(obj);
  })
}

/**
 * This function clarifies some nested information in an array of missions.
 * 
 * @param {string} target HTMLElement id.
 * @param {Promise[]} objArray Array of missions.
 */
async function printArrayAsHtml(target, objArray) {
  for (let i = 0; i < objArray.length; i++) {
    const obj = objArray[i];

    const launchpad = getTopicId(topic.LAUNCHPADS, obj.launchpad);
    launchpad.then(r => {obj.launchpad = r}).catch(e => console.log('error', e));

    const rockets = getTopicId(topic.ROCKETS, obj.rocket);
    rockets.then(r => {obj.rocket = r}).catch(e => console.log('error', e));

    Promise.all([launchpad, rockets])  
  };

  objArray.sort(function(a, b) {
    return b.date_unix - a.date_unix;
  });
  console.log(objArray);
  
  document.getElementById(target).innerHTML = '';
  for (let i = 0; i < objArray.length; i++) {
    const obj = objArray[i];
    const element = document.createElement('div');

    element.innerHTML = getListCard(obj);
    document.getElementById(target).appendChild(element);
  }
}

/**
 * Construct the HTML for the featured upcoming launch.
 * 
 * @param {Promise} obj Mission
 */
function getFeaturedCard(obj) {
  let html = `
    <div class="card">
      <div class="row">  
        <div class="col">  
          ${getImage(obj)}
        </div>
        <div class="col">
          <h2>${obj.name}</h2>
          <p>SpaceX flight nr. ${obj.flight_number}</p>
          ${getLaunchDate(obj)}
          ${getLaunchpad(obj)}
          ${getDetails(obj)}
          <h3>About the rocket</h3>
          <p>${obj.rocket.description}</p>
          ${getRocketWikiLink(obj)}
          ${getArticleLink(obj)}
        </div>
      </div>
    </div>
  `;
  return html;
}

/**
 * Construct the HTML for a single launch.
 * 
 * @param {Promise} obj Mission.
 */
function getListCard(obj) {
  let html = `
    <div class="card">
      <div class="row">  
        <div class="col">  
          ${getImage(obj)}
        </div>
        <div class="col">
          <h2>${obj.name}</h2>
          ${getLaunchDate(obj)}
          ${getDetails(obj)}
          ${getArticleLink(obj)}
        </div>
      </div>
    </div>
  `;
  return html;
}

function getImage(obj) {
  if (obj.links.patch.small != null) {
    return `<img src="${obj.links.patch.small}" alt="mission patch">`;
  } else if (obj.links.flickr.original !== null) {
    return `<img src="${obj.links.flickr.original[0]}" alt="rocket">`;
  }
}

function getHeader(obj) {
  return obj.name != null ? `<p>${obj.name}</p>` : '<p>Unspecified name</p>';
}

function getLaunchDate(obj) {
  if (obj.tbd === true) {
    return `<p>To be determined</p>`
  }else if (obj.net === true) {
    return `<p>No earlier than</p>`
  } else if (obj.date_unix) {
    return `<p>Launch time: ${convertTime(obj.date_unix, obj.date_precision)}</p>`
  }
}

function getLaunchpad(obj) {
  return `<p>${obj.launchpad.locality}, ${obj.launchpad.region}</p>`
}

function getDetails(obj) {
  return obj.details !== null ? `<p>${obj.details}</p>` : '';
}

function getArticleLink(obj) {
  if (obj.links.article) {
    return `<p><a href="${obj.links.article}" target="_blank">Read more</a></p>`;
  }
  return '';
}

function getRocketWikiLink(obj) {
  if (obj.rocket.wikipedia) {
    return `<p><a href="${obj.rocket.wikipedia}">About the rocket</a></p>`;
  }
  return '';
}

