import Project from './../entity/Project.js';
import Task from './../entity/Task.js';

class ProjectRepository {
    saveProjects(projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    getProjects() {
        let jsonProjects = JSON.parse(localStorage.getItem('projects'));

        // Populate the list of json projects
        let projects = jsonProjects.map(project => {
            return Object.assign(new Project(), project);
        });
        
        // Populate the list of tasks of each project
        projects.forEach(project => {
            project.setTasks(project.getTasks().map(task => {
                return Object.assign(new Task(), task);
            }));
        });

        return projects;
    }
}

const projectRepository = new ProjectRepository();
export default projectRepository;