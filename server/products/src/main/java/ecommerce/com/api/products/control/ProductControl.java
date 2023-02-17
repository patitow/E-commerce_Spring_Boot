package ecommerce.com.api.products.control;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductControl {
    

    @GetMapping("/")
    public String route(){
        return "Api de testes funcionando!";
    }
}

