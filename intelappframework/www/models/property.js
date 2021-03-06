Property = new $.mvc.model.extend("property", {
        price: '',
        title: '',
        summary: '',
        thumb_url: '',
        img_url: '',
        bedroom_number: '',
        bathroom_number: ''
    },

    //storage adaptor - override default as we don't want to save properties to local storage
    {
        properties: {},

        save:function(obj,callback){
            if (!obj.id) {
                obj.id=$.uuid();
            }
            this.properties[obj.id] = obj;
            return callback(obj);
        },
        fetch:function(obj,callback){
            return callback(this.properties[obj.id]);
        },
        getAll:function(id,callback){
            //not needed
        },
        remove:function(obj,callback){
            //not needed
        }
    }
);
var properties = new Property();
