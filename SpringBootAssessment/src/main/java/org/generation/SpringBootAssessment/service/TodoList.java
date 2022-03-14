package org.generation.SpringBootAssessment.service;
import org.generation.SpringBootAssessment.repository.entity.*;
import java.util.List;
public interface TodoList {
    TodoList save(TodoList todoList);
    void delete (int todoList);
    List<TodoList> all();
    TodoList findById (int todoListId);
}
