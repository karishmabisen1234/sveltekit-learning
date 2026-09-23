<script>
  let price = "";
  let message = "";

  async function updateProduct() {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id: 1,
        price: price,
      }),
    });

    const data = await response.json();

    message = data.message;
  }
</script>

<h1>Products</h1>

<input bind:value={price} placeholder="Enter new price" />

<button onclick={updateProduct}> Update Product </button>

<p>{message}</p>
