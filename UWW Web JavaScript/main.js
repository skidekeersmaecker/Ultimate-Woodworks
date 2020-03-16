// test update price on checkbox values
var total = 0;

var cb1 = document.getElementById("cb1");
var cb2 = document.getElementById("cb2");
var cb3 = document.getElementById("cb3");

function clickCB(add, cb) {
    console.log("CB CLick: " + add + " CB: " + cb)

    if (cb.checked)
        total += add;
    else
        total -= add;

    document.getElementById("total").innerHTML = total;
}
