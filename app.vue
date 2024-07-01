<script setup lang="ts">
interface multiSelectLabel {
  value: number,
  label: string
}

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

const academicFields = ref<multiSelectLabel[]>([])

const academicFieldsSummary = computed(() => {
  return academicFields.value.map(item => item.label).join(', ');
});

const removeItem = (index: number) => {
  academicFields.value.splice(index, 1);
  academicFields.value = [...academicFields.value]
};

const resetInput = () => {
  academicFields.value = [];
}

const ui = {
  rounded: 'rounded-sm',
  base: 'min-h-12'
}

const uiMenu = {
  height: 'max-h-44',
  option: {
    rounded: 'rounded-sm',
    size: 'text-sm',
  },
  shadow: 'shadow-none',
  default: {
    clearSearchOnClose: true
  }
}
</script>

<template>
  <div class="p-8">
    <p class="mb-3"><a href="https://ui.nuxt.com/components/select-menu">Nuxt UI SelectMenu</a></p>
    <USelectMenu v-model="academicFields" :options="values" placeholder="Select academic field(s)" multiple searchable :ui="ui" :uiMenu="uiMenu">
      <template #option="{ option }">
        <span class="truncate">{{ option.label }}</span>
      </template>
      <template #label>
        <span v-if="academicFields.length" class="relative px-3 py-2 pr-6 text-xs bg-aqua-100 text-blue-900 flex items-center after:content-['✗'] after:pl-4 after:font-bold after:absolute after:text-xs after:right-2 cursor-pointer" v-for="(item, index) in academicFields" :key="item.value" @click.prevent="removeItem(index)">{{ item.label }}</span>
      </template>
    </USelectMenu>
  </div>
  <div class="p-8">
    <p class="mb-3">Alternative</p>
    <div class="relative">
      <div class="absolute z-10 right-10 top-1/2 -translate-y-1/2 cursor-pointer w-8 h-8 flex items-center justify-center" v-if="academicFields.length" title="Reset" @click.prevent="resetInput">✗</div>
      <USelectMenu v-model="academicFields" :options="values" option-attribute="value" placeholder="Select academic field(s)" multiple :ui="ui" :uiMenu="uiMenu">
        <template #option="{ option }">
          <span class="truncate">{{ option.label }}</span>
        </template>
        <template #label>
          <span v-if="academicFields.length" class="truncate">{{ academicFieldsSummary }}</span>
        </template>
      </USelectMenu>
    </div>
  </div>
  <div class="p-8 fixed bottom-8">
    {{ academicFields }}
  </div>
</template>
