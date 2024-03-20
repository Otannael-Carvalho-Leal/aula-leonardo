const sumUtils = (function sumUtils() {
    let value = 0;
    function bombapet (pontos) {

    return value += pontos;

    }

    return {
        rasteira() {
            return bombapet(-1);

        },
        golaco() {
            return bombapet(1);
        },
        placar() {
            console.log(value);
        }
    }
})();

sumUtils.placar();

sumUtils.golaco();
sumUtils.golaco();
sumUtils.placar();



sumUtils.rasteira();
sumUtils.placar();