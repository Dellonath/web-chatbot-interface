<h1 align="center">
  Web Chatbot with Angular
</h1>

<p align="center">
  <img width="400em" src="https://www.agenciaeplus.com.br/wp-content/uploads/2021/07/ferramentas-de-chatbot.jpg">
</p>

<h3 align="center">
  A Web Chatbot Interface using Angular and a own Cognitive Engine API 
</h3>

<br> 

<h2>
  Description
</h2>
<p>
    The project is a basic Chatbot front-end for an Cognitive Engine API that I developed to predict the intent and sentiment of a message. You can access the Cognitive Engine repository in this <a src="https://github.com/Dellonath/nlp-cognitive-engine">nlp-cognitive-engine</a>.
</p>

<h2>
  Technologies
</h2>

Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. In addition, Angular provides a large collection of reusable components that can be used as building blocks for applications. Angular is based on the open-source model and framework for building web applications. 

<div align="center">
    <img width="300em" src="https://static.cdnlogo.com/logos/a/35/angular.svg">
</div>

<h2>
  How install
</h2>

The <b>first</b> thing you need to do is download the <a src="https://github.com/Dellonath/nlp-cognitive-engine">nlp-cognitive-engine</a> repository and install it on your machine (<b>follow the repository instructions</b>). This will be the project back-end, where the Chatbot will use the API to try to predict the message intent and get the response.

Now, you need install ```Node.js``` and ```npm```. Run the follow command:
```terminal
sudo apt update
sudo apt install nodejs npm
```
And then you can install ```Angular/CLI```:
```terminal
npm install -g @angular/cli
```

Clone this project in your machine:
```terminal
git clone https://github.com/Dellonath/web-chatbot-interface.git
```

Inside the project folder, you can run the following command:
```terminal
npm install
```

At least, run the following command:
```terminal
ng serve
```

For standard, the project will be running in the browser in the ```localhost:4200/``` URL.

<h3>
  <b>Obs.</b> You need to run host the API in you machine, as described in nlp-cognitive-engine repo README.md.
</h3>

<h2>
  Preview
</h2>

This is a print of the chatbot interface. You can try it in the browser in the ```localhost:4200/``` URL. The third and fourth bot message was a response of the API.

<div align="center">
    <img width="650em" src="https://user-images.githubusercontent.com/56659549/173156166-0f0ef831-a5c5-423c-a96f-4a24fe8dc4b3.png">
</div>
