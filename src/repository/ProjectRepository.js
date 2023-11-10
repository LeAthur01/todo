export default class ProjectRepository {
    saveProjects(projects) {
        if (this.storageAvailable("localStorage")) {
            localStorage.setItem('projects', JSON.stringify(data));
        } else {
            console.log('local storage is not available');
        }
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