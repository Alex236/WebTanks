using System;
using System.Text;
using Newtonsoft.Json;


namespace WebTanksServer
{
    public class MessageFactory
    {
        public IMessage DeserializeMessage(ArraySegment<byte> message)
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

        private SetName CreateMessageSetName(dynamic content)
        {
            SetName setName = new SetName();
            setName.Name = content.Name;
            return setName;
        }

        private SetMap CreateMessageSetMap(dynamic content)
        {
            SetMap setMap = new SetMap();
            setMap.Name = content.Name;
            setMap.Map = content.Map;
            return setMap;
        }

        private StartGame CreateMessageStartGame(dynamic content)
        {
            StartGame startGame = new StartGame();
            startGame.Name = content.Name;
            return startGame;
        }

        private PressedButton CreateMessagePressedButton(dynamic content)
        {
            PressedButton pressedButton = new PressedButton();
            pressedButton.Button = content.PressedButton;
            pressedButton.Name = content.Name;
            return pressedButton;
        }

        private EndGame CreateMessageEndGame(dynamic content)
        {
            EndGame endGame = new EndGame();
            endGame.Name = content.Name;
            return endGame;
        }

        private string DeleteUslessSymbols(string content)
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