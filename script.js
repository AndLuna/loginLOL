
const inputs = document.querySelectorAll('.input'); //fazendo isso ja tenho um array com os 2 inputs

const handleFocus = ({target})=>{
    const span = target.previousElementSibling
    span.classList.add('span-active');
}

const handleFocusOut= ({ target })=>{
// caso o valor do target seja vazio o focusOut vai funcionar
  if (target.value === ''){
  const span = target.previousElementSibling
  span.classList.remove('span-active');
}

}

inputs.forEach((input)=>{ input.addEventListener('focus', handleFocus)}); //evento de foco no input
inputs.forEach((input)=>{ input.addEventListener('focusout', handleFocusOut)}); // evento de desfoco no input

