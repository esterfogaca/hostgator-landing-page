<template>
    <form action="">
        <fieldset>
            <label for="cicle">Quero pagar a cada:</label><br />
            <div>
                <input type="radio" name="cicle" id="threeYears" value="3 years" checked /> 3 anos
                <input type="radio" name="cicle" id="oneYear" value="1 year" /> 1 ano
                <input type="radio" name="cicle" id="oneMonth" value="1 Month" /> 1 mês
            </div>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'RadioBar',
}
</script>
    
<style lang="scss" scoped>
    form {
        margin-top: 2.75rem;
        text-align: center;
    }

    fieldset {
        border: none;
    }

    label {
        font-size:.875rem;
        color: #1D5297;
    }

    div {
        margin-top: 0.4556rem;
        display: inline-block;
        width: 18.125rem;
        padding: .6875rem;
        background: #FFFFFF;
        box-shadow: 0rem .125rem .25rem #4480C570;
        border: .0625rem solid #4480C5;
        border-radius: 1.3125rem;
    }

    input {
        position: relative;
        margin-left: 1rem;
        margin-right: 0.4rem;

        &:before,
        &:after {
            content: '';
            pointer-events: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            transition: all .3s ease;
        }

        &:before {
            width: 1.125rem;
            height: 1.125rem;
            background-color: #FFFFFF;
            border: 0.1rem solid #9EB8DC;
        }
        
    }

    input:first-of-type {
        margin-left: 0;
    }

    input:checked {

        &:before {
            width: 1.125rem;
            height: 1.125rem;
            background: #FFFFFF;
            border: #4480C5 solid 0.1rem;
        }

        &:after {
            width: .6rem;
            height: .6rem;
            background:#4480C5;
            border: #4480C5 solid 0.1rem;
        }
    }

</style>
    