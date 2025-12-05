"use client";

import React, { use } from "react";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { projects } from "@/app/data/projects";
import { ArrowRight } from "lucide-react";

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { darkMode } = useTheme();

  // ✅ unwrap async params (Next.js 15 requirement)
  const { slug } = use(params);

  // Find the project by slug
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Project not found
      </div>
    );
  }

  // Other projects for "More Projects"
  const otherProjects = projects.filter(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") !== slug
  );

  return (
    <div
  className={`min-h-screen px-6 pt-24 pb-12 transition-colors duration-300 ${
    darkMode ? "bg-[#121212] text-gray-100" : "bg-white text-gray-900"
  }`}
>
  {/* Project Heading */}
  <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
    {project.title}
  </h1>

  {/* Main Image */}
  <div className="w-full max-w-4xl mx-auto mb-12">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>

  {/* Manual Description Section */}
  <div
    className={`max-w-3xl mx-auto mb-16 space-y-4 text-lg leading-relaxed ${
      darkMode ? "text-gray-300" : "text-gray-700"
    }`}
  >
      {/*project.desc*/}
      {project.detailed}
  </div>

  {/* Two Images Grid */}
  {project.additionalImages && project.additionalImages.length > 0 && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
      {project.additionalImages.slice(0, 2).map((img, i) => (
        <div key={i} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={img}
            alt={`${project.title} image ${i + 1}`}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )}


      {/* More Projects */}
      {otherProjects.length > 0 && (
        <section className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            More Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((p, i) => (
              <Link
                key={i}
                href={`/projects/${p.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden rounded-sm shadow-xl cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {p.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
