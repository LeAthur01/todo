class ProjectService {
    static projectRepository;
    static projects = [];

    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    
    addProject(project) {
        this.projects.push(project);
    }


}