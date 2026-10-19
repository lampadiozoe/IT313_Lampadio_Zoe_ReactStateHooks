# IT313 – Lab Timer & Practice Tracker

## Problem
A small Expo (React Native) screen that helps students during laboratory sessions
track how many practice problems they solved and how long they have been working.
It includes a "Solved" counter (Solve +1 / Reset) and a stopwatch (Start / Stop).
"Great job!" appears once the solved count reaches 5.

## Approach
- **`LabScreen`** owns the state (`solved`, `isRunning`) using `useState` and
  passes data and handlers down as props (lifting state up). Solve +1 uses the
  functional update form `setSolved(s => s + 1)`.
- **`useStopwatch(isRunning)`** is a custom hook. It keeps `seconds` in state and
  uses `useEffect` with `setInterval` while `isRunning` is true. The cleanup
  function calls `clearInterval` when `isRunning` becomes false or the component
  unmounts.
- **`PracticeTracker`** shows the counter, the Solve +1 and Reset buttons, and
  conditionally renders "Great job!" when `solved >= 5`.
- **`Stopwatch`** shows the time as `mm:ss` and conditionally renders
  "Running…" or "Paused".
- All `onPress` handlers are passed as function references, never called in JSX.

## Cleanup Experiment
Removing `clearInterval` from the cleanup caused the timer to keep running after
pressing Stop, and to speed up after repeated Start/Stop presses because multiple
intervals were running at once. The cleanup was restored afterwards.

## Project Structure
- `App.js` – app entry
- `components/LabScreen.js`
- `components/PracticeTracker.js`
- `components/Stopwatch.js`
- `hooks/useStopwatch.js`

## How to Run in Expo Go
1. `npm install`
2. `npx expo start`
3. Scan the QR code with Expo Go on your phone (same Wi-Fi), or press `a` to open
   in an Android emulator.

## Author
Zoe H. Lampadio 
BSIT - IT3R2