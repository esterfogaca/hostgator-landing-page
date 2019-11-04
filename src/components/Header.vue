<template>
    <header>
        <h2>Hospedagem de Sites</h2>
        <h3>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h3>
        <ul>
            <li>99,9% de disponibilidade: seu site sempre no ar</li>
            <li>Suporte 24h, todos os dias</li>
            <li>Painel de Controle cPanel</li>
        </ul>
        <img src="../assets/btn-down.svg" alt="">
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
        height: 21rem;
        background-image: linear-gradient(#1D5297, #1D5297);
        color: #ffffff;
        text-align: center;
        padding: 2rem 0.9375rem;
        

        h2, li {
            font-size: 1rem;
            color: #B9D0EF;
        }

        h2 {
            margin: 0;
            font-weight: 600;
        }

        h3 {
            margin-top: 0.75rem;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 2ch;
        }

        ul {
            width: 73%;
            margin: 2rem auto;
            padding: 0;
            padding-left: 1.25rem;
        }

        li {
            list-style-image: url(../assets/icon-check.svg);
            margin-bottom: 1.5ch;
        }

        @media screen and (min-width: 1200px) {
            -webkit-clip-path: ellipse(84% 87% at 50% 10%);
            clip-path: ellipse(84% 87% at 50% 10%);
        }

        img {
            position: relative;
            top: .8rem;
        }
    }
</style>