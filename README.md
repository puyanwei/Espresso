# Espresso

This is a custom testing framework built with javascript.

![screen shot 2017-12-19 at 15 56 43](https://user-images.githubusercontent.com/14803518/34166622-45f1f262-e4d7-11e7-973c-12702a5c46e4.png)

This was the first section of a [project](https://github.com/puyanwei/Notes-App-SPA) in building a single page app in vanilla javascript with no external frameworks or libraries.

## Installation

Clone this repository by typing in `git clone git@github.com:puyanwei/espresso.git`.

Go to the project folder and copy your source files in the `lib` folder, and your test files in the `tests` folder.

Open `SpecRunner.html` in your text editor and require the source and test files in the location suggested.

Open `SpecRunner.html` in the browser to see your tests.

## Testing Syntax

Use `Describe` to put a description of the tests. It is recommended to have multiple levels of describe for the constructor, and methods to help with the location of your tests.

```
describe("Espresso", () => {
  describe("#taste", () => {

  });
});
```

Expect compares the second parameter to the third. The first parameter is a detailed description of that is tested.

```
describe("Espresso", () => {
  describe("#taste", () => {
    expect.isEqual("coffee tastes good", espresso.taste, "Mmmm");
  });
});
```

isNull will test if it is null. The first parameter is a description and the second is what you test to check if it is null.

```
describe("Espresso", () => {
  describe("#exists", () => {
    expect.isNull("is there coffee in my cup?", exists());
  });
});
```

isTrue tests if the argument is true. The first parameter is a description and the second is what you test to see if it is true.

```
describe("Espresso", () => {
  describe("#name", () => {
expect.isTrue("this coffee is spelt covfefe", espresso.name() == "covfefe");  
  });
});
```

Those tests would be testing the following code;

```
function Espresso() {}

Espresso.prototype.taste = function() {
  return "Mmmm";
};

Espresso.prototype.exists = function() {
  return null;
};

Espresso.prototype.name = function() {
  return "covfefe";
};
```

## Testing Espresso

The Espresso methods have tests within the espresso folder.

To see them require the source file from ```espresso/lib/espresso.js``` and the test file from ```espresso/tests/espresso-test.js``` to ```SpecRunner.html```.
