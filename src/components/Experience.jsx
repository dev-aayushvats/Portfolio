function Experience({ id }) {
    return (
      <section className="section experience" id={id}>
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          <div className="experience-item">
            <h3>Institute Innovation Council | Outreach Team Head</h3>
            <p>May 2024 - Present</p>
            <p>Fostering an entrepreneurial mindset on campus, supporting student innovation.</p>
          </div>
          <div className="experience-item">
            <h3>Coding Club - Web Development Wing | Admin</h3>
            <p>April 2024 - Present</p>
            <p>Core team member and admin for web development projects at IIT Dharwad.</p>
          </div>
          <div className="experience-item">
            <h3>Institute Student Mentorship Program | Student Mentor</h3>
            <p>August 2023 - August 2024</p>
            <p>Guided new students at IIT Dharwad in navigating college life.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;