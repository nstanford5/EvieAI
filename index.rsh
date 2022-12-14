'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Admin', {
    num: UInt,
    showNum: Fun([UInt], Null),
  });
  init();
  A.only(() => {
    const num = declassify(interact.num);
  });
  A.publish(num);
  const newNum = num + 1;
  A.interact.showNum(newNum);
  commit();
  exit();
})