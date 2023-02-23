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
  
    <div class="container">
      {#if cpu === undefined}
          <h2>Loading cpu...</h2>
      {:else}
          {#each cpu as c (c.id)}
            <div class="card">
              <h2>{c.data}</h2>
              <h3>{c.id}</h3>
            </div>
          {/each}
      {/if}
      {#if mem === undefined}
          <h2>Loading mem...</h2>
      {:else}
          {#each mem as m (m.id)}
            <div class="card">
              <h2>{m.data}</h2>
              <h3>{m.id}</h3>
            </div>       
          {/each}
      {/if}
    </div>
  
    <p>
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
  


<!--

-->

