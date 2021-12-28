
title = document.title

window.addEventListener('visibilitychange', () => document['hidden'] ? document.title = 'Draatech - See you later!': document.title = title)
