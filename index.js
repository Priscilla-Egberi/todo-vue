const updates = Vue.createApp({
    data(){
        return{
            newItem:"",
            items:[
                {name:"cook rice", id:1},
                {name:"wash clothes", id:2},
                {name:"sweep the corridor", id:3},
                {name:"do my assignment", id:4},
            ],
            pinnedItems:[]
            
        };
    },
    // all functions are decleared here
    methods:{
        saveItem(){
            this.items.push({name:this.newItem, id:this.items.length + 1})
        },
        pinItem(item){
            this.pinnedItems.push(item);
            this.items.splice(this.items.indexOf(item), 1)
        },
        deleteItem(item){
            this.items.splice(this.items.indexOf(item), 1);
        },
        deletePinnedItem(item){
            this.pinnedItems.splice(this.pinnedItems.indexOf(item), 1);
        },
        unPinItem(item){
            this.items.push(item);
            this.pinnedItems.splice(this.pinnedItems.indexOf(item), 1)
        }
    }
});

updates.mount("#app");
