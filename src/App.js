import './App.css';
import React, { Component } from 'react'
import getDataByUser from './util/getDataByUser'
import getAuthToken from './util/getAuthToken'
import DocumentList from './DocumentList'


class App extends Component {

  state = {
    authToken: null,
    portfolio: []
  }

  componentDidMount() {
    this.fetchAuthToken()
  }

  fetchAuthToken = () => {
    getAuthToken()
    .then(response => response.json())
    .then(data => {
      // console.log('Success:', data)
      this.setState({
        authToken: data.Result.auth.token
      })
    })
    
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  fetchDataByUser = () => {
    
    let portfolioPromise = getDataByUser("Portfolio/ByUserId")
    .then(response => response.json())
   
    .catch((error) => {
      console.error('Error:', error);
    })

    let tasksPromise = getDataByUser("Tasks/ByUser")
    .then(response => response.json())
 
    .catch((error) => {
      console.error('Error:', error);
    })
    Promise.all([portfolioPromise, tasksPromise])
    .then(data => {
      // Discard systems and only keep tasks
      let tasks = data[1].Result.tasks
      let portfolio = data[0].Result
      let tasksByDocId = {}
      
      tasks.map(task => {
        if (task.documentId in tasksByDocId) {
          return tasksByDocId[task.documentId].push(task)
        } else {
          return tasksByDocId[task.documentId] = [task]
        }
      })
      let portfolioTasks = portfolio.sites.map(site => {
        return site.projects.map(project => {
          return project.documents.map(document => {
            return {
              ...document,
              tasks: document.id in tasksByDocId ? tasksByDocId[document.id] : [],
              siteName: site.name,
              siteId: site.id,
              projectName: project.name,
              projectId: project.id
            }
          })
        })
      })

      this.setState({
        portfolio: portfolioTasks.flat(2)
      })

    }
    
    )
  }

  
    
  
  
  
  
  render() { 
    return (
      <div>
        
        <button onClick={this.fetchDataByUser}>Get Data</button>
        {this.state.portfolio !== [] ? <DocumentList portfolio={this.state.portfolio}/> : "No Results"}
      </div>
      
    );
  }

}

export default App;
