/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name.charAt(0) === "J" || name.charAt(0) === "j" ) {
        speakGoodBye(name);
    } else {
        speakHello(name);
    }
}
