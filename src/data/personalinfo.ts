// src/data/personalinfo.ts
import { stats } from "./blogs";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export const profile = {
  name: 'MhrSifat',
  profileTitle: 'Full-Stack Developer & Creative Technologist',
  profileOfWho: 'MhrSifat Profile',
  pic: '/profilepic.jpg',
  location: 'Dhaka, Bangladesh',
  bioDescription:
    "Passionate about building elegant solutions to complex problems. Specializing in modern web technologies, AI integration, and creating delightful user experiences that push the boundaries of what's possible.",
  stats: {
    posts: 24,
    followers: 1024,
    following: 150,
    projects: 5,
    expYears: 1,
    clients: 10,
    totalBlogs: stats.totalBlogs,
  }
};

export const links = [
  { icon: Github, label: 'GitHub', url: "https://github.com/mhrsifat", username: '@mhrsifat' },
  { icon: Linkedin, label: 'LinkedIn', url: "https://linkedin.com/in/mhrsifat13", username: 'MhrSifat' },
  { icon: Mail, label: 'Email', url: "mailto:mhrsifat@gmail.com", username: "mhrsifat@gmail.com" },
  { icon: Globe, label: 'Website', url: "https://www.mhrsifat.xyz", username: "mhrsifat.xyz" }
];