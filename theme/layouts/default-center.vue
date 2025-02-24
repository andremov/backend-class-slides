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
  <div class="slidev-layout default flex flex-col">
    <header :class="props.headerClass">
      <slot name="header" />
    </header>
    <footer :class="props.footerClass">
      <slot name="footer" />
    </footer>

    <div class="top">
      <slot />
    </div>

    <div class="contents">
      <slot name="contents" />
    </div>
  </div>
</template>

<style scoped>
.contents {
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
