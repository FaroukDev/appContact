import React, { Component } from 'react'
import Contact from './contact/Contact'
import{Consumer} from '../context'



export default class List extends Component {

    render() {

        return (
            <Consumer>
            {value => {
                return(
            <React.Fragment >
            <h1 className="display-4 my-4">Nos Contacts :</h1>
                {value.contacts.map(contact => (
                    <Contact 
                    key={contact.id}
                    id={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                   
                    />
                ))}
            </React.Fragment>
                )
            }}
            </Consumer>
        )
    
    }
}
