import { createApp } from 'vue'


createApp({
  data() {
    return {
      newItem: '',
      items: this.loadItems() // Load items from localStorage on initialization
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem.trim());
        this.newItem = ''; // Clear input after adding
        this.saveItems(); // Save items to localStorage
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.saveItems(); // Save items to localStorage
    },
    saveItems() {
      localStorage.setItem('todoItems', JSON.stringify(this.items));
    },
    loadItems() {
      const savedItems = localStorage.getItem('todoItems');
      return savedItems ? JSON.parse(savedItems) : [];
    }
  }
}).mount('#app');