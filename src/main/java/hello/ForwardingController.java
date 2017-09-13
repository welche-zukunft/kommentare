package hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardingController {
	@RequestMapping(value = "/{arg:(?!kommentar.html|add)}/**")
    public String forward() {
        return "forward:/kommentar.html";
   }

	
	@RequestMapping(value = "/")
    public String forward2() {
        return "forward:/kommentar.html";
   }
}