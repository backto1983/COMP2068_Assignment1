exports.homePage = (req, res, next) => {
    res.render('index', { 
      title: 'Assignment 1 - Express Portfolio Website',
      name: 'Henrique Oliveira',
      message: 'Welcome to my personal portfolio website built using Express.js, Materialize front-end framework and implementing the EJS templating engine. Site deployment is done via GitHub and Heroku.' });
  };
  
  exports.about = (req, res, next) => {
    const message = 'I am a Computer Programmer student, currently enrolled at Georgian College. My program focus on developing scripting and query languages, including Java, JavaScript, C# and SQL. In the last 2 years, I learned how to design and manipulate applications and databases. Owner of a Master’s Degree, during which there was constant use of office and statistical softwares. The data obtained in my research had to be analyzed, reported and discussed, which helped me acquire examination and investigative skills.';
    const quote = 'The limits of the possible can only be defined by going beyond them into the impossible (Clarke, A. C.)';
    res.render('about', { 
      title: 'About',
      message,
      quote });
  };

  exports.projects = (req, res, next) => {
    const message = 'Projects';
    res.render('projects', { 
      title: 'Projects',
      message });
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


  