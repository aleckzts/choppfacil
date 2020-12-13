const calculatePosition = (
  removedIndex: number,
  addedIndex: number,
  array: any[],
): number => {
  let pos;
  if (addedIndex === array.length - 1) {
    pos = Date.now();
  } else if (addedIndex === 0) {
    // pos = array[0].position - array[0].position / 10; // 1/4 back
    pos = array[0].position - 2592000; // 1 month back
  } else if (addedIndex < removedIndex) {
    const beforePOS = array[addedIndex - 1].position;
    const afterPOS = array[addedIndex].position;
    pos = (beforePOS + afterPOS) / 2;
  } else if (addedIndex > removedIndex) {
    const beforePOS = array[addedIndex + 1].position;
    const afterPOS = array[addedIndex].position;
    pos = (beforePOS + afterPOS) / 2;
  }
  if (pos) {
    return Math.round(pos);
  }
  return 0;
};

export default calculatePosition;
