import { AboutMe } from "../model/aboutme";
import { Project } from "../model/project";


export const mockLogin = (userName: string, password: string) => new Promise<TokenResponse>(function (resolve, rejected) {
    setTimeout(() => {
        if (userName === "user@threepoints.com" && password === "patata") {
            resolve(JSON.parse(
                `{
                 "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODg0YmJiM2Q0YTRkNDk1ZDYyNGJhYyIsImVtYWlsIjoibHVjYXNmZXJuYW5kZXphcmFnb25AZ21haWwuY29tIiwiaWF0IjoxNjM2MzIyMzA3LCJleHAiOjE2MzYzMjU5MDd9.yxy7uKWXJx5rY8znRBTg5182llyH8Rs9R8C6_SM4LIg",
                 }`
            ));
        } else {
            rejected(new Unauthorized());
        }
    }, 2000);
    
})
export interface TokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}
export interface ApiError {
    description?: string;
}
export class Unauthorized implements ApiError { }



export const mockAboutme = () => new Promise<AboutMe>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(JSON.parse(
            `{
            "id":"12389asdfasf8",
            "name":"Lucas Fernández Aragón",
            "birthday":765817712000,
            "nationality":"Spain",
            "job":"Red Hat",
            "github":"https://github.com/lucferbux"
            }`
        ));
    }, 500);

});

export const projects: Array<Project> = [
    {
    "id":"7890asdf890",
    "title":"Taller-FrontEnd",
    "description":"Portofio personal",
    "version":"5.2.0",
    "link":"https://github.com/pepiyu/Taller-FrontEnd",
    "tag":"React, JavaScript, Typescript",
    "timestamp": 765817712005
    },
    {
    "id":"7890asdf890",
    "title":"Typescript Weather",
    "description":"Primera aproximación a TypeScript",
    "version":"3.0.2",
    "link":"https://github.com/pepiyu/TypescriptWeatherExample",
    "tag":"React, JavaScript, Typescript",
    "timestamp":765817712006
    },
    {
    "id":"7890asdf890",
    "title":"Pug Memory",
    "description":"Proyecto personal que consiste en un juego de memoria con Fotos de Chip, un carlino muy cariñoso y querido",
    "version":"-",
    "link":"https://github.com/pepiyu/pugmemory",
    "tag":"React, JavaScript, Typescript",
    "timestamp":765817712007
    },
    {
    "id":"7890asdf890",
    "title":"CRUD-http",
    "description":"Actividad realizado en clase de Arquitectura de sistemas",
    "version":"-",
    "link":"https://github.com/pepiyu/crud-http",
    "tag":"Api, Crud",
    "timestamp":765817712007
    }

]

export const mockProjects = () => new Promise<Project[]>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(
            projects
        );
    }, 500);

});

export const mockAddProject = (project: Project) => new Promise<Project>(function (resolve, rejected) {
    projects.push(project);
})