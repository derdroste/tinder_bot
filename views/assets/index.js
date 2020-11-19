document.addEventListener('DOMContentLoaded', () => {
    const tinderLike = document.querySelector('#tinderlike');
    let valueTinderLike = true;
    const tinderMessage = document.querySelector('#tindermessage');
    let valueTinderMessage = true;

    tinderLike.addEventListener('click', () => {
        sendRequest('http://www.localhost:3000/api/tinder/like',valueTinderLike);
        if (valueTinderLike === true) {
            tinderLike.classList.add('stop');
            tinderLike.innerHTML = 'Stop';
            valueTinderLike = false;
        } else {
            tinderLike.classList.remove('stop');
            tinderLike.innerHTML = 'Like';
            valueTinderLike = true;
        }
    });
    tinderMessage.addEventListener('click', () => {
        sendRequest('http://www.localhost:3000/api/tinder/like',valueTinderMessage);
        if (valueTinderMessage === true) {
            tinderMessage.classList.add('stop');
            tinderMessage.innerHTML = 'Stop';
            valueTinderMessage = false;
        } else {
            tinderMessage.classList.remove('stop');
            tinderMessage.innerHTML = 'Like';
            valueTinderMessage = true;
        }
    });
});

function sendRequest(url, val) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        value: val
    }));
}