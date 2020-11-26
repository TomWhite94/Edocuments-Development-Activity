import React, { Component } from 'react'
import DocumentListItem from './DocumentListItem'



class DocumentList extends Component {

    state = {
        toggle: false,
        dropdownValue: '',
    }
    
    checkboxOnChange = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    handleChange = event => {
        this.setState({
            dropdownValue: event.target.value
        })

    }

    filterDocuments = () => {
        // filter through all documents based on filterable criteria (has tasks and/or is from selected project)
        return (this.props.portfolio.filter(document => {
            // apply 'has tasks' toggle: if toggle 'true' then check if document has tasks
            let hasTasks = !this.state.toggle || (this.state.toggle && document.tasks.length > 0)
            // check if document matches selected project name (if project specified)
            let isInSelectedProject = ['', document.projectName].includes(this.state.dropdownValue)
            // return if both are true
            return hasTasks && isInSelectedProject  
            

        }))
    }
    
    render() {
        
        let documentWithTask = this.props.portfolio.filter(document => document.tasks.length > 0)
        let projectNames = this.props.portfolio.reduce((unique, item) => unique.includes(item.projectName) ? unique : [...unique, item.projectName], [])
        return(
            <div>
                <input type="checkbox" id="cb1" name="cb1" value={this.state.toggle} onChange={this.checkboxOnChange}></input>
                <label>Hide documents with no tasks</label><br></br>
                <label>
                     Select project name
                    <select value={this.state.dropdownValue} onChange={this.handleChange}>
                        <option value="">All projects</option>
                        {projectNames.map(name => {
                            return <option key={name}>{name} </option>
                        })}
                    </select>
                </label>
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
                        {this.filterDocuments().map(document => <DocumentListItem key={document.id} {...document}/>)} 
                    </tbody>
                </table>
            </div>

        )
    }
}

export default DocumentList

