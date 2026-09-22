<script>
  import Navbar from "$lib/component/Navbar.svelte";

  let name = "Karishma";
</script>

<Navbar />

<div>
  <h1>Welcome, {name}!</h1>

  <p>Welcome to my SvelteKit Home Page</p>

  <button>Get Started</button>
</div>
