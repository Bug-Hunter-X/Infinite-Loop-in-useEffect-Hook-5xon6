# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook: an infinite loop caused by incorrectly using the state variable within the effect's callback function.

## Bug Description

The `bug.js` file contains a component that uses `useEffect` to increment a state variable (`count`) on every render.  Because the callback function directly modifies the state variable it depends on (`count`), this causes the effect to run continuously, resulting in an infinite loop and potentially crashing the browser.

## Solution

The `bugSolution.js` file shows the corrected code. The solution addresses the issue by providing an empty dependency array `[]` to the `useEffect` hook. This means the effect will only run once after the initial render.  Alternatively, you might add `count` to the dependency array. However, in this case, an empty dependency array is the correct approach because there is no external dependency for this use-case.