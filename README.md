Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) in console.log()
BONUS
1 - Mostrare il risultato a video in html;
2 - Stilizzare con i css la pagina


PROBLEMA
1 - chiedere distanza da percorrere in km
    1.1 - creare prompt dove chiediere i km da percorrere
    1.2 - assegnare il precedente valore a una variabile
    1.3 - moltiplicare il valore per la costante 'prezzo al km' (0.21) 
2 - chiedere età del passeggero
    2.1 - creare prompt dove chiediere l'età del passeggero
    2.2 - assegnare il precedente valore a una variabile
3 - calcolare il prezzo del biglietto moltiplicando le due variabili        ottenute prima e applicare lo sconto
    3.1 - creare variabile sconto
    3.2 - assegnare valore a variabile
4 - condizionare lo sconto applicato al prezzo del biglietto 
    4.1 - se l'età è inferiore a 18 applicare il 20%
    4.2 - se l'età è compresa tra 18 e 65 (escluso) non si applica sconto
    4.3 - se l'età è superiore a 65 (incluso) applicare il 40%
5 - mostrare prezzo finito
    5.1 - applicare 'to fixed method' al prezzo finito per mostrare solo due decimali
    5.2 stampare in console-log
BONUS
6 - mostrare in video tramite html
    6.1 - mandare in video tramite innerhtml
    6.2 - stilizzare in html e css