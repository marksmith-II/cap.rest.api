service ToDoTaskService {
    function getToDos(id:Integer) returns array of {
        id : Integer;
        userId : Integer;
        title : String;
        completed : Boolean;
    };
    action createToDos(userId:Integer, title: String, completed: Boolean) returns {
        id : Integer;
        userId : Integer;
        title : String;
        completed : Boolean;
    }
}
