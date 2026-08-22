import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ChatUser {
  id: number;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
  lastMessage?: string;
  time?: string;
  unreadCount?: number;
  isTyping?: boolean;
}

interface Message {
  id: number;
  senderName: string;
  senderAvatar: string;
  time: string;
  isMe: boolean;
  type: 'text' | 'images' | 'file' | 'typing';
  text?: string;
  images?: string[];
  file?: { name: string; size: string };
}


@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})

export class ChatPage {
  searchQuery = '';
  newMessage = '';

  activeUsers: ChatUser[] = [
    { id: 1, name: 'Patrick', avatar: 'https://i.pravatar.cc/150?img=11', status: 'online' },
    { id: 2, name: 'Doris', avatar: 'https://i.pravatar.cc/150?img=5', status: 'online' },
    { id: 3, name: 'Emily', avatar: 'https://i.pravatar.cc/150?img=9', status: 'online' },
    { id: 4, name: 'Steve', avatar: 'https://i.pravatar.cc/150?img=13', status: 'online' },
  ];

  recentChats: ChatUser[] = [
    { id: 1, name: 'Patrick Hendricks', avatar: 'https://i.pravatar.cc/150?img=11', status: 'online', lastMessage: 'hey! there I\'m available', time: '02:50 PM' },
    { id: 5, name: 'Mark Messer', avatar: 'https://i.pravatar.cc/150?img=12', status: 'online', lastMessage: 'Images', time: '10:30 AM', unreadCount: 2 },
    { id: 6, name: 'General', avatar: '', status: 'offline', lastMessage: 'This theme is Awesome!', time: '2:06 min' },
    { id: 2, name: 'Doris Brown', avatar: 'https://i.pravatar.cc/150?img=5', status: 'online', lastMessage: 'typing...', time: '10:05 PM', isTyping: true },
    { id: 7, name: 'Designer', avatar: '', status: 'offline', lastMessage: 'Next meeting tomorrow 10.00AM', time: '2:10 min', unreadCount: 1 },
    { id: 4, name: 'Steve Walker', avatar: 'https://i.pravatar.cc/150?img=13', status: 'online', lastMessage: 'Admin-A-zip', time: '01:16 PM' },
  ];

  messages: Message[] = [
    {
      id: 1,
      senderName: 'Doris Brown',
      senderAvatar: 'https://i.pravatar.cc/150?img=5',
      time: '10:05',
      isMe: false,
      type: 'text',
      text: '& Next meeting tomorrow 10.00AM'
    },
    {
      id: 2,
      senderName: 'Patricia Smith',
      senderAvatar: 'https://i.pravatar.cc/150?img=32',
      time: '10:06',
      isMe: true,
      type: 'text',
      text: 'Wow that\'s great'
    },
    {
      id: 3,
      senderName: 'Doris Brown',
      senderAvatar: 'https://i.pravatar.cc/150?img=5',
      time: '10:30',
      isMe: false,
      type: 'images',
      images: ['https://picsum.photos/200/150?random=1', 'https://picsum.photos/200/150?random=2']
    },
    {
      id: 4,
      senderName: 'Patricia Smith',
      senderAvatar: 'https://i.pravatar.cc/150?img=32',
      time: '01:30',
      isMe: true,
      type: 'file',
      file: { name: 'admin_v1.0.zip', size: '12.5 MB' }
    },
    {
      id: 5,
      senderName: 'Doris Brown',
      senderAvatar: 'https://i.pravatar.cc/150?img=5',
      time: '',
      isMe: false,
      type: 'typing'
    }
  ];

  sendMessage() {
    if (!this.newMessage.trim()) return;
    this.messages.push({
      id: Date.now(),
      senderName: 'Patricia Smith',
      senderAvatar: 'https://i.pravatar.cc/150?img=32',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
      type: 'text',
      text: this.newMessage
    });
    this.newMessage = '';
  }
  
}
