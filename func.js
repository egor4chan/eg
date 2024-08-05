function buy_ferm() {
    var farm = window.localStorage.getItem('farm');
    if (farm == null) {
        window.localStorage.setItem('farm', 1)
    }
    else {
        window.localStorage.setItem('farm', 1 + farm)
    }
}