import React, { Component } from 'react'
import DocumentListItem from './DocumentListItem'



class DocumentList extends Component {

    state = {
        toggle: false
    }
    
    checkboxOnChange = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    
    render() {
        let documentWithTask = this.props.portfolio.filter(document => document.tasks.length > 0)
        console.log(documentWithTask)
        console.log(this.props.portfolio)
        return(
            <div>
                <input type="checkbox" id="cb1" name="cb1" value={this.state.toggle} onChange={this.checkboxOnChange}></input>
                <label for="cb1">Hide documents with no tasks</label><br></br>
                <table>
                    <thead>
                        <tr>
                        <th>Document Name</th>
                        <th>Site Name</th>
                        <th>Project Name</th>
                        
                        <th>Number of Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.toggle === false ? this.props.portfolio.map(document => <DocumentListItem key={document.id} {...document}/>) : documentWithTask.map(document => <DocumentListItem key={document.id} {...document}/>) }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default DocumentList

