describe("Espresso", () => {
  var espresso = new Espresso();

  describe("#taste", () => {
    expect.isEqual("coffee tastes good", espresso.taste(), "Mmmm");
  });

  expect.isNull("is there coffee in my cup?", espresso.exists());

  expect.isTrue("this coffee is spelt covfefe", espresso.name() == "covfefe");
});
