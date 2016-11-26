for (var i = 1; i <= 7; i++) {
    var n = 1;
    var buffer = '';
    while (n <= i) {
        buffer = buffer + '#';
        n++
    }
    console.log(buffer);
}
for (var vertN = 1; vertN <= 8; vertN++) {
    var horN = 1;
    var bufferDesk = '|';
    var bufferLine = '';
    while (horN <= 8) {
        if (vertN % 2 == 0) {
            simbolDesk = (horN % 2 == 0) ? "#" : " ";
        }
        else {
            simbolDesk = (horN % 2 == 0) ? " " : "#";
        }
        bufferLine = bufferLine + " _"
        bufferDesk = bufferDesk + simbolDesk + "|";
        horN++
    }
    //console.log(bufferLine); 
    console.log(bufferDesk);
}