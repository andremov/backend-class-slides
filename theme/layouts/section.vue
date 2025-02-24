<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
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
  <div class="slidev-layout section" :class="props.layoutClass">
    <header :class="props.headerClass">
      <slot name="header" />
    </header>
    <footer :class="props.footerClass">
      <slot name="footer" />
    </footer>

    <slot :class="props.class" />
  </div>
</template>
