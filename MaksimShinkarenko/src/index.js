import React from 'react'
import ReactDom from 'react-dom'

const messagesData = ['Hi', 'Hello', 'Test message']

const Message = ({text, author}) => {
    return (
        <div>
            <p>{text} <b>({author})</b></p>
        </div>
    )
}

const MessageList = ({items}) => {
    return items.map((item, index) => <Message text={item} author="WebDev" key={index}/>)
}

const Button = ({children, message}) => {
    const handleClick = (event) => {
        messagesData.push(message)
        render()
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}

function render() {
    ReactDom.render(
        <>
            <MessageList items={messagesData}/>
            <Button message={'Test message'}>Кнопка</Button>
        </>,
        document.getElementById('root')
    )
}

render()