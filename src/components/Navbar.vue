<template>
    <nav>
        <img src="../assets/hostgator-logo.svg" alt="">
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style lang="scss" scoped>
    nav {
        padding: 0.5rem 0.9375rem;

        background-color: #ffffff;

        @media screen and (min-width: 1200px) {
            padding: 0.5rem 20vw;
        }
    }
</style>

