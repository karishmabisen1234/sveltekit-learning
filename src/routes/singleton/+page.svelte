<script>
  import { getCounter } from "$lib/singleton/counter.js";

  const counter = getCounter();

  let count = $state(counter.getCount());

  function increase() {
    counter.increment();
    count = counter.getCount();
  }
</script>

<a href="/">go to Home</a>
<h1>Singleton Example</h1>

<p>Count: {count}</p>

<button onclick={increase}> Increase </button>
