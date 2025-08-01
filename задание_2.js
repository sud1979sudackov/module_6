<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Размеры экрана</title>
    <style>
        /* Стили для кнопки */
        .screen-size-btn {
            padding: 12px 24px;
            background-color: #4285f4;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            font-family: Arial, sans-serif;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: background-color 0.3s;
        }
        
        .screen-size-btn:hover {
            background-color: #3367d6;
        }
        
        .screen-size-btn:active {
            transform: translateY(1px);
        }
    </style>
</head>
<body>
    <!-- Кнопка для показа размеров экрана -->
    <button class="screen-size-btn">Показать размеры экрана</button>

    <script>
        // Получаем кнопку из DOM
        const btn = document.querySelector('.screen-size-btn');
        
        // Добавляем обработчик клика
        btn.addEventListener('click', function() {
            // Получаем данные о размерах экрана
            const screenData = {
                'Полная ширина экрана': window.screen.width + 'px',
                'Полная высота экрана': window.screen.height + 'px',
                'Доступная ширина (без панели задач)': window.screen.availWidth + 'px',
                'Доступная высота (без панели задач)': window.screen.availHeight + 'px',
                'Ширина окна браузера': window.innerWidth + 'px',
                'Высота окна браузера': window.innerHeight + 'px'
            };
            
            // Формируем сообщение для alert
            let message = 'Размеры экрана и окна:\n\n';
            for (const [key, value] of Object.entries(screenData)) {
                message += `${key}: ${value}\n`;
            }
            
            // Выводим alert с информацией
            alert(message);
        });
    </script>
</body>
</html>
