<script setup lang="ts">
  const values = ref<multiSelectLabel[]>([
    { value: 0, label: "Agriculture" },
    { value: 1, label: "Natural sciences" },
    { value: 2, label: "Engineering" },
    { value: 3, label: "Health" },
    { value: 4, label: "Economics" },
    { value: 5, label: "Law" },
    { value: 6, label: "Behaviour and society" },
    { value: 7, label: "Language and culture" },
    { value: 8, label: "Food" }
  ])
</script>

<template>
  <div class="p-8">
    <ProfileSelect :values="values" />
  </div>
</template>
