import React from 'react';
import ReactDom from 'react-dom';

//Вариант 1
//const element = React.createElement('h1', {className: 'react-app', id: 'test-app'}, 'Hello, React.js!');

//JSX
//const element = <h1 className="react-app" id="test-app">Hello, React.js!!!</h1>;

const messagesData = ['Hi', 'Hello', 'Test message'];

const Message = ({text, author}) => {
  return (
    <div>
      <p><b>({author}): </b> {text}</p>
    </div>
  );
};

const MessageList = ({items}) => {
  return items.map((item, index) => <Message text={item} author="WebDev" key={index} />);
};


const Button = ({children}) => {
  const handleClick = (event) => {
    messagesData.push('Нормально!');
    render();
  };

  return (
    <button onClick={handleClick}>{children}</button>
  );
};

function render() {
  ReactDom.render(
    <>
      <MessageList items={messagesData} />
      <Button>Send</Button>
    </>,
    document.getElementById('root')
  );
}
render();
