// script.js

let quantity = 1;

function increaseQuantity() {
    quantity += 1;
    document.getElementById('quantity').innerText = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity -= 1;
        document.getElementById('quantity').innerText = quantity;
    }
}

function personalizar() {
    const nome = prompt("Digite o nome para personalização (máximo 20 caracteres):");
    if (nome && nome.length <= 20) {
        alert(`Nome "${nome}" será gravado na garrafa.`);
        // Aqui você pode adicionar a lógica para atualizar a visualização da garrafa
    } else {
        alert("O nome deve ter no máximo 20 caracteres.");
    }
}

// Função para mudar a imagem da garrafa conforme a cor selecionada
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-image');
        document.getElementById('productImage').src = imageUrl;
    });
});

// Função para mudar o preço conforme o tamanho selecionado
document.querySelectorAll('.size-option').forEach(option => {
    option.addEventListener('click', function() {
        const size = this.getAttribute('data-size');
        let price = 270; // Preço base para 500ml
        switch (size) {
            case '350ml': price = 220; break;
            case '650ml': price = 320; break;
            case '950ml': price = 400; break;
            case '1200ml': price = 500; break;
        }
        document.querySelector('.price').innerText = `R$${price.toFixed(2)}`;
        document.querySelector('p:nth-child(4)').innerText = `ou em até 10x de R$${(price / 10).toFixed(2)}`;
    });
}); 

function updatePreview() {
    const canvas = document.getElementById('previewCanvas');
    const ctx = canvas.getContext('2d');
    const text = document.getElementById('customText').value;
    const orientation = document.getElementById('textOrientation').value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Simpliza Regular';
    ctx.fillStyle = 'black';

    if (orientation === 'horizontal') {
        ctx.fillText(text, 10, 50);
    } else {
        ctx.save();
        ctx.translate(30, 200);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(text, 0, 0);
        ctx.restore();
    }
}

document.getElementById('customText').addEventListener('input', updatePreview);
document.getElementById('textOrientation').addEventListener('change', updatePreview);  
document.getElementById('fontSelector').addEventListener('change', function() {
    updatePreview();
});

function updatePreview() {
    const canvas = document.getElementById('previewCanvas');
    const ctx = canvas.getContext('2d');
    const text = document.getElementById('customText').value;
    const orientation = document.getElementById('textOrientation').value;
    const font = document.getElementById('fontSelector').value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `20px ${font}`;
    ctx.fillStyle = 'black';

    if (orientation === 'horizontal') {
        ctx.fillText(text, 10, 50);
    } else {
        ctx.save();
        ctx.translate(30, 200);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(text, 0, 0);
        ctx.restore();
    }
} 

// script.js

function updatePreview() {
    const canvas = document.getElementById('previewCanvas');
    const ctx = canvas.getContext('2d');
    const text = document.getElementById('customText').value;
    const orientation = document.getElementById('textOrientation').value;
    const font = document.getElementById('fontSelector').value;

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Carrega a imagem da garrafa
    const img = new Image();
    img.src = document.getElementById('productImage').src;
    img.onload = function() {
        // Desenha a imagem da garrafa no canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Configura a fonte e a cor do texto
        ctx.font = `20px ${font}`;
        ctx.fillStyle = 'black';

        // Desenha o texto na orientação selecionada
        if (orientation === 'horizontal') {
            ctx.fillText(text, 10, 50);
        } else {
            ctx.save();
            ctx.translate(30, 200);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText(text, 0, 0);
            ctx.restore();
        }
    };
}

// Atualiza a visualização quando o texto ou a orientação mudam
document.getElementById('customText').addEventListener('input', updatePreview);
document.getElementById('textOrientation').addEventListener('change', updatePreview);
document.getElementById('fontSelector').addEventListener('change', updatePreview);

// Função para mudar a imagem da garrafa conforme a cor selecionada
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-image');
        document.getElementById('productImage').src = imageUrl;
        updatePreview();
    });
}); 
// script.js

function updatePreview() {
    const canvas = document.getElementById('previewCanvas');
    const ctx = canvas.getContext('2d');
    const text = document.getElementById('customText').value;
    const orientation = document.getElementById('textOrientation').value;
    const font = document.getElementById('fontSelector').value;

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Carrega a imagem da garrafa
    const img = new Image();
    img.src = document.getElementById('productImage').src;
    img.onload = function() {
        // Desenha a imagem da garrafa no canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Configura a fonte e a cor do texto
        ctx.font = `30px ${font}`; // Tamanho da fonte
        ctx.fillStyle = 'gray'; // Cor do texto (cinza)

        // Desenha o texto na orientação selecionada
        if (orientation === 'horizontal') {
            // Centraliza o texto horizontalmente
            const textWidth = ctx.measureText(text).width;
            const x = (canvas.width - textWidth) / 2; // Centraliza no eixo X
            const y = 100; // Posição Y ajustável
            ctx.fillText(text, x, y);
        } else {
            // Centraliza o texto verticalmente
            ctx.save();
            ctx.translate(60, canvas.height / 2); // Ajuste da posição
            ctx.rotate(-Math.PI / 2); // Rotaciona o texto
            ctx.fillText(text, 0, 0);
            ctx.restore();
        }
    };
}

// Atualiza a visualização quando o texto ou a orientação mudam
document.getElementById('customText').addEventListener('input', updatePreview);
document.getElementById('textOrientation').addEventListener('change', updatePreview);
document.getElementById('fontSelector').addEventListener('change', updatePreview);

// Função para mudar a imagem da garrafa conforme a cor selecionada
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-image');
        document.getElementById('productImage').src = imageUrl;
        updatePreview();
    });
});
