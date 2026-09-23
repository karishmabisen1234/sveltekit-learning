<script>
    let { params } = $props();
</script>

<h1>Products</h1>

<p>Category: {params.category || "All Products"}</p>