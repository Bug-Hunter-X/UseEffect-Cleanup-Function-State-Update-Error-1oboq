# React useEffect Cleanup Function State Update Error

This example demonstrates a common error in React's `useEffect` hook where the cleanup function attempts to update state. This often leads to warnings or errors because state updates within the cleanup function can cause unexpected behavior.  The solution shows how to properly handle cleanup actions without modifying state.