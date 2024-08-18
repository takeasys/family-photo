const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

const images = arrayRange(1001, 1911, 1)
  .filter((n) => {
    return n > 0;
  })
  .map((n) => {
    return { src: `/images/IMG_${n}.jpg`, width: 1414, height: 2121 };
  });

export default images;
