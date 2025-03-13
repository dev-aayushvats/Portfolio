function Projects({ id }) {
    return (
      <section className="section projects" id={id}>
        <h2 className="section-title">Projects / Achievements</h2>
        <div className="projects-content">
          <div className="project-item">
            <h3>Blogging Platform Project | Cloudflare Workers, ReactJS, Hono, Postgres</h3>
            <p>July 2024</p>
            <ul>
              <li>Developed a blogging platform using serverless back-end on Cloudflare Workers with PostgreSQL.</li>
              <li>Used Hono and Prisma for serverless back-end and database integration.</li>
              <li>Built a ReactJS front-end with JWT-based user authentication.</li>
            </ul>
          </div>
          <div className="project-item">
            <h3>Inter-IIT Tech Meet - Trumio Challenge | Figma, ReactJS, VS Code</h3>
            <p>December 2023</p>
            <ul>
              <li>National competition among IITs for product design and development.</li>
              <li>Designed and coded the frontend using Figma and ReactJS.</li>
              <li>Secured 8th position among 23 IITs.</li>
            </ul>
          </div>
          <div className="project-item">
            <h3>Shadow Mentors | HTML/CSS, ReactJS, API, Git, Unix Shell</h3>
            <p>November 2023</p>
            <ul>
              <li>Built a mentorship platform for college students.</li>
              <li>Created an interactive front-end with HTML, CSS, and JavaScript.</li>
              <li>Won 1st place in a 24-hour hackathon.</li>
            </ul>
          </div>
          <div className="project-item">
            <h3>Piedpiper - Text Compression | CSS, HTML, C, Git, Unix Shell</h3>
            <p>July 2023</p>
            <ul>
              <li>Developed a web app with Huffman encoding, reducing text file sizes by up to 50%.</li>
              <li>Secured 2nd place in IIT Dharwad's Summer of Innovation 2023.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;