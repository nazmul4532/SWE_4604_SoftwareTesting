import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

import org.example.ToDoBusiness;
import org.example.ToDoService;

public class ToDoBusinessMock2 {
@Test
public void deleteTodosusing() {
	ToDoService todoService = mock(ToDoService.class); 
	 List<String> combinedlist = Arrays.asList("Use Hibernate Java", "Use Hibernate Core", "Use Hibernate", "Use Spring MVC");  
     when(todoService.getTodos("dummy")).thenReturn(combinedlist);
     ToDoBusiness business = new ToDoBusiness(todoService);  
     
     
     business.deleteTodosNotRelatedToHibernate("dummy");
     verify(todoService).deleteTodos("Use Spring MVC");
     
}

}
