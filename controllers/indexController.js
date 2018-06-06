exports.homePage = (req, res, next) => {
    res.render('index', { 
      title: 'Assignment 1 - Express Portfolio Website',
      message: 'Welcome to my personal portfolio website built using Express.js, Materialize front-end framework and implementing the EJS templating engine. Site deployment is done via GitHub and Heroku.' });
  };
  
  exports.about = (req, res, next) => {
    const message = 'About';
    res.render('about', { 
      title: 'Contact Me',
      message });
  };

  exports.projects = (req, res, next) => {
    const message = 'Projects';
    res.render('projects', { 
      title: 'Some of my projects',
      message });
  };

  exports.services = (req, res, next) => {
    const message = 'Some of my services';
    res.render('services', { 
      title: 'Contact Me',
      message });
  };

  exports.contact = (req, res, next) => {
    const message = 'blablabla';
    res.render('contact', { 
      title: 'Contact Me',
      message });
  };
  

  