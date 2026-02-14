// Mock data for the OJT Tracker App

export interface TimeRecord {
  id: string;
  date: string;
  timeIn: string;
  timeOut: string;
  totalHours: number;
  status: 'approved' | 'pending' | 'rejected';
  notes?: string;
}

export interface WeeklyReport {
  id: string;
  weekNumber: number;
  startDate: string;
  endDate: string;
  tasks: string[];
  accomplishments: string;
  status: 'submitted' | 'draft' | 'approved' | 'revision';
  feedback?: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  progress: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'warning' | 'info' | 'success';
  read: boolean;
  date: string;
}

export const INTERN_PROFILE = {
  name: "Maria Santos",
  email: "maria.santos@university.edu",
  course: "BS Information Technology",
  university: "Polytechnic University",
  requiredHours: 600,
  renderedHours: 342,
  startDate: "2026-01-05",
  endDate: "2026-05-30",
  supervisorName: "Engr. Carlos Reyes",
};

export const COMPANY_PROFILE = {
  name: "TechVentures Philippines Inc.",
  location: "Makati City, Metro Manila",
  nature: "Software Development & IT Solutions",
  vision: "To be the leading technology partner in Southeast Asia, empowering businesses with innovative digital solutions.",
  mission: "We deliver cutting-edge software solutions that transform how organizations operate, fostering growth through technology excellence and client partnerships.",
  purpose: "Bridging the gap between business challenges and technology solutions to create meaningful impact in the digital economy.",
  activitiesPerformed: [
    "Software Development & Testing",
    "Web Application Development",
    "Mobile App Development",
    "Database Administration",
    "UI/UX Design",
    "Project Management Assistance",
  ],
};

export const TIME_RECORDS: TimeRecord[] = [
  { id: "1", date: "2026-02-14", timeIn: "08:00", timeOut: "17:00", totalHours: 8, status: "approved" },
  { id: "2", date: "2026-02-13", timeIn: "08:15", timeOut: "17:00", totalHours: 7.75, status: "approved" },
  { id: "3", date: "2026-02-12", timeIn: "08:00", timeOut: "17:30", totalHours: 8.5, status: "approved" },
  { id: "4", date: "2026-02-11", timeIn: "08:00", timeOut: "17:00", totalHours: 8, status: "pending" },
  { id: "5", date: "2026-02-10", timeIn: "09:00", timeOut: "17:00", totalHours: 7, status: "approved" },
  { id: "6", date: "2026-02-07", timeIn: "08:00", timeOut: "17:00", totalHours: 8, status: "approved" },
  { id: "7", date: "2026-02-06", timeIn: "08:30", timeOut: "17:00", totalHours: 7.5, status: "approved" },
  { id: "8", date: "2026-02-05", timeIn: "08:00", timeOut: "18:00", totalHours: 9, status: "approved" },
];

export const WEEKLY_REPORTS: WeeklyReport[] = [
  {
    id: "1",
    weekNumber: 6,
    startDate: "2026-02-09",
    endDate: "2026-02-13",
    tasks: ["Developed user authentication module", "Fixed bug in dashboard charts", "Attended sprint planning meeting"],
    accomplishments: "Completed the user authentication module with email verification. Resolved 3 critical bugs in the dashboard visualization components.",
    status: "submitted",
  },
  {
    id: "2",
    weekNumber: 5,
    startDate: "2026-02-02",
    endDate: "2026-02-06",
    tasks: ["Created REST API endpoints", "Wrote unit tests", "Code review participation"],
    accomplishments: "Built 5 REST API endpoints for the inventory module. Achieved 85% test coverage for the module.",
    status: "approved",
    feedback: "Great work on the API endpoints! Keep improving test coverage.",
  },
  {
    id: "3",
    weekNumber: 4,
    startDate: "2026-01-26",
    endDate: "2026-01-30",
    tasks: ["Database schema design", "Documentation writing", "Team standup presentations"],
    accomplishments: "Designed and implemented the database schema for the new CRM module. Created comprehensive API documentation.",
    status: "approved",
    feedback: "Excellent documentation. Schema design is well-normalized.",
  },
];

export const GOALS: Goal[] = [
  { id: "1", title: "Complete Frontend Development Training", description: "Finish React and TypeScript fundamentals", completed: true, progress: 100 },
  { id: "2", title: "Build Full-Stack Feature", description: "Develop a complete feature from backend to frontend", completed: false, progress: 75 },
  { id: "3", title: "Master Version Control", description: "Proficiency in Git workflows and collaboration", completed: true, progress: 100 },
  { id: "4", title: "Database Design & Management", description: "Learn SQL and database administration", completed: false, progress: 60 },
  { id: "5", title: "Agile Methodology Participation", description: "Actively participate in sprints and standups", completed: false, progress: 85 },
  { id: "6", title: "Complete OJT Portfolio", description: "Compile all documentation and evidence", completed: false, progress: 30 },
];

export const NOTIFICATIONS: Notification[] = [
  { id: "1", title: "Missing Time Log", message: "You haven't logged your time for Feb 14, 2026", type: "warning", read: false, date: "2026-02-14" },
  { id: "2", title: "Report Approved", message: "Your Week 5 report has been approved by Engr. Reyes", type: "success", read: false, date: "2026-02-10" },
  { id: "3", title: "Weekly Report Due", message: "Week 6 report is due by end of Friday", type: "info", read: true, date: "2026-02-09" },
];

export const WEEKLY_HOURS = [
  { week: "W1", hours: 40 },
  { week: "W2", hours: 38 },
  { week: "W3", hours: 42 },
  { week: "W4", hours: 39 },
  { week: "W5", hours: 41 },
  { week: "W6", hours: 32 },
];

export const ATTENDANCE_DATA = [
  { name: "Present", value: 28, fill: "hsl(var(--chart-1))" },
  { name: "Late", value: 3, fill: "hsl(var(--chart-4))" },
  { name: "Absent", value: 1, fill: "hsl(var(--chart-5))" },
];
