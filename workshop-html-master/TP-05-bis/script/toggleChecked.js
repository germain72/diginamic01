var findIndexBorder = function (middle) {
  var start, end;
  if (middle >= 0 && middle < 5) {
    // 1er ligne
    start = 0;
    end = 5;
  } else if (middle >= 5 && middle < 10) {
    // 2e ligne
    start = 5;
    end = 10;
  }
  if (middle >= 10 && middle < 15) {
    // 3e ligne
    start = 10;
    end = 15;
  } else if (middle >= 15 && middle < 20) {
    // 4e ligne
    start = 15;
    end = 20;
  }
  return { start, middle, end };
};
