```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly attempting to update count in the cleanup function
    return () => {
      setCount(count + 1); // This will cause a warning or error
    };
  }, []);

  return <div>Count: {count}</div>;
}
```