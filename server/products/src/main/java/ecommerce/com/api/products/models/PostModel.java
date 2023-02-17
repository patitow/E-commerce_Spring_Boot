package ecommerce.com.api.products.models;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

// classe responsável por filtrar e validar requests
@Component
@Getter
@Setter
public class PostModel {
    
    private String message;
}
