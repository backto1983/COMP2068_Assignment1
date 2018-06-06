exports.homePage = (req, res, next) => {
    res.render('index', { 
      title: 'Assignment 1 - Express Portfolio Website',
      message: 'Welcome to my personal portfolio website built using Express.js, Materialize front-end framework and implementing the EJS templating engine. Site deployment is done via GitHub and Heroku.' });
  };
  
  exports.contact = (req, res, next) => {
    const message = 'blablabla';
    res.render('contact', { 
      title: 'Assignment 1 - Express Portfolio Website' });
  };
  

  