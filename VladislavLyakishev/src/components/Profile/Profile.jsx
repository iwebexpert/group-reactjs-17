import React, {Component} from "react";


export class Profile extends Component {
  render() {
    const {name} = this.props
    return (
      <div>
        <h1>Страница профиля</h1>
        <p><b>Имя профиля: </b>{name}</p>
      </div>
    )
  }
}