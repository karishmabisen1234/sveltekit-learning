<script>
  import { goto } from "$app/navigation";

  function gologin() {
    goto("/login");
  }

  function goAbout() {
    goto("/about");
  }

  function gosingleton() {
    goto("/singleton");
  }

  function goHydration() {
    goto("/Hydration");
  }
</script>

<nav class="flex gap-4 p-4 bg-purple-700">
  <button onclick={gologin} class="text-white">login</button>
  <button onclick={goAbout} class="text-white">About</button>
  <button onclick={gosingleton} class="text-white">singleton</button>
  <button onclick={goHydration} class="text-white">Hydration</button>
</nav>
