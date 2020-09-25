import React from 'react';
import ReactDom from 'react-dom';

import {App} from 'components/App';
import {Messenger} from "components/Messenger";

const element = <h1 className="react-app" id="test-app">Hello, React.js</h1>;
const messagesData = ['Hi', 'Hello', 'Test message'];
const Message = ({text, author}) => {
    return (
        <div>
            <p>{text} (<b>{author}</b>)</p>
        </div>
    );
}
const MessageList = ({items}) => {
    return items.map((item, index) => <Message text={item} author="WebDev" key={index}/>);
};

const Button = ({children}) => {
    const handlerClick = (event) => {
        console.log(event);
        console.log('Это кнопка');
        messagesData.push('Ещё сообщение');
        console.log(messagesData);
        renderer();
    }
    return (
        <button onClick={handlerClick}>{children}</button>
    )
}

const renderer = () => ReactDom.render(
    <>
        <Messenger />
        <App />
        {element}
        <Message text={messagesData[0]} author="WebDev"/>
        <Message text={messagesData[1]} author="WebDev"/>
        <Message text={messagesData[2]} author="WebDev"/>
        <MessageList items={messagesData}/>
        <Button>Тестовая кнопка</Button>
    </>,
    document.getElementById('root')
)

renderer();