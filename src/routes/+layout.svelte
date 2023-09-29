<script>
  import "../app.css";
</script>

<main>
  <slot />
</main>

<style lang="postcss">
  main {
    @apply
      min-w-full
      w-full
      min-h-full
      h-full
      flex 
      flex-col 
      grow
      place-content-center
      ;
  }
</style>