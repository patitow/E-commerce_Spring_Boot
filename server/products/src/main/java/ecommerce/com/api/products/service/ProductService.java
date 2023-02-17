package ecommerce.com.api.products.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.com.api.products.models.ProductModel;
import ecommerce.com.api.products.repo.ProductRepo;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepo pr;
     
    //Método para listar todos os produtos
    public Iterable<ProductModel> listarProdutos(){
        return pr.findAll();
    }

}
