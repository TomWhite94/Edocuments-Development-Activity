import React, { Component } from 'react'

class DocumentListItem extends Component {


render() {

    return(  
        <tr>
        <td>{this.props.name}</td>
        <td>{this.props.siteName}</td>
        <td>{this.props.projectName}</td>
        
        <td>{this.props.tasks.length}</td>
        
       
        </tr>
        
    )
}



}

export default DocumentListItem