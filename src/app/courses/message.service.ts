import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    @Output() sentMessage = new EventEmitter();

    setMessage(msg: string) {
        this.sentMessage.emit({ message: msg });
    }
}
