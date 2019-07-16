import React, { Component } from 'react';
import DeleteButton from './DeleteButton';

export default class Contact extends Component {
    render() {
        const elements = this.props.data.map((x, i) => {
            return (
            <tr key={x.name + x.popularity}>
                <td><img src={x.pictureUrl} alt=""/></td>
                <td><p>{x.name}</p></td>
                <td><p>{x.popularity}</p></td>
                <td><DeleteButton delete={()=>this.props.delete(i)}/></td>
            </tr>
        )})
        return (
            <table>
                <tbody>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                {elements}
                </tbody>
            </table>
        )
    }
}
