package org.generation.SpringBootAssessment.repository.entity;

import java.util.List;

public abstract class TodoList {
    private Integer id;
    private String name;
    private String description;
    private String date;

    public TodoList(){}
    public Integer getId (){return id;}
    public void setId(Integer id) {this.id =id;}

    public String getName (){return name;}
    public void setName(String name) {this.name =name;}

    public String getDescription (){return description;}
    public void setDescription(String description) {this.description =description;}

    public String getDate (){return date;}
    public void setDate(String date) {this.date =date;}

    @Override
    public String toString(){
        return "TodoList{" + "id=" + id + "' name=' " + name + '\''
                + "' description=' " + description + '\''
                + "' date=' " + date +'}';
    }


    public abstract TodoList save(TodoList TodoList);

    public abstract void delete(int TodoListId);

    public abstract List<TodoList> all();

    public abstract TodoList findById(int TodoListId);
}
