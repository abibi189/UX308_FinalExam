import {fahrenheitToCelsius, hello, colour_mix, largest_product, day_of_the_week, pay_raise, is_leap } from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius.        
<h2>results</h2>
<p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
<p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>
<p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>
    </section>
}

function Question3(){
    return <section>
3. Colour Mix
  <h2>results</h2>
  <p>colour_mix("green", "red") == "{colour_mix("green", "red")}"</p>
  <p>colour_mix("blue", "green") == "{colour_mix("blue", "green")}"</p>
  <p>colour_mix("red", "red") == "{colour_mix("red", "red")}"</p>
  </section>
}
function Question4(){
    return <section>
4. Largest Product
          <h2>results</h2>
<p>largest_product(-8, 12, 20) == "{largest_product(-8, 12, 20)}"</p>
<p>largest_product(5, 7, 3) == "{largest_product(5, 7, 3)}"</p>
<p>largest_product(0, -2, -10) == "{largest_product(0, -2, -10)}"</p>
</section>
}
function Question5(){
    return <section>
5. Day of the week
<h2>results</h2>
<p>day_of_the_week(1) == "{day_of_the_week(1)}"</p>
<p>day_of_the_week(5) == "{day_of_the_week(5)}"</p>
<p>day_of_the_week(8) == "{day_of_the_week(8)}"</p>
</section>
}

function Question6(){
    return <section>
6. Pay a raise
<h2>results</h2>
  <p>pay_raise('F', 2, 25000) == "{pay_raise('F', 2, 25000).toFixed(2)}"</p>
  <p>pay_raise('P', 10, 28000) == "{pay_raise('P', 10, 28000).toFixed(2)}"</p>
  <p>pay_raise('F', 6, 30000) == "{pay_raise('F', 6, 30000).toFixed(2)}"</p>
</section>
}

function Question7(){
    return<section>
7. Leap Year
<h2>results</h2>
<p>is_leap(1999) == "{is_leap(1999).toString()}"</p>
<p>is_leap(2000) == "{is_leap(2000).toString()}"</p>
<p>is_leap(2002) == "{is_leap(2002).toString()}"</p>
    </section>
}

export {Question1, Question2, Question3, Question4, Question5, Question6, Question7}