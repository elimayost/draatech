
title = document.title

window.addEventListener('visibilitychange', () => document['hidden'] ? document.title = 'See you later!': document.title = title)
