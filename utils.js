function addZerosToId(id){
        if (id < 10) {
            //agrega 2 ceros al ID
            return '00'+id;
        } else if( id >= 10 && id < 99) {
            //agrega 1 cero al ID
            return '0'+id;
        } else {
            return id; //deja el iD como esta
        }
}