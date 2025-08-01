<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Эхо-чат</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .chat-container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .chat-header {
            background-color: #4285f4;
            color: white;
            padding: 15px;
            text-align: center;
            font-size: 18px;
        }
        
        .chat-messages {
            height: 400px;
            overflow-y: auto;
            padding: 15px;
            display: flex;
            flex-direction: column;
        }
        
        .message {
            max-width: 70%;
            margin-bottom: 15px;
            padding: 10px 15px;
            border-radius: 18px;
            line-height: 1.4;
            position: relative;
        }
        
        .user-message {
            align-self: flex-end;
            background-color: #e3f2fd;
            border-bottom-right-radius: 5px;
        }
        
        .server-message {
            align-self: flex-start;
            background-color: #f1f1f1;
            border-bottom-left-radius: 5px;
        }
        
        .input-area {
            display: flex;
            padding: 15px;
            border-top: 1px solid #eee;
            background-color: #f9f9f9;
        }
        
        #messageInput {
            flex: 1;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 25px;
            outline: none;
            font-size: 16px;
        }
        
        #sendButton {
            margin-left: 10px;
            padding: 12px 20px;
            background-color: #4285f4;
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        
        #sendButton:hover {
            background-color: #3367d6;
        }
        
        .status {
            padding: 10px;
            text-align: center;
            background-color: #f1f1f1;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <div class="chat-header">Эхо-чат</div>
        <div class="status" id="status">Подключение к серверу...</div>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="input-area">
            <input type="text" id="messageInput" placeholder="Введите сообщение..." autocomplete="off">
            <button id="sendButton">Отправить</button>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const chatMessages = document.getElementById('chatMessages');
            const messageInput = document.getElementById('messageInput');
            const sendButton = document.getElementById('sendButton');
            const statusElement = document.getElementById('status');
            
            // Подключаемся к эхо-серверу
            const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');
            
            // Обработчики событий WebSocket
            socket.onopen = function() {
                statusElement.textContent = 'Подключено к серверу';
                statusElement.style.color = '#4285f4';
            };
            
            socket.onclose = function() {
                statusElement.textContent = 'Соединение закрыто';
                statusElement.style.color = '#f44336';
            };
            
            socket.onerror = function(error) {
                statusElement.textContent = 'Ошибка соединения';
                statusElement.style.color = '#f44336';
                console.error('WebSocket error:', error);
            };
            
            // Обработчик входящих сообщений
            socket.onmessage = function(event) {
                addMessage(event.data, 'server');
            };
            
            // Функция добавления сообщения в чат
            function addMessage(message, sender) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message');
                messageElement.classList.add(sender + '-message');
                messageElement.textContent = message;
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            // Отправка сообщения
            function sendMessage() {
                const message = messageInput.value.trim();
                if (message && socket.readyState === WebSocket.OPEN) {
                    addMessage(message, 'user');
                    socket.send(message);
                    messageInput.value = '';
                    messageInput.focus();
                }
            }
            
            // Обработчики событий для кнопки и поля ввода
            sendButton.addEventListener('click', sendMessage);
            
            messageInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        });
    </script>
</body>
</html>
