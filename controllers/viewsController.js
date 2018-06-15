/**
 * File Name: viewController.js
 * Author Name: Henrique Oliveira
 * Website Name: Assignment 1 - Express Portfolio Website
 * File Description: logical javaScript statements to control HTML views
 */

 // Module used to send email 
 const nodemailer = require('nodemailer');

 // Each function below control one view (index, about, projects, services and contact) 
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
      title: 'Projects',
      projectTitle1,
      project1,
      projectTitle2,
      project2,
      projectTitle3,
      project3
     });
  };

  exports.services = (req, res, next) => {
    res.render('services', { 
      title: 'Services'
      });
  };

  exports.contact = (req, res, next) => {
    const message = 'Feel free to contact me about job propositions or questions';
    res.render('contact', { 
      title: 'Contact',
      message,
      isActive: 'contact',
     });      
  };

  // Code obtained from https://nodemailer.com; used to setup contact form 
  exports.sendemail = (req, res) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
      // Create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });
  
      // Setup email data with unicode symbols
      const mailOptions = {
        from: req.body.email, // Sender address
        to: 'bar@example.com, baz@example.com', // List of receivers
        subject: 'message from portfolio contact form', // Subject line
        text: req.body.message, // Plain text body
        html: `<b>${req.body.message}</b>`, // HTML body
      };
  
      // Send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
    });
  
    res.redirect('/');
  };
  