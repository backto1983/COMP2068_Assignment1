exports.homePage = (req, res, next) => {
    res.render('index', { 
      title: 'Assignment 1 - Express Portfolio Website',
      name: 'Henrique Oliveira',
      message: 'Welcome to my personal portfolio website built using Express.js, Materialize front-end framework and implementing the EJS templating engine. Site deployment is done via GitHub and Heroku.' });
  };
  
  exports.about = (req, res, next) => {
    const message = 'I am a Computer Programmer student, currently enrolled at Georgian College. My program focus on developing scripting and query languages skills, including Java, JavaScript, C# and SQL. In the last 2 years, I learned how to design and manipulate applications and databases. Owner of a Master’s Degree, during which there was constant use of office and statistical softwares. The data obtained in my research had to be analyzed, reported and discussed, which helped me acquire examination and investigative skills.';
    const quote = '"The limits of the possible can only be defined by going beyond them into the impossible." (Clarke, A. C.)';
    res.render('about', { 
      title: 'About',
      message,
      quote });
  };

  exports.projects = (req, res, next) => {
    const project1 = 'This application is a demo site for a school assigment that uses Entity Framework. It is a ASP.NET MVC Web Application which integrates a SQL Server database to perform CRUD operations.';
    const projectTitle1 ='Bookstore Website';
    const project2 = 'This application is a demo application for a school assigment. It has login functionality, database integration and uses charts and tables to show information.';
    const projectTitle2 = 'Bookstore Java App';
    const project3 = 'This is a document for a school assignment. It shows steps to create a Project Plan, which includes a Work Breakdown Structure, a Gantt Chart, a Risk Management Plan and more.';
    const projectTitle3 = 'Project Plan';
    res.render('projects', { 
      title: 'My Projects',
      projectTitle1,
      project1,
      projectTitle2,
      project2,
      projectTitle3,
      project3
     });
  };

  exports.services = (req, res, next) => {
    const message = 'Some of my services';
    res.render('services', { 
      title: 'Services  ',
      message });
  };

  exports.contact = (req, res, next) => {
    const message = 'Feel free to contact me about job propositions or questions';
    res.render('contact', { 
      title: 'Contact Me',
      message });
  };


  