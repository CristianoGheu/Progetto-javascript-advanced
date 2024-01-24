# Progetto-javascript-advanced

per questo progetto ho fatto un'applicazione che mi da le ultime 10 news grazie all'uso delle API di Hacker News e con un button mi carica altre 10 news.

Per questo progetto ho creato un file index.html e una cartella assets dove ho messo il file script.js e il file style.css

Ho creato un div con id news-list per poter con javascript fare un getElementById, ho fatto lo stesso per il button per caricare le altre 10 news.

Ho fatto un async function per il recupero delle ultime dieci news e per mostrarli in manieri dinamica con la costante newsItem che crea un div con le informazione(titolo, data, link) delle news recuperate. 
Con un appendChild la costante newsItem si inserisce alla costante newsList.

Con la funzione .get della libreria Lodash faccio un controllo dei dati che mi servono come il titol, la data e il link delle news che ricevo dalla API.

Per il button  ho fatto un addEventListener per caricare altre 10 news.

Per il css ho semplicemente sistemato i testi e il button per essere un pochino piu gradevoli da vedere.

link applicazione= https://progetto-javascript-adva-85b3d.web.app/
