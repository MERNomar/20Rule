const timeFormat = (element) => {
  let timeCount = 0;
  setInterval(() => {
    timeCount = timeCount + 1;
    console.log(timeCount);
  }, 1000);

  const seconds = (timeCount % 60).toString().padStart(1, "0");
  const minutes = (timeCount / 60).toFixed(0);
  const formattedString = `${minutes}:${seconds}`;
  return { minutes, seconds };
};
export default timeFormat;
