import React from 'react';
import ReactDom from 'react-dom';


//Вариант 1
//const element = React.createElement('h1', {className: 'react-app', id: 'test-app'}, 'Hello, React.js!');

//JSX
const element = <h1 className = "react-app" id = "test-app">Hello, react.js!!!</h1>;

const Element = ({children}) => {
    return (
        <div>
            <p>{children}</p>
        </div>
    );
};

const messageData = ['Hi', 'Hello', 'Test message'];

const Message = ({text, author}) => {
    return (
        <div>
            <p>{text} <b>{author}</b></p>
        </div>
    );
};

const MessageList = ({items}) => {
    return items.map((item, index) => <Message text = {item} author = "WebDev" key = {index}/>);
}

const Button = ({children}) => {
    const handleClick = (event) => {
        //console.log(event);
        //console.log('Тестовая кнопка');
        messageData.push('Нормально');
        console.log(messageData);
        renderPage();
    };

    return (
    <button onClick = {handleClick}>{children}</button>
    );
};

const renderPage = () => {
    ReactDom.render(
        <>
            <Element>Hello, react.js!!!</Element>
            <MessageList items = {messageData} />
            <Button>Добавить сообщение!</Button>
        </>,
        document.getElementById('root')
    );
};

//setInterval(() => {
    renderPage();
//}, 1000);

