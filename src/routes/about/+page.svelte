<script>
  import { goto } from "$app/navigation";

  function goHome() {
    goto("/");
  }
</script>

<div
  class="min-h-screen bg-purple-100 flex flex-col items-center justify-center"
>
  <h1 class="text-4xl font-bold text-purple-700">About Page</h1>

  <p class="text-gray-600 mt-4">This is my About page.</p>

  <button
    onclick={goHome}
    class="mt-6 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
  >
    Go to Home
  </button>
</div>
