function insert(num) {
    var myString = document.form.textview.value;
    var lastChar = myString[myString.length - 1];
    if (myString.length < 30) {
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
            // Append the number to the string
            document.form.textview.value = myString + num;
        } else if (num != lastChar) {
            // Replace the last character with null to remove it
            document.form.textview.value = myString.replace(lastChar, '');
        }
    }
}

function equal() {
    var input = document.form.textview.value;
    if (input) {
        try {
            var result = eval(input);
            if (isNaN(result)) {
                // Display "Error" if the result is NaN
                document.form.textview.value = 'Error';
            } else {
                // Display the result
                document.form.textview.value = result;
            }
        } catch (error) {
            // Display "Error" if there is an exception during evaluation
            document.form.textview.value = 'Error';
        }
    }
}

function clear() {
    // Clear the textview
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value;
    // Remove the last character from the string
    document.form.textview.value = exp.substring(0, exp.length - 1);
}