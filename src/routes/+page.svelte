<script>
import { onMount } from "svelte";

let cpu
let mem
let host
onMount(async () => {
    async function fetch_data() {
        const response = await fetch("/api/cpu");
        cpu = await response.json();
        const response2 = await fetch("/api/mem");
        mem = await response2.json();

    }

    const response3 = await fetch("/api/info");
    host = await response3.json();

    const interval = setInterval(fetch_data, 3000);

    return () => clearInterval(interval);
});
</script>
  
<main>
  <div>
      <img src="/fire.webp" class="logo" alt="Fire emoji" />
  </div>
  <h1>HotDash</h1>
  {#if host != undefined}
    <h3>Device name: {host[0].data}</h3>
  {/if}
  <div class="container">
    {#if cpu === undefined}
        <h2>Loading cpu...</h2>
    {:else}
        {#each cpu as c (c.id)}
          <div class="card">
            <span><h2>{c.data}</h2></span>
            <h3>{c.id}</h3>
          </div>
        {/each}
    {/if}
    {#if mem === undefined}
        <h2>Loading ram...</h2>
    {:else}
        {#each mem as m (m.id)}
          <div class="card">
            <span><h2>{m.data}</h2></span>
            <h3>{m.id}</h3>
          </div>       
        {/each}
    {/if}
  </div>
  <p class="footer">
    Check out the <a href="https://github.com/TechnoTalksDev/HotDash" target="_blank" rel="noreferrer">github</a>
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