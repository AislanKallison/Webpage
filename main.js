<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Garrafa Térmica Vyta</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Load Google Font "Great Vibes" as a stand-in for "Elegante" -->
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .product-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 20px;
        }
        .image-section {
            flex: 1;
            text-align: center;
        }
        .options-section {
            flex: 1;
            padding-left: 20px;
        }
        .options-section h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .options-section label {
            display: block;
            margin: 10px 0 5px;
            font-weight: bold;
        }
        .options-section select,
        .options-section input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
        .options-section .character-count {
            font-size: 12px;
            color: #666;
            text-align: right;
        }
        .options-section .add-to-cart {
            width: 100%;
            padding: 15px;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 20px;
        }
        .options-section .disclaimer {
            font-size: 10px;
            color: #666;
            margin-top: 10px;
        }
        .size-options, .color-options, .quantity-selector, .personalization-section, .text-orientation-section, .preview-section {
            margin: 20px 0;
        }
        .size-option, .color-option, .quantity-selector button {
            padding: 10px;
            margin: 5px;
            cursor: pointer;
        }
        .color-option img {
            width: 50px;
            height: 50px;
        }
        #previewCanvas {
            border: 1px solid #000;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="product-container">
        <!-- Image Section (Left) -->
        <div class="image-section">
            <!-- Preview Canvas -->
            <div class="preview-section">
                <canvas id="previewCanvas" width="500" height="500"></canvas>
            </div>
        </div>

        <!-- Options Section (Right) -->
        <div class="options-section">
            <h1>GARRAFA TÉRMICA VYTA 500ML - R$300,00</h1>
            
            <label>TIPO</label>
            <select id="typeSelector">
                <option value="texto">TEXTO</option>
                <!-- Add more options if needed -->
            </select>

            <label>ORIENTAÇÃO DO TEXTO</label>
            <select id="textOrientation">
                <option value="vertical">VERTICAL</option>
                <option value="horizontal">HORIZONTAL</option>
            </select>

            <label>PERSONALIZAÇÃO (20 CARACTERES)</label>
            <input type="text" id="customText" maxlength="20" placeholder="Digite seu nome">
            <div class="character-count">20 caracteres restantes</div>

            <label>ESCOLHA A FONTE</label>
            <select id="fontSelector">
                <option value="Simpliza Regular">SIMPLIZA REGULAR</option>
                <option value="Arial">ARIAL</option>
                <option value="Times New Roman">TIMES NEW ROMAN</option>
                <option value="Great Vibes">ELEGANTE</option>
            </select>

            <button class="add-to-cart" onclick="personalizar()">ADICIONAR AO CARRINHO</button>

            <div class="disclaimer">
                PRODUTOS PERSONALIZADOS NÃO PODERÃO SER ALTERADOS, DEVOLVIDOS, CANCELADOS OU TROCADOS. IMAGEM MERAMENTE ILUSTRATIVA | SAIBA MAIS
            </div>
        </div>
    </div>

    <script>
        let canvas = document.getElementById('previewCanvas');
        let ctx = canvas.getContext('2d');
        let isDragging = false;
        let offsetX, offsetY;
        let textX = 150, textY = 80; // Position matches the image: centered (textX = 150), just below the cap (textY = 80)
        let customText = ''; // Default text is empty
        let textOrientation = 'vertical'; // Default to vertical to match the image
        let selectedFont = 'Simpliza Regular';

        let productImage = new Image();
        productImage.src = '/img/garrafa-termica-preta.jpeg'; // Black bottle

        function drawCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(productImage, 0, 0, canvas.width, canvas.height);

            // Only draw text if customText is not empty
            if (customText) {
                ctx.font = `30px "${selectedFont}"`;
                ctx.fillStyle = 'gray'; // Text color matches the image
                ctx.textAlign = 'center';

                if (textOrientation === 'vertical') {
                    ctx.save();
                    ctx.translate(textX, textY);
                    ctx.rotate(-Math.PI / 2);
                    ctx.fillText(customText, 0, 0);
                    ctx.restore();
                } else {
                    ctx.fillText(customText, textX, textY);
                }
            }
        }

        function updateText() {
            customText = document.getElementById('customText').value;
            let remainingChars = 20 - customText.length;
            document.querySelector('.character-count').textContent = `${remainingChars} caracteres restantes`;
            drawCanvas();
        }

        function updateTextOrientation() {
            textOrientation = document.getElementById('textOrientation').value;
            drawCanvas();
        }

        function updateFont() {
            selectedFont = document.getElementById('fontSelector').value;
            drawCanvas();
        }

        function personalizar() {
            alert('Produto adicionado ao carrinho!');
        }

        canvas.addEventListener('mousedown', function(e) {
            let rect = canvas.getBoundingClientRect();
            let mouseX = e.clientX - rect.left;
            let mouseY = e.clientY - rect.top;

            if (Math.abs(mouseX - textX) < 50 && Math.abs(mouseY - textY) < 20) {
                isDragging = true;
                offsetX = mouseX - textX;
                offsetY = mouseY - textY;
            }
        });

        canvas.addEventListener('mousemove', function(e) {
            if (isDragging) {
                let rect = canvas.getBoundingClientRect();
                textX = e.clientX - rect.left - offsetX;
                textY = e.clientY - rect.top - offsetY;
                drawCanvas();
            }
        });

        canvas.addEventListener('mouseup', function() {
            isDragging = false;
        });

        canvas.addEventListener('mouseleave', function() {
            isDragging = false;
        });

        document.getElementById('customText').addEventListener('input', updateText);
        document.getElementById('textOrientation').addEventListener('change', updateTextOrientation);
        document.getElementById('fontSelector').addEventListener('change', updateFont);

        productImage.onload = function() {
            drawCanvas();
        };

        // Initial draw (no text will be shown since customText is empty)
        drawCanvas();
    </script>
</body>
</html> 

