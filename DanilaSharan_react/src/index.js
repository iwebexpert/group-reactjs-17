import React, {useState} from 'react';
import ReactDom from 'react-dom';

const Message = ({text, number}) => {
  return (
    <p style={{fontSize: 20}}>
      <strong>{number}.&nbsp;</strong>{text}
    </p>
  )
}

const Element = () => {
  const [messages, setMessages] = useState([
    'Сообщение 1',
    'Сообщение 2',
  ])

  const styles = {
    margin: '0 auto',
    width: 600,
    padding: '3rem 0',
  }

  const addMessage = text => {
    setMessages(prv => [...prv, text])
  }

  return (
    <div style={styles}>

      <h1 style={{textAlign: 'center'}}>
        Тыц-тыц, приложуха))
      </h1>

      <div>
        {messages.map((message, index) => (
          <Message text={message} number={index + 1} />
        ))}
      </div>

      <button
        style={{padding: '.5rem 1rem'}}
        onClick={() => addMessage("Статическое сообщение")}
      >
        Клоцк
      </button>

    </div>
  )
}

ReactDom.render(
  <Element />,
  document.getElementById('root')
)
