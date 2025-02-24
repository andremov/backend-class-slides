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
    class="slidev-layout two-columns w-full h-full grid grid-cols-2"
    :class="props.layoutClass"
  >
    <header :class="props.headerClass">
      <slot name="header" />
    </header>
    <footer :class="props.footerClass">
      <slot name="footer" />
    </footer>

    <div class="col-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>
