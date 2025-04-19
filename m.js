console.log(    '%cm',    `      font-family: Verdana, sans-serif;      font-size: 36px;      font-weight: bold;      background: linear-gradient(to bottom, #00000000 0px, #ffffff08);      color: white;      text-shadow: 0 0 10px rgba(127, 127, 127, .25);      padding: 20px 30px;      display: inline-block;    `  );

(function transformUserInfo() {
    const userInfo = document.getElementById('userinfo');
    if (!userInfo) {

        return;
    }

    const usernameContainer = document.getElementById('username-container');
    if (!usernameContainer) {
        return;
    }

    while (usernameContainer.firstChild) {
        userInfo.appendChild(usernameContainer.firstChild);
    }

    usernameContainer.remove();

})();
const replaceLogo = () => {
    const removeElementWithRetry = (selector, timeout) => {
        const start = Date.now();
        const attempt = () => {
            const el = document.querySelector(selector);
            if (el) el.remove();
            else if (Date.now() - start < timeout) setTimeout(attempt, 100);
        };
        attempt();
    };

    setTimeout(() => removeElementWithRetry('.main-top', 2000), 390);
    setTimeout(() => removeElementWithRetry('.main-rb-title', 2000), 390);
    setTimeout(() => removeElementWithRetry('.main-bottom-links', 2000), 390);
};

replaceLogo();
const removePolicyLinks = () => {
    const removeNestedElement = (parentSelector, childSelector, timeout) => {
        const start = Date.now();
        const attempt = () => {
            const parent = document.querySelector(parentSelector);
            if (parent) {
                const child = parent.querySelector(childSelector);
                if (child) child.remove();
                else if (Date.now() - start < timeout) setTimeout(attempt, 100);
            } else if (Date.now() - start < timeout) setTimeout(attempt, 100);
        };
        attempt();
    };
    setTimeout(() => removeNestedElement('.main-content.main-divider.main-panel', '.policyLinks.interface-color', 2000), 390);
};
removePolicyLinks();

const parentElement = document.getElementById('main-rb');

const newHTML = `
    <div class="skin-panel">
        <div class="xwrapper x1">
            <div class="wrapper1">Skin list</div>
        </div>
        <div class="xwrapper x2">
            <div class="wrapper2">Custom skin</div>
        </div>
    </div>
    <div class="slist dn">
        <div class="cs50">input</div>
    </div>
    <div class="slist2 db">
        <div class="listitem">0</div>
        <div class="listitem">skin</div>
        <div class="listitem">skin</div>
        <div class="listitem">skin</div>
    </div>
</div>
`;

parentElement.innerHTML = newHTML;
function setupPageSwitcher() {
    const wrapper1 = document.querySelector('.wrapper1');
    const wrapper2 = document.querySelector('.wrapper2');
    const slist = document.querySelector('.slist');
    const slist2 = document.querySelector('.slist2');

    if (!wrapper1 || !wrapper2 || !slist || !slist2) {
        console.error('Элемент-ы не найден-ы');
        return;
    }

    function toggleVisibility(showElement, hideElement) {
        showElement.classList.add('db');
        showElement.classList.remove('dn');
        hideElement.classList.add('dn');
        hideElement.classList.remove('db');
    }

    function saveState() {
        const state = {
            slist: {
                hasDb: slist.classList.contains('db'),
                hasDn: slist.classList.contains('dn'),
            },
            slist2: {
                hasDb: slist2.classList.contains('db'),
                hasDn: slist2.classList.contains('dn'),
            },
        };
        localStorage.setItem('pageSwitcherState', JSON.stringify(state));
    }
    function loadState() {
        const savedState = localStorage.getItem('pageSwitcherState');
        if (savedState) {
            const state = JSON.parse(savedState);

            if (state.slist.hasDb) slist.classList.add('db');
            else slist.classList.remove('db');
            if (state.slist.hasDn) slist.classList.add('dn');
            else slist.classList.remove('dn');

            if (state.slist2.hasDb) slist2.classList.add('db');
            else slist2.classList.remove('db');
            if (state.slist2.hasDn) slist2.classList.add('dn');
            else slist2.classList.remove('dn');
        } else {
            toggleVisibility(slist, slist2);
        }
    }

    wrapper1.addEventListener('click', () => {
        toggleVisibility(slist2, slist);
        saveState();
    });

    wrapper2.addEventListener('click', () => {
        toggleVisibility(slist, slist2);
        saveState();
    });

    window.addEventListener('DOMContentLoaded', loadState);
}

const firstChild = document.querySelector('#servers-body-eu > *:first-child');
if (firstChild) {
  firstChild.classList.add('zxcb');
}

setupPageSwitcher();

const button = document.querySelector('.gota-btn.bottom-btn.donut-features-btn');

if (button) {
    button.removeAttribute('style');
    console.log('Атрибут style удален.');
} else {
    console.log('Элемент не найден.');
}
/*
const removePolicyLinks = () => {
    const removeElementWithRetry = (parentSelector, targetSelector, retryDelay) => {
        const attempt = () => {
            const parent = document.querySelector(parentSelector);
            if (parent) {
                const target = parent.querySelector(targetSelector);
                if (target) target.remove();
                else setTimeout(attempt, retryDelay);
            }
        };
        attempt();
    };
    removeElementWithRetry('.main-content.main-divider.main-panel', '.policyLinks.interface-color', 3000);
};
removePolicyLinks();
*/

const serverTabs = document.querySelectorAll('.server-tab');

serverTabs.forEach(tab => {
  const span = tab.querySelector('span');

  if (span) {
    const region = tab.getAttribute('region');
    let newText = '';
    let regionClass = '';

    switch(region) {
      case 'eu':
        newText = 'EU';
        regionClass = 'eu';
        break;
      case 'na':
        newText = 'NA';
        regionClass = 'na';
        break;
      case 'ap':
        newText = 'AS';
        regionClass = 'as';
        break;
    }

    span.textContent = newText;

    span.className = 'fghzxc';
    span.classList.add(regionClass);

    tab.setAttribute('title', newText);
  }
});

if (!document.querySelector('link[href*="font-awesome"]')) {
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(faLink);
}

const spectateButton = document.getElementById('btn-spec');
if (spectateButton) {

    spectateButton.innerHTML = '<i class="fa-solid fa-eye"></i>';

spectateButton.style.fontSize = '22px';
    spectateButton.style.display = 'flex';
    spectateButton.style.alignItems = 'center';
    spectateButton.style.justifyContent = 'center';


}
const donutButton = document.querySelector('.gota-btn.bottom-btn.donut-features-btn');

if (donutButton) {
    donutButton.textContent = 'Donut';
}


const mainPanel = document.querySelector('.main-content.main-divider.main-panel');

if (mainPanel) {
    const customOptions = document.createElement('div');
    customOptions.className = 'custom-options';
    customOptions.textContent = 'Это новый элемент с классом custom-options';
    mainPanel.appendChild(customOptions);
}


function removeAttributesAfterDelay() {
    setTimeout(function() {
        var bqpn = document.getElementById('account-shop');

        if (bqpn) {
            bqpn.removeAttribute('data-balloon');
            bqpn.removeAttribute('style');
            bqpn.removeAttribute('id');
            bqpn.removeAttribute('data-balloon-length');
        }
    }, 2000);
}

removeAttributesAfterDelay();

function removeTheads() {
  const serverContent = document.getElementById('server-content');
  if (!serverContent) return;

  const theads = serverContent.querySelectorAll('thead');
  theads.forEach(thead => thead.remove());
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      removeTheads();
    }
  });
});

const serverContent = document.getElementById('server-content');
if (serverContent) {
  removeTheads();

  observer.observe(serverContent, {
    childList: true,
    subtree: true
  });
}

var zxc = document.createElement("style");
zxc.appendChild(document.createTextNode
(`

#account-actions .gota-btn {
    height: 40px;
    font-size: 15px;
    border-radius: 0px;
    background: transparent !important;
font-family: Montserrat;
}
#authed {
    display: flex
;
    flex-direction: column;
    align-self: center;
    width: 100% !important;
}
.main-panel {
    border-radius: 0px;
}


.gota-btn {
    background-color: #ffffff00 !important;
    border-width: 0px;
    margin-bottom: 0px;
    border-radius: 0px !important;
    height: 40px;
min-width: 60px;
    color: white;
    font-family: "Montserrat";
font-size: 15px;
    cursor: pointer;
    position: relative;
    overflow: hidden; /* Скрываем всё, что выходит за пределы кнопки */
    transition: color 0.2s cubic-bezier(0.4, 0, 1, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
    animation: .4s ease-in-out;
}

.gota-btn:hover {
    color: #ffffffc4;
    text-shadow: 0 0 4px #ffffff;
    box-shadow: inset 0 0 0 0em rgb(255 255 255 / 0%);

    transition: all .5s ease;
}
.gota-btn:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #ffffff00 !important;
    background: repeating-linear-gradient(-30deg, #ffffff10, #ffffff10 50%, #ffffff10 100%);
    animation: slide-left .4s cubic-bezier(1, 0.26, 0.5, 1);
    transform: skewX(-30deg); /* Наклоняем псевдоэлемент на 30 градусов влево */
    transform-origin: top left; /* Устанавливаем точку трансформации в верхний левый угол */
}
#account-actions .gota-btn {
    padding: 0px !important;
}
@keyframes slide-left {
    from {
        left: -100%;
    }
    to {
        left: 100%;
    }
}

.gota-btn:hover span {
    display: inline-block;
    animation: scaleText 0.4s ease-in-out forwards;
}

.gota-btn:focus {
    outline: none;
}

@keyframes slide-left {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

@keyframes scaleText {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.96);
    }
    100% {
        transform: scale(1);
    }
}

.donut-features-btn {
    background-color: #ffffff00 !important;
    overflow: hidden !important;
    margin: 0px 0px !important;
border-radius: 0px 0px 0px 0px !important;
    margin-left: 10px !important;
}

.main-bottom {
    height: auto;

}

.main-bottom-left {
    width: 50%;
    height: auto;
    display: flex;
    margin-right: 0px;
    flex-direction: column;
align-items: flex-end;
}
.main-bottom-right {
    width: 50%;
    height: 100%;
    display: flex;
    align-self: flex-end;
    text-align: center;
    flex-direction: column;
}
.main-bottom-stats {
    margin-left: 10px !important;
    border-radius: 0px;
    font-weight: 300;
    align-self: center;
    margin-right: 10px !important;
    font-family: "Montserrat";
    background: #ffffff00 !important;
}


.gota-menu-btn {
    width: 50%;
    height: 40px;
    outline: none;
    border-width: 0px;
    border-radius: 0px;
    color: white;
    font-size: 22px;
    cursor: pointer;
    text-shadow: 0px 0px 3px #000000;
    font-family: Montserrat;
    box-shadow: 0 0 0px 0px rgb(255 255 255 / 0%);
    transition: all 0.5s;
}
#btn-play {
    background-color: #ffba2b;
    margin-left: 10px;
    width: 80%;
    margin-right: 5px;
}
.gota-menu-btn:hover {
    box-shadow: inset 0 0 0 0em rgba(255, 255, 255, 0.2);
}
#btn-play:hover {
    box-shadow: inset 0 0 0 0em rgba(255, 255, 255, 0.2);
    background-color: hwb(40 17% 25% / 1) !important;
}


#btn-spec {
    background-color: #d670c5;
    margin-right: 10px;
    width: 40px;
    margin-left: 5px;
}
#btn-spec:hover{
    background-color: hwb(310deg 33.83% 32.92%) !important;

}
.bottom-btn {
    margin-right: 10px !important;
    margin-left: 10px !important;
    width: 88%;
}
#name-box {
    display: block;
    height: 38px;
    width: -webkit-fill-available;
    font-size: 20px;
    margin: 0px 10px;
    background: #00000040;
    color: #ffffff;
    border-width: 0px;
    border-radius: 0px;
    text-indent: 5px;
    font-family: Montserrat;
    text-align: justify;
    cursor: pointer;
}
.menu-sub-bg {
    padding-top: 10px !important;
}




.custom-options{
background: cyan;
}


#account-logout{
color: #b6172b !important;
    cursor: pointer;
    position: relative;
    overflow: hidden; /* Скрываем всё, что выходит за пределы кнопки */
    transition: color 0.2s cubic-bezier(0.4, 0, 1, 1), text-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
    animation: .4s ease-in-out;
}
#account-logout:hover {
    color: ##b6172bc4;
    text-shadow: 0 0 4px #b6172b;
    box-shadow: inset 0 0 0 0em rgb(255 255 255 / 0%);

    transition: all .5s ease;
}
#account-logout:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #ffffff00 !important;
    background: repeating-linear-gradient(-30deg, #db124110, #db124110 50%, #db124110 100%);
    animation: slide-left .4s cubic-bezier(1, 0.26, 0.5, 1);
    transform: skewX(-30deg); /* Наклоняем псевдоэлемент на 30 градусов влево */
    transform-origin: top left; /* Устанавливаем точку трансформации в верхний левый угол */
}

#account-logout:hover span {
    display: inline-block;
    animation: scaleText 0.4s ease-in-out forwards;
}






/* чекбоксикиёё♥ */
input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #80808080;
    border-radius: 100px;
    border-style: none;
    flex-shrink: 0;
    height: 20px;
    margin: 0;
    position: relative;
    width: 40px;
    cursor: pointer;
    transition: all .25s ease-in-out;
}

input[type="checkbox"]::before {
    bottom: -6px;
    content: "";
    left: -6px;
    position: absolute;
    right: -6px;
    top: -6px;
}

input[type="checkbox"]::after {
    background-color: #ffffff;
    border-radius: 50%;
    content: "";
    height: 14px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 14px;
    transition: all .25s ease-in-out;
}

input[type="checkbox"]:hover {
    background-color: #66666666;
    transition-duration: 0s;
    transition: all .25s ease-out;

}

input[type="checkbox"]:checked {
    background-color: #ffffff80;
    transition: all .25s ease-out;

}

input[type="checkbox"]:checked::after {
    background-color: #fff;
    box-shadow: 0 0 10px #00000080;
    left: 23px;
    transition: all .25s ease-out;

}

input[type="checkbox"]:focus:not(.focus-visible) {
    outline: 0;
    transition: all .25s ease-out;

}

input[type="checkbox"]:checked:hover {
    background-color: #ffffff99;
    box-shadow: 0 0 10px #9b9b9b30;
    transition: all .25s ease-out;
}


input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #80808080;
    outline: none;
    cursor: pointer;
    transition: all .25s ease-in-out;
}

input[type="range"]:hover {
    background: #66666666;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    transition: all .25s ease-in-out;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    transition: all .25s ease-in-out;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border: none;
}

input[type="range"]::-moz-range-track {
    background: #80808080;
    border-radius: 3px;
    height: 6px;
}

input[type="range"]:active::-webkit-slider-thumb {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

input[type="range"]:active::-moz-range-thumb {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

input[type="range"]:focus {
    outline: none;
}

input[type="range"]:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px rgb(255 255 255 / 0%);
}

























.input-option {
    border: none;
    border-radius: 4px;
    padding: 3px 3px 3px 5px;
    background: #ffffff20;
    color: #dadada;
    margin: 1px auto;
}













#account-username {
font-size: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    grid-column: 2 / 3;
    margin-left: 10px;

    grid-row: 1 / 2;
    display: flex;
    white-space: nowrap;
    justify-content: flex-start;
}
#userinfo {
    display: grid;
    padding: 10px 0;
    width: 100%;
    grid-template-columns: 86px 210px;
    grid-template-rows: 30px 26px 30px;
    text-align: center;
    padding-left: 10px;
}

#account-level {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex
;
    margin-left: 10px;
    font-size: 13px;
    align-items: center;
}

.avatar {
    display: flex;
    align-self: center;
    border-radius: 50%;
    width: 86px !important;
    height: 86px !important;
    grid-column: 1 / 2;
    grid-row: 1 / 4;

}
#authed{
    display: flex;
    flex-direction: column;
}
#account-actions {
    padding: 0px 10px !important;
    display: flex;
    width: 95% !important;
    flex-direction: row;
    margin-top: 15px;
    height: auto !important;
}

.cs50{
    background: red;
    font-size: 100px;
    margin-top: 30px;
}

.dn{
display: none !important;
}

.db{
display: block !important;
}
.slist{
    display: grid;
}

.listitem{
    background: radial-gradient(#000000, #00000000);
}



.error-banner {
    padding: 0px;
    z-index: 99999;
    position: absolute;
    width: 0%;
    font-size: 0px;
}
.main-top {
    opacity: 0%;
}

.main-panel-wrapper {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 320px 350px 320px;
    grid-template-rows: 380px 180px;
    position: relative;
    top: 25%;
}
#main-right {
    width: auto;
    height: auto;
}
#main-right {
    width: auto;
    height: auto;
    box-shadow: 0px 0 4px 1px #000000;
    grid-column: 3 / 4;
    grid-row: 1 / 3;
}

.main-divider {
    margin-right: 0px;
}
#main-rb {
    width: auto !important;
    height: auto !important;
    box-shadow: 0px 0 4px 1px #000000;
    margin-bottom: 0px;
    grid-row: 1 / 2;
    text-align: center;
}
.main-left {
    width: auto !important;
    height: auto !important;
    grid-column: 1 / 2;
    display: contents;
}
#main-account {
    width: auto !important;
    height: auto !important;
    box-shadow: 0px 0 4px 1px #000000;
    font-family: "Nunito";
    grid-row: 2 / 3;
}
#account-actions .gota-btn {
    padding: 10px !important;
    margin-left: 5px;
    margin-right: 5px;
}

.main-input-btns {
    width: 100%;
    margin: 0px 0px 0px 0px;
    display: flex
;
    margin-top: 10px;
    justify-content: center;
}














.xp-meter {
    height: 14px;
    width: 200px;
    border: solid #080808 2px;
    margin: 5px;
    margin-left: 10px;
    align-self: center;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    position: relative;
    background: #080808;
}

.xp-meter > span {
    display: block;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: repeating-linear-gradient(
        -45deg,
        #dadada,
        #dadada 25px,
        #ffffff00 0,
        #ffffff00 50px
    );
    background-size: 70.71px 70.71px;
    animation: moveStripes 2s linear infinite;
}

@keyframes moveStripes {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 70.71px 70.71px;
    }
}
#server-content {
    height: 400px !important;
}
.main-bottom-links {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}
.main-panel-wrapper::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
background: radial-gradient(rgb(140 140 140 / 15%) 300px,rgb(0 0 0 / 42%));
    z-index: -1;
    pointer-events: none;
}
.options-input {
    width: 20%;
    text-align: center;
    border-radius: 13px;
    background: rgb(255 255 255 / 0%);
    border: none;
    outline: none;
    color: #dadada;
}

.main-mid {
    padding: 0px 0px 0px 0px;
}
.server-tab:first-child {
    border-top-left-radius: 0px;
}

.server-tab:last-child {
    border-top-right-radius: 0px;
}
.main-content {
    width: auto;
    height: auto !important;
    grid-column: 2 / 3;
    display: flex;
    box-shadow: 0px 0 4px 1px #000000;
    grid-row: 1 / 3;
    flex-direction: column;
    justify-content: center;
}
.menu-title {
    border-radius: 0px 0px 0 0;
    background: transparent !important;
}
.menu-title {
    font-size: 25px !important;
}
.menu-title {
    font-family: Montserrat;
    font-weight: 400;
}
.server-container {
    width: 100%;
    margin-top: 0px;
font-family: Montserrat;
    font-weight: 300;
}
.server-tab span {
    text-shadow: 0 0 6px #000000;
}
.fghzxc {
    font-size: 20px !important;
}

.server-active {
  position: relative;
  background: #ffffff00 !important;
  overflow: hidden; /* Скрываем всё, что выходит за границы */
}

.server-active::after {
  content: '';
  position: absolute;
  top: 30%; /* Расширяем за границы элемента, чтобы не было обрезки */
  left: 0px;
  right: 0;
  bottom: -50%; /* Расширяем за границы элемента */
  background: linear-gradient(
    to left,
    #84848400 0%,
    rgb(255 255 255) 50%,
    #9b9b9b00 100%
  );
  opacity: 0;
  animation: pulse-vertical 4s ease-in-out infinite;
  pointer-events: none;
  z-index: 0; /* Убедимся, что анимация под контентом */
}

@keyframes pulse-vertical {
  0% {
    transform: scaleY(0.1);
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    transform: scaleY(0.05);
    opacity: 0;
  }
}
.server-tab {
    width: 100% !important;
    text-align: center;
}
#server-content {
    height: auto;
    padding: 0px;
}
.server-table {
    table-layout: fixed;
    width: 100%;
    margin: 0;
}
.server-table tbody {
    width: 100%;
    height: auto;
    border-radius: 0px;
    border-collapse: collapse;
}
#server-content {
    height: auto !important;
}
#servers-eu{
    height: 0px !important;
}
#servers-na{
    height: 0px !important;
}
#servers-ap{
    height: 0px !important;
}
.server-selected {
    background-color: rgb(255 255 255 / 20%);
    animation: selectAnimation 0.4s ease-out forwards;
    transform-origin: center;
}

@keyframes selectAnimation {
    0% {
        background-color: rgb(255 255 255 / 0%);
        transform: scale(0.98); /* Почти 1, но чуть меньше */
    }
    100% {
        background-color: rgb(255 255 255 / 20%);
        transform: scale(1);
    }
}

/* Фикс для изоляции анимации */
.server-selected {
    position: relative;
    z-index: 1;
}
.server-table tbody {
    width: 100%;
    display: flex
;
    flex-direction: column;
}
.server-row {
    cursor: pointer;
    height: 31px;
    align-content: center;
    border-bottom: 2px solid #2f2f2fc4;
    padding: 0px 6px;
}
#s_Vendetta{
    border-top: 2px solid #2f2f2fc4;

}
.server-table-name {
    width: 105px;
    white-space: nowrap;
    text-align: left;
    font-weight: 400;
    grid-column: 1 / 2;
}
.server-row {
    display: grid
;
    grid-template-columns: 75px 78px 25px;
}
.server-table-players {
    width: 100px;
    white-space: nowrap;
    font-weight: 100;
    text-align: center;
    grid-column: 2 / 3;
}
.server-table-mode {
    width: 150px;
    white-space: nowrap;
    font-weight: 200;
    text-align: right;
    grid-column: 3 / 4;
}

.skin-panel {
    display: flex;
    flex-direction: row;
    background: #ffffff00;
    font-size: 19px;
    border-radius: 10px;
    justify-content: space-between;
    width: 100%;
}

.xwrapper {
    background: linear-gradient(#ffffff75, #ffffff75);
    cursor: pointer;
    border-radius: 0px;
    flex: 1;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper1, .wrapper2 {
    padding: 4px;
    cursor: pointer;

}

.options-table {
    width: 300px;
    table-layout: fixed;
    white-space: nowrap;
}
















/* ================= Spectrum Colorpicker Modernization ================= */
.sp-container {
    background-color: #0c0c0c80 !important;
    border: 1px solid #000000 !important;
    border-radius: 5px !important;
    box-shadow: 0 0 12px rgb(0 0 0 / 80%) !important;
    backdrop-filter: blur(2px);
    padding: 8px 8px 6px 8px !important;
    z-index: 999999 !important;
}

.sp-palette-container {
    border-right: 1px solid #444 !important;
    padding-right: 12px !important;
}

.sp-alpha-handle {
    position: absolute;
    top: -4px;
    bottom: -4px;
    width: 10px;
    height: 10px;
    left: 50%;
    cursor: pointer;
    border: 1px solid #00000000;
    box-shadow: 0 0 10px rgb(255 255 255 / 25%) !important;
    background: #ffffff;
    opacity: 1;
}

.sp-picker-container {
    padding-left: 5px !important;
    border-left: 0px solid #ffffff00 !important;
}

.sp-color, .sp-hue, .sp-clear {
    border: 1px solid #000000 !important;
    border-radius: 0px !important;
}

.sp-dragger {
    border: 2px solid #ffffff !important;
    background: #171717 !important;
    width: 10px !important;
    height: 10px !important;
    border-radius: 50% !important;
    box-shadow: 0 0 10px rgb(255 255 255 / 25%) !important;
}

.sp-slider {
    height: 6px !important;
    background: #ffffff !important;
    border: 1px solid #ffffff00 !important;
    border-radius: 3px !important;
    box-shadow: 0 0 10px rgb(255 255 255 / 25%) !important;
}

.sp-thumb-el {
    border: 2px solid transparent !important;
    transition: all 0.2s ease !important;
    border-radius: 4px !important;
}

.sp-thumb-el:hover, .sp-thumb-el.sp-thumb-active {
    border-color: #e08e13 !important;
    transform: scale(1.1) !important;
}

.sp-input {
    background: #0c0c0c80 !important;
    border: 1px solid #00000085 !important;
    color: #dadada !important;
    border-radius: 4px !important;
    padding: 6px !important;
    margin-bottom: 4px;
}

.sp-input:focus {
    border-color: #e08e13 !important;
    box-shadow: 0 0 5px rgba(224, 142, 19, 0.3) !important;
}

.sp-button .sp-choose{
    background: #3a3a3a !important;
    color: #ddd !important;
    border: 1px solid #555 !important;
    border-radius: 4px !important;
    padding: 6px 12px !important;
    text-shadow: none !important;
    transition: all 0.2s ease !important;
  font-weight: 500;
  line-height: 1.5;
}

.sp-choose:hover {
    background: #ffffff00 !important;
    border: 0px solid #555 !important;
    border-radius: 4px !important;
    color: #fff !important;
    border-color: #66666600 !important;
    font-weight: 100 !important;
}

#iMapBackground {
    text-align: center;
    padding: 3px 3px 3px 0px;
}

.sp-choose:active {
    background: #ffffff00 !important;
    border: 0px solid #555 !important;
    border-radius: 4px !important;
    color: #fff !important;
    border-color: #66666600 !important;
    box-shadow: 0 0 5px rgba(224, 142, 19, 0) !important;
    font-weight: 100 !important;
}

.sp-button:hover {
    background: #3a3a3a !important;
    border: 1px solid #555 !important;
    border-radius: 4px !important;
    color: #fff !important;
    border-color: #666 !important;
}

.sp-cancel {
    font-size: 14px;
    color: #a91d1d !important;
    margin: 0;
    padding: 2px;
    margin-right: 10px;
    vertical-align: middle;
    text-decoration: none;
}

.sp-cancel:hover {
    color: #f02c2c !important;
    text-decoration: none !important;
}

.sp-preview {
    border-radius: 4px !important;
    border: 1px solid #555 !important;
    overflow: hidden !important;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3) !important;
}

.sp-preview-inner {
    border-radius: 0px !important;
    height: 102%;
    width: 102%;
}

.sp-alpha-inner {
    border: solid 1px #000000;
    border-radius: 0px;
}

/* Mobile adaptation */
@media (max-width: 480px) {
    .sp-container {
        width: 95% !important;
        max-width: 300px !important;
    }

    .sp-palette-container {
        padding-right: 8px !important;
    }

    .sp-picker-container {
        padding-left: 8px !important;
    }
}

/* Dark checkerboard pattern */
.sp-preview, .sp-alpha, .sp-thumb-el {
    background-image:
        linear-gradient(45deg, #333 25%, transparent 25%),
        linear-gradient(-45deg, #333 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #333 75%),
        linear-gradient(-45deg, transparent 75%, #333 75%) !important;
    background-size: 8px 8px !important;
    background-position: 0 0, 0 4px, 4px -4px, -4px 0px !important;
}
.sp-dd {
    padding: 0px;
    height: 0px;
    line-height: 0px;
    float: left;
    font-size: 0px;
}
.sp-preview {
    border-radius: 4px !important;
    border: 1px solid #000000 !important;
    overflow: hidden !important;
    box-shadow: inset 0 0 3px rgb(255 0 0 / 0%) !important;
    width: 30px;
    height: 30px;
}
.sp-preview {
    margin-right: 0px;
}



.sp-container button {
  background: #0c0c0c00;
  color: #dadada;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
border: solid 0px #000;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgb(0 0 0 / 0%);
}

.sp-container button:hover {
  color: #ffffff;
  transform: translateY(0px);
}

.sp-container button:active {
  background-color: rgb(192 192 192 / 0%);
  transform: translateY(0);
}

.sp-container button:focus {
  outline: none;
}

.sp-replacer {
    margin: 0;
    overflow: hidden;
    cursor: pointer;
    padding: 0px;
    display: inline-block;
    border-radius: 4px;
    background: #eeeeee00 !important;
    color: #00000000;
    vertical-align: middle;
}

.options-table thead:not(:first-child) tr th {
    padding-top: 10px;
    padding-bottom: 10px;
}

.options-table thead:not(:first-child) tr th {
    padding-top: 10px;
    padding-bottom: 10px;
}

.options-table th {
    font-size: 16px;
    border: solid 1px #fff;
}

.options-table th {
    font-size: 16px;
    border: solid 1px #ffffff00;
    padding-bottom: 10px;
}
`));
document.head.appendChild(zxc);


(function() {
    'use strict';
    const overlay = document.createElement('div');
    overlay.classList.add('black-overlay');

    const style89 = document.createElement('style');
    style89.textContent = `
        .black-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 1);
            z-index: 9999;
            transition: opacity 1s ease-in;
        }
        .black-overlay.fade-out {
            opacity: 0;
        }
    `;
    document.head.appendChild(style89);

    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.classList.add('fade-out');
    }, 1000);

    setTimeout(() => {
        overlay.remove();
    }, 2000);
})();
