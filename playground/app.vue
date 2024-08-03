<template>
  <div>
    <button @click="testToastify">Click me</button>
  </div>
</template>

<script setup>
function testToastify() {
  useToastify("Wow so easy !", {
    autoClose: 1000,
    position: ToastifyOption.POSITION.BOTTOM_LEFT,
  });
}
</script>
