setTimeout(function () {
    const feedID = document.getElementById('voyager-feed');
    const mainId = feedID.getElementsByClassName('core-rail')[0];
    const contentId = mainId.getElementsByClassName('ember-view')[1];
    mainId.style.display = 'none';
    contentId.style.display = 'none';
}, 1000);
