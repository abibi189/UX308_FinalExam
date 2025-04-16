function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}
function colour_mix(rgb_colour1, rgb_colour2) {
    const combo = [rgb_colour1, rgb_colour2].sort().join("+");

    if (combo === "blue+blue") return "blue";
    if (combo === "blue+green") return "aqua";
    if (combo === "blue+red") return "fuchsia";
    if (combo === "green+green") return "green";
    if (combo === "green+red") return "yellow";
    if (combo === "red+red") return "red";

    return "Error";
}
function largest_product(val1, val2, val3) {
    const values = [val1, val2, val3].sort((a, b) => b - a);
    return values[0] * values[1];
}
function day_of_the_week(day_num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (day_num >= 1 && day_num <= 7) {
        return days[day_num - 1];
    }
    
    return "Error";
}
function pay_raise(status, years, salary) {
    let raise = 0;

    if (status === 'F' && years >= 10) {
        raise = 0.05;
    } else if (status === 'F' && years < 4) {
        raise = 0.015;
    } else if (status === 'P' && years > 10) {
        raise = 0.03;
    } else if (status === 'P' && years < 4) {
        raise = 0.01;
    } else {
        raise = 0.02;
    }

    return salary + (salary * raise);
}
function is_leap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

export {hello, fahrenheitToCelsius, colour_mix, largest_product, day_of_the_week, pay_raise, is_leap }