<script>
    let count = 0;

    function increase() {
        count++;
    }

    function decrease() {
        count--;
    }
</script>

<h1>{count}</h1>

<button onclick={increase}>
    Increase
</button>

<button onclick={decrease}>
    Decrease
</button>