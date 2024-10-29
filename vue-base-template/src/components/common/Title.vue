<template>
    <div class="flex-fill mb-4">
        <h2>{{ title }}</h2>
        <v-divider :thickness="2"></v-divider>
    </div>
</template>

<style lang="css"></style>

<script lang="ts">
export default {
    props: ['title']
}
</script>