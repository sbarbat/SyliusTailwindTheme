<template>
    <div>
        <transition name="slide">
        <div v-if="opened" class="w-64 max-w-4xl min-h-screen fixed top-0 right-0 p-4 bg-gray-300 text-gray-800">
            <div @click="opened = !opened" class="text-right p-4 cursor-pointer font-thin text-2xl">x</div>
            
            This is the widget
        </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        opened: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>