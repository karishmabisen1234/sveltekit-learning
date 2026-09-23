<script>
  import Navbar from "$lib/component/Navbar.svelte";
  import { goto } from "$app/navigation";

  let name = "Karishma";

  function goToStudent() {
    goto("/student");
  }
</script>

<Navbar />

<div>
  <h1>Welcome, {name}!</h1>

  <p>Welcome to my SvelteKit Home Page</p>

  <button onclick={goToStudent}>Get Started</button>
</div>
