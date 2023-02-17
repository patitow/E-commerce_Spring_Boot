package ecommerce.com.api.products.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ecommerce.com.api.products.models.PostModel;
import ecommerce.com.api.products.models.ProductModel;
import ecommerce.com.api.products.repo.ProductRepo;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepo pr;
     
    @Autowired
    private PostModel rm;

    //Método para listar todos os produtos
    public Iterable<ProductModel> listarProdutos(){
        return pr.findAll();
    }
    
    //Método para cadastrar produtos
    public ResponseEntity<?> cadastrar(ProductModel pm){
        if(pm.getNomeProd()==""){
            rm.setMessage("O nome do produto é obrigatório. \n");
            return new ResponseEntity<PostModel>(rm, HttpStatus.BAD_REQUEST);
        }
        if(pm.getTipo()==""){
            rm.setMessage("O tipo do produto é obrigatório. \n");
            return new ResponseEntity<PostModel>(rm, HttpStatus.BAD_REQUEST);
        }
        if(pm.getMarca()==""){
            rm.setMessage("A marca do produto é obrigatória. \n");
            return new ResponseEntity<PostModel>(rm, HttpStatus.BAD_REQUEST);
        }
        if(pm.getPreco().toString()==""){
            rm.setMessage("O preço do produto é obrigatório. \n");
            return new ResponseEntity<PostModel>(rm, HttpStatus.BAD_REQUEST);
        }
        
        return new ResponseEntity<ProductModel>(pr.save(pm),HttpStatus.CREATED);
    }

}
