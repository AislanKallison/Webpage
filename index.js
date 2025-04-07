<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHONELAB - WebPage</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            font-size: 16px;
            color: #000;
        }

        /* Header Styles */
        .header {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        .top-bar {
            background-color: #000;
            color: #fff;
            text-align: center;
            padding: 8px 0;
            font-size: 12px;
            text-transform: uppercase;
        }

        .top-bar .nav-arrows {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 18px;
            color: #fff;
        }

        .top-bar .nav-arrows.left {
            left: 10px;
        }

        .top-bar .nav-arrows.right {
            right: 10px;
        }

        .nav-bar {
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 30px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .nav-bar .logo {
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
        }

        .nav-bar .nav-links {
            display: flex;
            gap: 20px;
        }

        .nav-bar .nav-links a {
            text-decoration: none;
            color: #000;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 500;
        }

        .nav-bar .nav-links a:hover {
            color: #666;
        }

        .nav-bar .nav-icons {
            display: flex;
            gap: 15px;
        }

        .nav-bar .nav-icons img {
            width: 20px;
            height: 20px;
        }

        /* Main Banner Styles */
        .banner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5; /* Placeholder background color */
            padding: 0 50px;
            margin-top: 100px; /* Adjust for fixed header */
        }

        .banner .text-content {
            max-width: 50%;
        }

        .banner .text-content h1 {
            font-size: 48px;
            text-transform: uppercase;
            line-height: 1.2;
            margin-bottom: 20px;
        }

        .banner .text-content h1 .small {
            font-size: 24px;
            display: block;
            margin-bottom: 10px;
        }

        .banner .text-content p {
            font-size: 16px;
            text-transform: uppercase;
            margin-bottom: 30px;
        }

        .banner .text-content .btn {
            background-color: #000;
            color: #fff;
            padding: 15px 30px;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 25px;
            font-size: 14px;
            font-weight: bold;
        }

        .banner .image-content {
            max-width: 50%;
            text-align: right;
        }

        .banner .image-content img {
            max-width: 100%;
            height: auto;
        }

        /* Category Navigation Styles */
        .category-nav {
            padding: 30px 50px;
            background-color: #fff;
            position: relative;
        }

        .category-nav .carousel {
            display: flex;
            overflow-x: auto;
            gap: 30px;
            padding: 20px 0;
            scroll-behavior: smooth;
        }

        .category-nav .carousel::-webkit-scrollbar {
            display: none; /* Hide scrollbar for a cleaner look */
        }

        .category-nav .category-item {
            text-align: center;
            flex: 0 0 auto;
        }

        .category-nav .category-item img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
        }

        .category-nav .category-item p {
            margin-top: 10px;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 500;
        }

        .category-nav .nav-arrows {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
            color: #000;
            cursor: pointer;
        }

        .category-nav .nav-arrows.left {
            left: 10px;
        }

        .category-nav .nav-arrows.right {
            right: 10px;
        }

        /* Promotional Banner Styles */
        .promo-banner {
            position: relative;
            height: 400px;
            background-color: #f5f5f5; /* Placeholder background color */
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 50px;
        }

        .promo-banner .text-content {
            text-align: right;
        }

        .promo-banner .text-content h2 {
            font-size: 24px;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        .promo-banner .text-content h2 .icon {
            display: inline-block;
            margin-left: 10px;
            font-size: 20px;
        }

        .promo-banner .text-content .btn {
            background-color: #000;
            color: #fff;
            padding: 15px 30px;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 25px;
            font-size: 14px;
            font-weight: bold;
        }

        .promo-banner .chat-bubble {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background-color: #fff;
            padding: 10px 20px;
            border-radius: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            font-size: 14px;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="top-bar">
            <span class="nav-arrows left">←</span>
            FRETE GRÁTIS NAS COMPRAS ACIMA DE R$350,00 PARA TODO O BRASIL
            <span class="nav-arrows right">→</span>
        </div>
        <nav class="nav-bar">
            <div class="logo">PHONELAB</div>
            <div class="nav-links">
                <a href="#">Somos Phonelab</a>
                <a href="#">Home</a> 
                <a href="#">Loja</a> 
                <a href="#">Garrafas</a> 
                <a href="#">Personalize</a> 
                <a href="#">Contato</a>
            </div>
            <div class="nav-icons">
                <img src="https://via.placeholder.com/20?text=🔍" alt="Search">
                <img src="https://via.placeholder.com/20?text=👤" alt="User">
                <img src="https://via.placeholder.com/20?text=🛒" alt="Cart">
            </div>
        </nav>
    </header>

    <!-- Main Banner -->
    <section class="banner">
        <div class="text-content">
            <h1>
                <span class="small">Phonelab <sup></sup></span>
                 LEVE TUDO E UM POUCO MAIS!
            </h1>
            <p>TRÊS TAMANHOS, INFINITAS POSSIBILIDADES</p>
            <a href="#" class="btn">COMPRE AGORA</a>
        </div>
        <div class="image-content">
            <!-- Placeholder image; replace with the actual image -->
            <img src="https://via.placeholder.com/400x600?text=Person+with+Bag" alt="Person holding a bag">
        </div>
    </section>

    <!-- Category Navigation -->
    <section class="category-nav">
        <div class="nav-arrows left">←</div>
        <div class="carousel">
            <div class="category-item">
                <img src="https://via.placeholder.com/120?text=VYTA" alt="VYTA">
                <p>VYTA</p>
            </div>
            <div class="category-item">
                <img src="https://via.placeholder.com/120?text=POTES" alt="POTES">
                <p>POTES</p>
            </div>
            <div class="category-item">
                <img src="https://via.placeholder.com/120?text=THERMOCUP" alt="THERMOCUP">
                <p>THERMOCUP</p>
            </div>
            <div class="category-item">
                <img src="https://via.placeholder.com/120?text=BOLSAS" alt="BOLSAS">
                <p>BOLSAS</p>
            </div>
            <div class="category-item">
                <img src="https://via.placeholder.com/120?text=TAMPAS" alt="TAMPAS">
                <p>TAMPAS</p>
            </div>
            <div class="category-item">
                <img src="https://via.placeholder.com/120?text=SUPERCUP" alt="SUPERCUP">
                <p>SUPERCUP</p>
            </div>
        </div>
        <div class="nav-arrows right">→</div>
    </section>

    <!-- Promotional Banner -->
    <section class="promo-banner">
        <div class="text-content">
            <h2>FRESH BOWL <span class="icon">↻</span></h2>
            <h2>BACK IN STOCK</h2>
            <a href="#" class="btn">COMPRE AGORA</a>
        </div>
        <div class="chat-bubble">ajuda?</div>
    </section>
</body>
</html> 

