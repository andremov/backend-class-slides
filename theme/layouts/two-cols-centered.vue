<!--
  Usage:

```md
---
layout: two-cols
---

::left::
# Left
This shows on the left

::right::
# Right
This shows on the right
```

-->

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
  <div
    class="slidev-layout two-cols-header w-full h-full grid grid-cols-2 items-center justify-center"
    :class="props.layoutClass"
  >
    <header :class="props.headerClass">
      <slot name="header" />
    </header>
    <footer :class="props.footerClass">
      <slot name="footer" />
    </footer>

    <div class="col-top">
      <slot />
    </div>

    <div class="col-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.two-cols-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}
.col-top {
  grid-area: 1 / 1 / 2 / 3;
}
.col-left {
  grid-area: 2 / 1 / 3 / 2;
}
.col-right {
  grid-area: 2 / 2 / 3 / 3;
}
.col-bottom {
  align-self: end;
  grid-area: 3 / 1 / 3 / 3;
}
</style>
