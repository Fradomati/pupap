# Poopapp

## _The app for your moment of day_

### Introduction

A final project of Ironhack Web Development.
It's developed in React Js to Front (Client) and Node Js to Back (Server).

This app skeeks to be a tools when you are in the bathroom. In it you can find:

### Login and Signup

![Login](/z_img_readme/Login.png)
![Signup](/z_img_readme/Signup.png)

There are Authentication with passport and hashing password.

### Statistics

![Kpis](/z_img_readme/kpis.png)

You can see your "numbers". 

This app store your times, in seconds. when I need show you your statistics I work the seconds and pass every to the formats that i need.

`// Fn -> Pass to Seconds
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
};`

### Geolocation

![Position](/z_img_readme/Position.png)

You could see the people connected, in this moment.

I work with the Google Maps Api and a npm package: "@react-google-maps/api"

If there are a lot users in the same place, there are a clusterer that group in the same circle.

### Content

![Content](/z_img_readme/Content.png)

Finally, you can found a part of content recommended. This part uses a Reddit Api; I decided use it because I wanted a platform with actully content, and funny. Reddit its perfect, there are a lot, a lot, subreddit and topics.

I used a npm package amazing to connect with Reddit, I recommended it: "snoowrap"

## _CONCLUSION_

I have learning a lot with this project, i have the intention to continue with your develop. I have errors in the base but now i know how to fix it (perfect to the phase 2 ;)). React its amazing, when you undertand it. 

In the Phase 2 I want add a "share content" and "favorite content" and Phase 3, a Chat.

# License

Please refered to `LICENSE.md`

# Contributing

If you want to contributed to this projects, please. Are yourself to `CONTRIBUTING.md`
