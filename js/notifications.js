// Notifications module
export function unreadCount(items=[]){ return items.filter(x=>!x.read).length; }
