import React from 'react'
import ReactDom from 'react-dom'

const messageData = ['Message1', 'Message2', 'Message3']
let count = 1

const Message = ({text, index}) => {
  return (
    <div>
        <p>{text} | <small>Индекс сообщения: {index}</small></p>
    </div>
  )
}

const MessageList = ({items}) => {
  return (
    items.map( (elem, index) =>
      <Message text={elem} index={index} key={index}/>
    )
  )
}

const Button = (props) => {
  const handleClick = () => {
    messageData.push('Новое сообщение ' + count++)
    render()
  }
  return (
    <button onClick={handleClick}>{props.children}</button>
  )
}

const render = () => {
  ReactDom.render(
    <>
      <MessageList items={messageData} />
      <Button>Получить новое сообщение</Button>
    </>,
    document.getElementById('root')
  )
}

render()