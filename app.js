import { createApp } from 'vue'


createApp({
    data() {
      return {
        newItem: '',
        items: []
      };
    },
    
    methods: {
      addItem() {
        if (this.newItem.trim()) {
          this.items.push(this.newItem.trim());
          this.newItem = ''; // Clear input after adding
        }
      },
      removeItem(index) {
        this.items.splice(index, 1);
      }
    }
  }).mount('#app');