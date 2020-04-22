import { addTimer } from "../src/connects/dataConnect";

export const fnGetDay = () => {
  const day = new Date().getUTCDay();
  return day;
};

export const fnGetTime = () => {
  const t = new Date();
  const h = t.getHours();
  const m = t.getMinutes();
  const s = t.getSeconds();
  const tc = { hour: h, min: m, sec: s };
  return tc;
};

// Fn -> Pass to Seconds
export const fnGetSecs = (t) => {
  const secs = t.hour * 3600 + t.min * 60 + t.sec;
  return secs;
};

// Fn -> Create Object {hour, mint, sec}
export const fnMountTime = (secs) => {
  let h = Math.floor(secs / 60 / 60);
  let m = Math.floor(secs / 60) - h * 60;
  let s = Math.floor(secs % 60);
  const userTime = { hour: h, min: m, sec: s };
  return userTime;
};

export const fnCalTime = (time) => {
  const id = time.id; // Id User
  let start = time.start; // Tiempo Inicio
  let end = time.end; // Tiempo End
  let hour = time.hour; // Hora

  const segStart = fnGetSecs(start);
  const segEnd = fnGetSecs(end);

  const totalSec = segEnd - segStart; // Total de seconds
  const day = fnGetDay(); // Día de hoy

  addTimer({ id: id, secs: totalSec, day: day, hour: hour }); // Envío los datos al back

  const mount = fnMountTime(totalSec);

  return totalSec;
};

// Media Tiempo

const fnSum = (time) => {
  return time.reduce((a, b) => a + b, 0);
};

export const fnSumTime = (time) => {
  let sum = fnSum(time);
  return fnMountTime(sum);
};

export const fnHalfTime = (time) => {
  let count = time.length;
  let sum = fnSum(time);
  let half = sum / count;

  let hTime = fnMountTime(half);
  return hTime;
};
