var describe = function(description, test) {
  document.getElementById("output").innerHTML +=
    "<br><b>" + description + "</b></br>";
  try {
    test();
  } catch (err) {
    document.getElementById("output").innerHTML +=
      "<br><font color='red'>error: " + err.message + "</br>";
    console.log(err);
  }
};
var expect = {
  isEqual: function(description, first, second) {
    if (first === second) {
      document.getElementById("output").innerHTML +=
        description +
        "<br><font color='green'><xmp>PASS: [" +
        first +
        "] is equal to [" +
        second +
        "]</xmp></br>";
    } else {
      document.getElementById("output").innerHTML +=
        description +
        "<br><font color='red'><xmp>FAIL: [" +
        first +
        "] is not equal to [" +
        second +
        "]</xmp></br>";
    }
  },

  isNull: function(description, element) {
    if (element === null) {
      document.getElementById("output").innerHTML +=
        description +
        "<br><font color='green'><xmp>PASS: [" +
        element +
        "] is null</xmp></br>";
    } else {
      document.getElementById("output").innerHTML +=
        description +
        "<br><font color='red'><xmp>FAIL: [" +
        element +
        "] is not null</xmp></br>";
    }
  },

  isTrue: function(description, test) {
    if (test) {
      document.getElementById("output").innerHTML +=
        description +
        "<br><font color='green'><xmp>PASS: [" +
        test +
        "] is true</xmp></br>";
    } else {
      document.getElementById("output").innerHTML +=
        description +
        "<br><font color='red'><xmp>FAIL: [" +
        test +
        "] is false</xmp></br>";
    }
  }
};
