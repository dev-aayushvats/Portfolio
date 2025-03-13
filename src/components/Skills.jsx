function Skills({ id }) {
    const skills = [
      { name: 'C', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/c.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/cpp.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/java.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/python.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/javascript_badge.svg' },
      { name: 'Bash', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/bash.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/html5.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/css3.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/git.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/github_badge.svg' },
      { name: 'VSCode', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/visualstudio.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/docker.svg' },
      { name: 'Cloudflare', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/cloudflare.svg' },
      { name: 'npm', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/npm.svg' },
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/postman.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/figma.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/mongodb.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/postgresql.svg' },
      { name: 'ReactJS', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/react.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/nodejs.svg' },
      { name: 'ExpressJS', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/express.svg' },
      { name: 'Hono', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/hono.svg' }, // Placeholder, may need custom logo
      { name: 'NextJS', logo: 'https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/nextjs.svg' },
    ];
  
    return (
      <section className="section skills" id={id}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;