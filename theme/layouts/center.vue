<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  headerClass: {
    type: String,
  },
  footerClass: {
    type: String,
  },
});
</script>

<template>
  <div class="slidev-layout center h-full grid place-content-center">
    <header :class="props.headerClass">
      <slot name="header" />
    </header>
    <footer :class="props.footerClass">
      <slot name="footer" />
    </footer>

    <div class="my-auto">
      <slot :class="props.class" />
    </div>
  </div>
</template>
