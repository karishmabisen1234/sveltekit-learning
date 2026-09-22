<script>
  let count = $state(0);
</script>

<a href="/">go to Home</a>
<h1>Hydration Example</h1>

<button onclick={() => count--}>-</button>

<p>Count: {count}</p>

<button onclick={() => count++}>+</button>
