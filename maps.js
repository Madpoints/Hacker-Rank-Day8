function processData(input) {
    //Input into an array
    var entries = input.split('\n');
    //# of entries
    var numEntries = entries[0];
    
    entries.shift();
    
    var phoneBook = new Map();
    
    for(var i = 0; i < entries.length; i ++) {
        if (i < numEntries) {
            var entry = entries[i].split(' ');
            phoneBook.set(entry[0], entry[1]);
        } else {
            var query = entries[i];
            var number = phoneBook.get(query);
            var response = query + '=' + number;
            
            if (number === undefined) {
                console.log('Not found');
            } else {
                console.log(response);     
            }
        }   
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
