import React, {useState} from 'react'
import ReactDom from 'react-dom'

const Message = ({text, number}) => {
  return (
    <p style={{fontSize: 20}}>
      <strong>{number}.&nbsp;</strong>{text}
    </p>
  )
}

const Element = () => {
  const [messages, setMessages] = useState([
    'Hello!',
    'How are you?',
  ])
  
  const styles = {
    width: 500,
    margin: '0 auto',
    padding: '50px 0',
  }
  
  const addMessage = text => {
    setMessages(prevState => [...prevState, text])
  }
  
  return (
    <div style={styles}>
      
      <h1 style={{textAlign: 'center'}}>
        Messages
      </h1>
      
      <div>
        {messages.map((message, index) => (
          <Message text={message} number={index + 1} />
        ))}
      </div>
      
      <button
        style={{padding: '15px 30px'}}
        onClick={() => addMessage("I'm fine, thanks")}
      >
        I'm fine
      </button>
      
    </div>
  )
}

ReactDom.render(
  <Element />,
  document.querySelector('#app')
)
