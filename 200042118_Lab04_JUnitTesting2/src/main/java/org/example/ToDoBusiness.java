package org.example;

import java.util.ArrayList;  
import java.util.List;  
  
// ToDoBusiness is a SUT (system under test)   
// ToDoService is a Dependency (as ToDoBusiness is dependent on it)  
  
public class ToDoBusiness {  
  
    public ToDoService doService;  
  
    public ToDoBusiness(ToDoService doService) {  
        this.doService = doService;  
    }  
      
    public List<String> getTodosforHibernate(String user) {  
          
        List<String> hibernatelist = new ArrayList<String>();  
        List<String> Combinedlist = doService.getTodos(user);  
          
        for(String todo: Combinedlist) {  
            if(todo.contains("Hibernate")) {  
                hibernatelist.add(todo);  
            }  
        }  
          
        return hibernatelist;  
        }  
    public void deleteTodosNotRelatedToHibernate(String user) {  
        
        List<String> Combinedlist = doService.getTodos(user);  
          
        for(String todos:Combinedlist) {  
            if(!todos.contains("Hibernate")) {  
                doService.deleteTodos(todos);  
            }  
        }  
    }  
 } 