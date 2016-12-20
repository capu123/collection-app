import { Collectable } from "./collectable.model";

export class CollectableService {
    private collectables: Collectable[] = [
        { name: 'Robin Karki', gender: 'Male', location: 'Sydney', 
          photo: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/14470651_10155262179088662_6630445797420378489_n.jpg?oh=ba3a30edaa13b767f476eff1a8b528be&oe=58FD3719'
        },
        { name: 'Raj Tandulkar', gender: 'Male', location: 'Kathmandu', 
          photo: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/1243634_10151609720242507_1694807913_o.jpg?oh=a5bbbba3e7536674f30a367ece595c51&oe=58DCF971'
        },
        { name: 'Komal Paudel', gender: 'Female', location: 'Florida', 
          photo: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/1393828_654525461253935_115960087_n.jpg?oh=4ed2b26158b7e27b0b2eaccf16716fc7&oe=58F3B12D'
        },
        { name: 'Trusar Shah', gender: 'Male', location: 'London', 
          photo: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/11403004_10152927781091440_5741562656313702106_n.jpg?oh=c4f90aae82599fe4651f8ca15e8043c4&oe=58E3AA0D'
        }
     ];
    private collection: Collectable[] = [];

    getCollectable(){
        return this.collectables;
    }
    getCollection(){
        return this.collection;
    }
    addToCollection(item: Collectable){
        if (this.collection.indexOf(item) !== -1){
            return;
        }
        this.collection.push(item);
    }
    removeToCollection(item: Collectable){
        this.collection.splice(this.collection.indexOf(item),1);
    }
}