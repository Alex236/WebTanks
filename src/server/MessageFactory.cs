using System;
using System.Text;
using Newtonsoft.Json;


namespace WebTanksServer
{
    internal static class MessageFactory
    {
        public static MessageBase DeserializeMessage(ArraySegment<byte> message)
        {
            Message deserializedMessage;
            dynamic content;
            try
            {
                deserializedMessage = JsonConvert.DeserializeObject<Message>(Encoding.UTF8.GetString(message));
                content = JsonConvert.DeserializeObject(deserializedMessage.Content);
            }
            catch
            {
                return null;
            }
            switch (deserializedMessage.Type)
            {
                case MessageType.SetName:
                    return CreateMessageSetName(content);
                case MessageType.SetMap:
                    return CreateMessageSetMap(content);
                case MessageType.StartGame:
                    return CreateMessageStartGame(content);
                case MessageType.PressedButton:
                    return CreateMessagePressedButton(content);
                case MessageType.EndGame:
                    return CreateMessageEndGame(content);
                default:
                    return null;
            }
        }

        public static string SerealizeMessage(dynamic content)
        {
            var message = new Message();
            message.Content = JsonConvert.SerializeObject(content);
            switch (content.Type)
            {
                case MessageType.SetName:
                    message.Type = MessageType.SetName;
                    return JsonConvert.SerializeObject(message);
                case MessageType.SetMap:
                    message.Type = MessageType.SetMap;
                    return JsonConvert.SerializeObject(message);
                case MessageType.StartGame:
                    message.Type = MessageType.SetName;
                    return JsonConvert.SerializeObject(message);
                case MessageType.PressedButton:
                    message.Type = MessageType.SetName;
                    return JsonConvert.SerializeObject(message);
                case MessageType.EndGame:
                    message.Type = MessageType.SetName;
                    return JsonConvert.SerializeObject(message);
                default:
                    return null;
            }
        }

        private static MessageSetName CreateMessageSetName(dynamic content)
        {
            MessageSetName setName = new MessageSetName();
            setName.Name = content.Name;
            return setName;
        }

        private static MessageSetMap CreateMessageSetMap(dynamic content)
        {
            MessageSetMap setMap = new MessageSetMap();
            setMap.Name = content.Name;
            setMap.Map = content.Map;
            return setMap;
        }

        private static MessageStartGame CreateMessageStartGame(dynamic content)
        {
            MessageStartGame startGame = new MessageStartGame();
            startGame.Name = content.Name;
            return startGame;
        }

        private static MessagePressedButton CreateMessagePressedButton(dynamic content)
        {
            MessagePressedButton pressedButton = new MessagePressedButton();
            pressedButton.Button = content.PressedButton;
            pressedButton.Name = content.Name;
            return pressedButton;
        }

        private static MessageEndGame CreateMessageEndGame(dynamic content)
        {
            MessageEndGame endGame = new MessageEndGame();
            endGame.Name = content.Name;
            return endGame;
        }

        private static string DeleteUslessSymbols(string content)
        {
            char[] symbols = content.ToCharArray();
            int breacketsCounter = 0;
            for (int i = 0; i < symbols.Length; i++)
            {
                switch (symbols[i])
                {
                    case '{':
                        breacketsCounter++;
                        break;
                    case '}':
                        breacketsCounter--;
                        if (breacketsCounter == 0)
                        {
                            return content.Substring(0, i);
                        }
                        break;
                }
            }
            return null;
        }
    }
}