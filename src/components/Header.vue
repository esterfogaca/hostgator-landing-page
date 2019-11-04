<template>
    <header>
        <h2>Hospedagem de Sites</h2>
        <h3>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h3>
        <ul>
            <li>99,9% de disponibilidade: seu site sempre no ar</li>
            <li>Suporte 24h, todos os dias</li>
            <li>Painel de Controle cPanel</li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
    header {
        position: relative;
        height: 21.125rem;
        background-image: linear-gradient(#1D5297, #1D5297);
        color: #ffffff;
        text-align: center;

        h2 {
            margin: 0;
        }

        @media screen and (min-width: 1200px) {
            -webkit-clip-path: ellipse(84% 87% at 50% 10%);
            clip-path: ellipse(84% 87% at 50% 10%);
        }
    }
</style>