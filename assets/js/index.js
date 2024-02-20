const input_1 = document.getElementById('pregunta1')
const boton_1 = document.getElementById('boton-pregunta-1')
const mock1 = document.getElementById('mock1')
const show_r1 = document.getElementById('show-response-1')
const hidden_r1 = document.getElementById('hidden-response-1')
const activarFlex = document.getElementById('flexbox-activate')
const boxFlex = document.getElementById('box-flex')
const hiddenFlexbox = document.getElementById('hidden-flexbox-section')

//playground con cajas de imagenes

const justifyContent = document.querySelectorAll('input[type="radio"][name="justify-content"]');
const alignItems = document.querySelectorAll('input[type="radio"][name="align-items"]');
const flexDirection = document.querySelectorAll('input[type="radio"][name="flex-direction"]');
const playground = document.getElementById('playground-flexbox')

//playground con cajas de texto sin imagenes

const justifyContent2 = document.querySelectorAll('input[type="radio"][name="justify-content2"]');
const alignItems2 = document.querySelectorAll('input[type="radio"][name="align-items2"]');
const flexDirection2 = document.querySelectorAll('input[type="radio"][name="flex-direction2"]');
const playground2 = document.getElementById('playground-flexbox2')


boton_1.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input_1.value === 'container') {
        alert('buena!')
        mock1.classList.add('container')
    } else {
        alert('no no no, no era esa')
        mock1.classList.remove('container')
    }
})

show_r1.addEventListener('click', (e) => {
    if (hidden_r1.style.display === '' || hidden_r1.style.display === 'none') {
        hidden_r1.style.display = 'block'
    } else {
        hidden_r1.style.display = 'none'
    }

})

activarFlex.addEventListener('change', () => {
    if (activarFlex.checked) {
        boxFlex.style.display = 'flex'
        hiddenFlexbox.style.display = 'block'
    } else {
        boxFlex.style.display = 'block'
        hiddenFlexbox.style.display = 'none'
    }

})

justifyContent.forEach(function (input) {
    input.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        if (selectedValue === 'center') {
            playground.style.justifyContent = 'center'
        }
        else if (selectedValue === 'flex-start') {
            playground.style.justifyContent = 'flex-start'
        }
        else if (selectedValue === 'flex-end') {
            playground.style.justifyContent = 'flex-end'
        }
        else if (selectedValue === 'space-around') {
            playground.style.justifyContent = 'space-around'
        }
        else if (selectedValue === 'space-between') {
            playground.style.justifyContent = 'space-between'
        }
        else if (selectedValue === 'space-evenly') {
            playground.style.justifyContent = 'space-evenly'
        }

    });
});

alignItems.forEach(function (input) {
    input.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        if (selectedValue === 'center') {
            playground.style.alignItems = 'center'
        } else if (selectedValue === 'flex-start') {
            playground.style.alignItems = 'flex-start'
        } else if (selectedValue === 'flex-end') {
            playground.style.alignItems = 'flex-end'
        } else if (selectedValue === 'stretch') {
            playground.style.alignItems = 'stretch'
        } else if (selectedValue === 'baseline') {
            playground.style.alignItems = 'baseline'
        }

    });
});

flexDirection.forEach(function (input) {
    input.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        if (selectedValue === 'row') {
            playground.style.flexDirection = 'row'
        } else if (selectedValue === 'column') {
            playground.style.flexDirection = 'column'
        } else if (selectedValue === 'column-reverse') {
            playground.style.flexDirection = 'column-reverse'
        } else if (selectedValue === 'row-reverse') {
            playground.style.flexDirection = 'row-reverse'
        }

    });
});

justifyContent2.forEach(function (input) {
    input.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        if (selectedValue === 'center') {
            playground2.style.justifyContent = 'center'
        }
        else if (selectedValue === 'flex-start') {
            playground2.style.justifyContent = 'flex-start'
        }
        else if (selectedValue === 'flex-end') {
            playground2.style.justifyContent = 'flex-end'
        }
        else if (selectedValue === 'space-around') {
            playground2.style.justifyContent = 'space-around'
        }
        else if (selectedValue === 'space-between') {
            playground2.style.justifyContent = 'space-between'
        }
        else if (selectedValue === 'space-evenly') {
            playground2.style.justifyContent = 'space-evenly'
        }

    });
});

alignItems2.forEach(function (input) {
    input.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        if (selectedValue === 'center') {
            playground2.style.alignItems = 'center'
        } else if (selectedValue === 'flex-start') {
            playground2.style.alignItems = 'flex-start'
        } else if (selectedValue === 'flex-end') {
            playground2.style.alignItems = 'flex-end'
        } else if (selectedValue === 'stretch') {
            playground2.style.alignItems = 'stretch'
        } else if (selectedValue === 'baseline') {
            playground2.style.alignItems = 'baseline'
        }

    });
});

flexDirection2.forEach(function (input) {
    input.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        if (selectedValue === 'row') {
            playground2.style.flexDirection = 'row'
        } else if (selectedValue === 'column') {
            playground2.style.flexDirection = 'column'
        } else if (selectedValue === 'column-reverse') {
            playground2.style.flexDirection = 'column-reverse'
        } else if (selectedValue === 'row-reverse') {
            playground2.style.flexDirection = 'row-reverse'
        }

    });
});