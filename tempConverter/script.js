const cels = document.getElementById("celsiusInput");
const fahr = document.getElementById("fahrenheitInput");

cels.addEventListener("input", function(){
    fahr.value = cels.value * 9 / 5 + 32;
});
fahr.addEventListener("input", function(){
    cels.value = ((fahr.value - 32) / 9 * 5).toFixed(3);
});
