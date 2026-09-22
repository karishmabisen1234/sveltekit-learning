<script>
  let age = 21;
</script>

<a href="/">go to Home</a>
<h1>My Age: {age}</h1>

{#if age <= 18}
  <p>You are an Adult.</p>
{/if}
