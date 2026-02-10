import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    stack: [{ type: String }],
    impact: { type: String }
  },
  { _id: false }
);

const experienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    timeline: { type: String, required: true },
    highlights: [{ type: String }]
  },
  { _id: false }
);

const portfolioSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    title: { type: String, required: true },
    about: { type: String, required: true },
    location: String,
    contact: {
      email: String,
      phone: String,
      linkedin: String,
      github: String,
      leetcode: String
    },
    skills: {
      programming: [String],
      web: [String],
      data: [String],
      concepts: [String],
      tools: [String]
    },
    experience: [experienceSchema],
    projects: [projectSchema],
    education: [
      {
        degree: String,
        institute: String,
        score: String,
        timeline: String
      }
    ]
  },
  { timestamps: true }
);

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);
