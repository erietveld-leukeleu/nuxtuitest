<script setup lang="ts">

const props = defineProps<{
  values: multiSelectLabel[]
}>();

const values = ref<multiSelectLabel[]>(props.values);

const selection = ref<multiSelectLabel[]>([])

const removeItem = (index: number) => {
    selection.value.splice(index, 1);
    selection.value = [...selection.value]
}

const selectMenu = ref();

const closeSelectMenu = () => {
  nextTick(() => {
    if (selectMenu.value) {
      const button = selectMenu.value?.trigger.$el.querySelector('button')
      if(button) button.parentNode.dispatchEvent(new Event('click'))
    }
  });
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
    <USelectMenu @update:modelValue="closeSelectMenu" v-model="selection" :options="values" placeholder="Select academic field(s)" multiple searchable :ui="ui" :uiMenu="uiMenu" ref="selectMenu">
      <template #label>
        <span class="relative px-3 py-2 pr-6 text-xs bg-aqua-100 text-blue-900 flex items-center after:content-['✗'] after:pl-4 after:font-bold after:absolute after:text-xs after:right-2 cursor-pointer" v-for="(item, index) in selection" :key="item.value" @click.prevent="removeItem(index)">{{ item.label }}</span>
      </template>
    </USelectMenu>
</template>
