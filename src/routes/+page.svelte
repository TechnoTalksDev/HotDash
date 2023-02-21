<script>
import { onMount } from "svelte";

let cpu
let mem
onMount(async () => {
    async function fetch_data() {
        const response = await fetch("/api/cpu");
        cpu = await response.json();
        const response2 = await fetch("/api/mem");
        mem = await response2.json();
    }

    const interval = setInterval(fetch_data, 3000);

    return () => clearInterval(interval);
});
</script>
  
  <main>
    <div>
        <img src="/fire.webp" class="logo" alt="Fire emoji" />
    </div>
    <h1>HotDash</h1>
  

    {#if cpu === undefined}
        <h2>Loading cpu...</h2>
    {:else}
        {#each cpu as c (c.id)}
            <h2>{c.id}: {c.data}</h2>
        {/each}
    {/if}
    {#if mem === undefined}
        <h2>Loading mem...</h2>
    {:else}
        {#each mem as m (m.id)}
            <h2>{m.id}: {m.data}</h2>
        {/each}
    {/if}
  
    <p>
      Check out the <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">github</a>
    </p>
  </main>
  
  <style>
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
      filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #ff3e00aa);
    }
  </style>
  


<!--

-->

