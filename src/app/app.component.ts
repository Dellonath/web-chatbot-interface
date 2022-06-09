import { Component } from '@angular/core';

interface CognitiveService {
  created_at: String
  intent: {
    name: String
    confidence: String
  }
  intents: {
    intent: String
    confidence: String
  }[]
  message: {
    text: String
    cleaned: String
    sentiment: {
      negative: String
      neutral: String
      positive: String
    }
  }
  response: String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'chatbot-angular';
  start = true;
  user_name = true;

  chat: {message: String, agent: String}[] = [
   
  ]

  public async start_chat() {
    await this.delay(500);
    this.chat.push({
      'message': 'Olá, sou o Maguinho, assistente virtual do Banco Magnus. Seja muito bem-vindo! Espero te ajudar no que você precisar. Qual seu nome?', 
      'agent': 'bot'
    });

    this.start = false;
  }

  public async set_name(user: any) {
    await this.delay(500);
    this.chat.push({
      'message': 'Muito bem, ' + user.value + ', o que você precisa?',
      'agent': 'bot'
    });

    this.user_name = false;
  }

  public async user_add_message(user: any) {

    this.chat.push({
      'message': user.value,
      'agent': 'user'
    });

    if (this.start) {
      await this.start_chat();      
    } else {
      if (this.user_name) {
        await this.set_name(user);
      } else{
        this.bot_add_message(user);
      }
    }

    user.value = '';
  }

  public bot_add_message(user: String) {
    this.getResponse(user).then(res => {
      this.chat.push({
        'message': res.response,
        'agent': 'bot'
      });
      console.log(res);
    });
  }

  public getResponse(user: any): Promise<CognitiveService> {
    return fetch('http://127.0.0.1:5000/predict?text=' + user.value)
            .then(res => res.json())
            .then(res => {
                    return res as CognitiveService
            })
  }

  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}





