import Task from './../entity/Task.js';
import Project from './../entity/Project.js';
import dateUtil from './../utility/DateUtil.js';
import projectRepository from './../repository/ProjectRepository.js';

class ProjectService {
    static projectRepository;
    projects = [];

    constructor(projectRepository) {
        ProjectService.projectRepository = projectRepository;
    }
    
    saveProject(project) {
        ProjectService.projects.push(project);
        ProjectService.projectRepository.saveProjects(ProjectService.projects);
    }

    getProjects() {
        ProjectService.projects = ProjectService.projectRepository.getProjects();
        console.log('you are here');
        // This function retrun a copy of the static property projects
        return ProjectService.projects;
    }

    getTodayProjects() {
        // this.getProjects();
        let projects = [...this.projects];
        let todayProjects = projects.map(project => {
            let copyProject = new Project();
            Object.assign(copyProject, project);
            copyProject.setTasks(copyProject.getTasks().filter(task => {
                // console.log(task);
              return dateUtil.isToday(task.getDueDate());
            }));
            return copyProject;
        });

        return todayProjects;
    }

    getThisWeekProjects() {
        // this.getProjects();
        let projects = [...this.projects];
        let weekProjects = projects.map(project => {
            let copyProject = new Project();
            Object.assign(copyProject, project);
            copyProject.setTasks(copyProject.getTasks().filter(task => {
                // console.log(task);
              return dateUtil.isDateInThisWeek(task.getDueDate());
            }));
            return copyProject;
        });

        return weekProjects;
    }
}

let projectService = new ProjectService(projectRepository);
export default projectService;