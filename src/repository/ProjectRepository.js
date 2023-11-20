import Project from './../entity/Project.js';
import Task from './../entity/Task.js';

class ProjectRepository {
    saveProjects(projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    getProjects() {
        let jsonProjects = JSON.parse(localStorage.getItem('projects')) || new Project('Default');

        if (localStorage.getItem('projects')) {
            // Populate the list of json projects
            let projects = jsonProjects.map(project => {
                return Object.assign(new Project(), project);
            });
            
            // Populate the list of tasks of each project
            projects.forEach(project => {
                project.setTasks(project.getTasks().map(task => {
                    const populatedTask = Object.assign(new Task(), task);
    
                    // Make the queried date Date object
                    const dueDate = new Date(populatedTask.getDueDate());
                    populatedTask.setDueDate(dueDate)
    
                    return populatedTask;
                }));
            });
            
            return projects;
        }
        
        return jsonProjects;
    }
}

const projectRepository = new ProjectRepository();
export default projectRepository;