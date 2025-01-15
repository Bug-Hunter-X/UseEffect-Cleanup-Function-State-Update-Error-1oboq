```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: Cleanup actions should not modify state
    let interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      // Avoid state updates here
    };
  }, []);

  return <div>Count: {count}</div>;
}
```