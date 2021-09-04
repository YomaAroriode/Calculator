let output = document.querySelector("input");

function display(num) {
    output.value += num;
}


function Clear() {
    output.value = "";
}

function squareRoot() {
    output.value = Math.sqrt(output.value);
}

function Delete() {
    output.value = output.value.slice(0, -1);
}


function calculate() {
    try {
        output.value = eval(output.value);
    }

    catch (error) {
        output.value = "invalid";
    }
}


