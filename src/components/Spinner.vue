<template>
  <div class="spinner"></div>
</template>

<script>
export default {}
</script>

<style scoped>
.spinner {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 2px transparent;
  border-top-color: red;
  animation: rotate 1s linear infinite;
}

.spinner::before {
  content: '';
  position: absolute;
  left: 4px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  border-radius: 50%;
  border: solid 2px transparent;
  border-top-color: blue;
  animation: rotate 1.5s linear infinite;
}

.spinner::after {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  top: 8px;
  bottom: 8px;
  border-radius: 50%;
  border: solid 2px transparent;
  border-top-color: green;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
