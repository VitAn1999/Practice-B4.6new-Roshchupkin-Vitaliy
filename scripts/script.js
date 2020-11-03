/*jshint esversion: 6 */
const btnNext = document.getElementById('btn-nxt');
const btnBack = document.getElementById('btn-back'); 

let imgWeap = document.getElementById('img-weap');

const imgWeapList = ['asset/weapon № 0.jpg', 'asset/weapon № 1.jpg', 'asset/weapon № 2.jpg', 'asset/weapon № 3.jpg', 'asset/weapon № 4.jpg', 'asset/weapon № 5.jpg'];

btnNext.addEventListener('click', function(event) {
    for (let i = 0; i < imgWeapList.length; i++) {
        if (imgWeap.getAttribute('src') == imgWeapList[i] && imgWeap.getAttribute('src') != imgWeapList[imgWeapList.length - 1]) {
            imgWeap.setAttribute('src', imgWeapList[i+1]);
            event.preventDefault();
            break;
        } else if (imgWeap.getAttribute('src') == imgWeapList[imgWeapList.length - 1]) {
            imgWeap.setAttribute('src', imgWeapList[0]);
            event.preventDefault();
            break;
        }
    }
});

btnBack.addEventListener('click', function(event) {
    for (let i = (imgWeapList.length - 1); i > -1; i--) {
        if (imgWeap.getAttribute('src') == imgWeapList[i] && imgWeap.getAttribute('src') != imgWeapList[0]) {
            imgWeap.setAttribute('src', imgWeapList[i-1]);
            event.preventDefault();
            break;
        } else if (imgWeap.getAttribute('src') == imgWeapList[0]) {
            imgWeap.setAttribute('src', imgWeapList[imgWeapList.length - 1]);
            event.preventDefault();
            break;
        }
    }
});

setInterval(function() {
    for (let i = 0; i < imgWeapList.length; i++) {
        if (imgWeap.getAttribute('src') == imgWeapList[i] && imgWeap.getAttribute('src') != imgWeapList[imgWeapList.length - 1]) {
            imgWeap.setAttribute('src', imgWeapList[i+1]);
            break;
        } else if (imgWeap.getAttribute('src') == imgWeapList[imgWeapList.length - 1]) {
            imgWeap.setAttribute('src', imgWeapList[0]);
            break;
        }
    }
}, 10000);