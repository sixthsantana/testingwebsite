import { 
  users, 
  projects, 
  photographyItems, 
  skills, 
  experiences, 
  education,
  type User, 
  type InsertUser,
  type Project,
  type PhotographyItem,
  type Skill,
  type Experience,
  type Education,
  type InsertProject,
  type InsertPhotographyItem,
  type InsertSkill,
  type InsertExperience,
  type InsertEducation
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getAllProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Photography methods
  getAllPhotographyItems(): Promise<PhotographyItem[]>;
  getPhotographyItem(id: number): Promise<PhotographyItem | undefined>;
  createPhotographyItem(item: InsertPhotographyItem): Promise<PhotographyItem>;
  
  // Skills methods
  getAllSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  // Experience methods
  getAllExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Education methods
  getAllEducation(): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private photographyItems: Map<number, PhotographyItem>;
  private skills: Map<number, Skill>;
  private experiences: Map<number, Experience>;
  private education: Map<number, Education>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.photographyItems = new Map();
    this.skills = new Map();
    this.experiences = new Map();
    this.education = new Map();
    this.currentId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample projects
    const sampleProjects: Project[] = [
      {
        id: this.currentId++,
        title: "E-commerce Platform",
        description: "Full-stack e-commerce application with user authentication, payment processing, and inventory management.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
      },
      {
        id: this.currentId++,
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
      }
    ];

    sampleProjects.forEach(project => this.projects.set(project.id, project));

    // Sample photography items
    const samplePhotos: PhotographyItem[] = [
      {
        id: this.currentId++,
        title: "Mountain Landscape",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        category: "Landscapes",
        featured: true
      },
      {
        id: this.currentId++,
        title: "Portrait Session",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        category: "Portraits",
        featured: true
      }
    ];

    samplePhotos.forEach(photo => this.photographyItems.set(photo.id, photo));

    // Sample skills
    const sampleSkills: Skill[] = [
      { id: this.currentId++, name: "React", category: "Frontend", level: 90 },
      { id: this.currentId++, name: "Node.js", category: "Backend", level: 85 },
      { id: this.currentId++, name: "Photography", category: "Creative", level: 95 }
    ];

    sampleSkills.forEach(skill => this.skills.set(skill.id, skill));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Project methods
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  // Photography methods
  async getAllPhotographyItems(): Promise<PhotographyItem[]> {
    return Array.from(this.photographyItems.values());
  }

  async getPhotographyItem(id: number): Promise<PhotographyItem | undefined> {
    return this.photographyItems.get(id);
  }

  async createPhotographyItem(insertItem: InsertPhotographyItem): Promise<PhotographyItem> {
    const id = this.currentId++;
    const item: PhotographyItem = { ...insertItem, id };
    this.photographyItems.set(id, item);
    return item;
  }

  // Skills methods
  async getAllSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const id = this.currentId++;
    const skill: Skill = { ...insertSkill, id };
    this.skills.set(id, skill);
    return skill;
  }

  // Experience methods
  async getAllExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values());
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = this.currentId++;
    const experience: Experience = { ...insertExperience, id };
    this.experiences.set(id, experience);
    return experience;
  }

  // Education methods
  async getAllEducation(): Promise<Education[]> {
    return Array.from(this.education.values());
  }

  async createEducation(insertEducation: InsertEducation): Promise<Education> {
    const id = this.currentId++;
    const education: Education = { ...insertEducation, id };
    this.education.set(id, education);
    return education;
  }
}

export const storage = new MemStorage();
